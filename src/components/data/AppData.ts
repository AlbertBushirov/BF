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

	//Добавить товар в Избранное
	addFavorites(item: ICardItem) {
		if (!this.productLike(item)) {
			this.favorites.push(item);
			this.saveFavoritesToLocalStorage();
			this.emitChanges('favorites:changed');
		}
	}

	removeFromLike(id: string) {
		this.favorites = this.favorites.filter((it) => it.id !== id);
		this.saveFavoritesToLocalStorage();
		this.emitChanges('favorites:changed');
	}

	productLike(item: ICardItem): boolean {
		return Boolean(
			this.favorites.find((liketItem) => liketItem.id === item.id)
		);
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

	//Проверка, находится ли продукт в заказе.
	productOrder(item: ICardItem): boolean {
		return Boolean(this.basket.find((basketItem) => basketItem.id === item.id));
	}

	//Очистить корзину после заказа
	clearBasket() {
		this.basket = [];
		this.updateBasket();
	}

	//Обновить корзину
	updateBasket() {
		this.emitChanges('counter:changed', this.basket);
		this.emitChanges('basket:changed', this.basket); // Обновление корзины
		this.emitChanges('catalog:changed', this.items); // Обновляем каталог
	}

	//Удаление продукта из корзины
	removeFromBasket(id: string) {
		this.basket = this.basket.filter((it) => it.id !== id);
		this.emitChanges('basket:changed');
	}

	//Удаление продукта из корзины

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
		this.preview = item.id;
		this.emitChanges('preview:changed', item);
	}
}
