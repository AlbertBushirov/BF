import { FormErrors, ICardItem, IProductItem, IPlayersForm } from '../../types';
import { Model } from '../base/Model';

//Изменение каталога
export type CatalogChangeEvent = {
	catalog: ICardItem;
	playersList: IPlayersForm;
};

export class AppData extends Model<IProductItem> {
	basket: ICardItem[] = [];
	favorites: ICardItem[] = [];
	items: ICardItem[];
	players: IPlayersForm[];

	preview: string | null;
	formErrors: FormErrors = {};

	//Добавить товар в корзину
	addBasket(item: ICardItem) {
		if (this.basket.indexOf(item) < 0) {
			this.basket.push(item);
			this.updateBasket();
		}
	}

	//Добавить товары по сроке
	addBasketString(itemIds: string[]) {
		itemIds.forEach((inputId) => {
			// Извлекаем часть до '+' из входного id
			const baseId = inputId.split('+')[0];

			const alreadyInBasket = this.basket.some(
				(item) => item.id.split('+')[0] === baseId
			);
			if (!alreadyInBasket) {
				const item = this.items.find(
					(item) => item.id.split('+')[0] === baseId
				);
				if (item) {
					this.basket.push(item);
				}
			}
		});
		this.updateBasket();
	}

	//Удаление продукта из корзины
	removeFromBasket(id: string) {
		this.basket = this.basket.filter((it) => it.id !== id);
		this.emitChanges('basket:changed');
	}

	restoreBasket(itemIds: string[]) {
		this.basket = [];

		itemIds.forEach((id) => {
			// Ищем оригинальный товар по основной части ID
			const originalId = id.split('+')[0]; // получаем оригинальный ID без суффикса
			const originalItem = this.items.find((item) => item.id === originalId);

			if (originalItem) {
				// Создаем копию с сохраненным ID
				this.basket.push({
					...originalItem,
					id: id, // сохраняем оригинальный сгенерированный ID
				});
			}
		});

		this.updateBasket();
	}

	//Добавить товар в Избранное
	addFavorites(item: ICardItem) {
		if (!this.productLike(item)) {
			this.favorites.push(item);
			this.updateFavorites();
			this.saveFavoritesToLocalStorage();
		}
	}

	removeFromLike(id: string) {
		this.favorites = this.favorites.filter((it) => it.id !== id);
		this.saveFavoritesToLocalStorage();
		this.emitChanges('items:changed');
	}

	saveFavoritesToLocalStorage() {
		try {
			localStorage.setItem('favorites', JSON.stringify(this.favorites));
		} catch (e) {
			console.warn('Не удалось сохранить favorites в localStorage', e);
		}
	}

	loadFavoritesFromLocalStorage() {
		try {
			const data = localStorage.getItem('favorites');
			if (data) {
				this.favorites = JSON.parse(data);
			}
		} catch (e) {
			console.warn('Не удалось загрузить favorites из localStorage', e);
			this.favorites = [];
		}
	}

	productLike(item: ICardItem): boolean {
		return Boolean(
			this.favorites.find((liketItem) => liketItem.id === item.id)
		);
	}

	//Проверка, находится ли продукт в заказе.
	productOrder(item: ICardItem): boolean {
		return Boolean(this.basket.find((basketItem) => basketItem.id === item.id));
	}

	//Очистить корзину
	clearBasket() {
		this.basket = [];
		this.updateBasket();
	}

	//Обновить корзину
	updateBasket() {
		this.emitChanges('basket:changed', this.basket); // Обновление корзины
	}

	updateFavorites() {
		this.emitChanges('items:changed', this.favorites);
	}

	//Получение продуктов из заказа
	getOrderProducts(): ICardItem[] {
		return this.basket;
	}

	getFavoritesProducts(): ICardItem[] {
		return this.favorites;
	}

	//Подсчет общей стоимости
	getTotalPrice() {
		return this.basket.reduce((total, item) => {
			return total + item.price;
		}, 0);
	}

	//Добавление каталога карточек на главную страницу
	setCatalog(item: ICardItem[]) {
		this.items = item;
		this.emitChanges('items:changed', { catalog: this.items });
	}

	setPreview(item: ICardItem) {
		if (item && item.id) {
			this.preview = item.id;
			this.emitChanges('preview:changed', item);
		}
	}
}
