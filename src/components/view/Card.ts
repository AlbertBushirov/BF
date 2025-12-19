import { cloneTemplate, ensureElement } from '../../utils/utils';
import { Component } from '../base/Component';
import { EventEmitter } from '../base/events';
import { ICardItem, IItemWeapons } from '../../types';
import { Weapon } from './Weapon';

interface ICardActions {
	onClick: (event: {
		isWheels?: boolean;
		price?: number;
		weapons?: IItemWeapons;
	}) => void;
	onChange?: (data: { isWheels?: boolean; price?: number }) => void;
	onChangeWeapon?: (data: { weapons?: IItemWeapons }) => void;
	onChangeLike?: (data: { isLike?: boolean }) => void;
}

interface Category {
	[key: string]: string;
}

const category: Category = {
	'Гильдия вольных стрелков': 'card__category_GVS',
	'Гильдия вольных стрелков ОБЕ': 'card__category_GVS',
	'Войска Колдуна': 'card__category_hard',
	'Войска Колдуна ОБЕ': 'card__category_hard',
	'Боевое существо ОБЕ': 'card__category_drakon',
	'Легионеры Некроманта': 'card__category_nekromant',
	'Легионеры Некроманта ОБЕ': 'card__category_nekromant',
	'Гвардия Чародея': 'card__category_charodey',
	'Гвардия Чародея ОБЕ': 'card__category_charodey',
	'Боевая машина': 'card__category_additional',
	'Нейтральный отряд (КБФ)': 'card__category_storonniye_NO',
	'Ст. производители (НО) ОБЕ': 'card__category_storonniye_NO',
	'Альянс Свободных (КБФ)': 'card__category_storonniye_AS',
	'Воители иных миров (КБФ)': 'card__category_storonniye_VIM',
	'Х-Бункер (КБФ)': 'card__category_storonniye_XB',
	'Войско павшего мага (КБФ)': 'card__category_storonniye_VPM',
	'Войско павшего мага ОБЕ (КБФ)': 'card__category_storonniye_VPM',
	'Войско павшего мага (АОБФ)': 'card__category_storonniye_VPM',
	'Легионы черной планеты (КБФ)': 'card__category_storonniye_LCHP',
	'Легионы черной планеты ОБЕ (КБФ)': 'card__category_storonniye_LCHP',
	'База (КБФ)': 'card__category_storonniye_B',
	'База (АОБФ)': 'card__category_storonniye_B',
	'База ОБЕ (КБФ)': 'card__category_storonniye_B',
	'Нейтралы (АОБФ)': 'card__category_storonniye_NO',
	'Альянс Свободных (АОБФ)': 'card__category_AS_AOBF',
	'Техлист (1П)': 'card__category_other',
	'Техлист (1А)': 'card__category_other',
	'Техлист (1МП)': 'card__category_other',
	'Техлист (1К)': 'card__category_other',
	'Техлист (2П)': 'card__category_other',
	'Техлист (2А)': 'card__category_other',
	'Техлист (2К)': 'card__category_other',
	'Техлист (2МП)': 'card__category_other',
	кнопка: 'card__category_button',
	другое: 'card__category_other',
	дополнительное: 'card__category_additional',
};

export class Card extends Component<ICardItem> {
	protected _title: HTMLElement;
	protected _directory: HTMLElement;
	protected _image?: HTMLImageElement;
	public _category?: HTMLElement;
	public _gallery: HTMLElement;
	protected _description?: HTMLImageElement;
	protected _marker?: HTMLImageElement;
	protected _markerTitle: HTMLElement;
	protected _markers: HTMLInputElement;
	protected _price: HTMLElement;
	protected priceValue: number;
	protected _button?: HTMLButtonElement;
	public _buttonLike: HTMLInputElement;
	protected isLiked: boolean = false;
	protected volumeLevel: HTMLElement;
	protected increaseButton: HTMLButtonElement;
	protected decreaseButton: HTMLButtonElement;
	public _inputWheels: HTMLInputElement;
	protected basketElement?: BasketElement;
	protected wheelsPrice?: number;
	protected _weapons?: HTMLInputElement;
	protected weapons?: IItemWeapons;
	public volumeLevels: number[];
	protected weaponNumperElements: HTMLElement[] = [];

	constructor(
		protected blockName: string,
		container: HTMLElement,
		action?: ICardActions
	) {
		super(container, new EventEmitter()); // Инициализация EventEmitter
		this._category = container.querySelector('.card__category');
		this._title = ensureElement<HTMLElement>('.card__title', container);
		this._directory = container.querySelector('.directory');
		this._description = container.querySelector('.card__description');
		this._image = container.querySelector('.card__image');
		this._gallery = container.querySelector('.gallery__item');
		this._marker = container.querySelector('.gallery_marker__image');
		this._markerTitle = container.querySelector('.gallery_marker__title');
		this._markers = container.querySelector('.gallery__marker');
		this._price = ensureElement<HTMLElement>('.card__price', container);
		this._button = container.querySelector('.card__button');
		this._buttonLike = container.querySelector('.button_like_preview');
		this._weapons = container.querySelector('.weapons-list');

		// Ссылка на чекбокс
		this._inputWheels = container.querySelector(
			'.input_wheels'
		) as HTMLInputElement;
		if (this._image) {
			this._image.addEventListener('click', this.handleImageClick.bind(this));
		}
		if (this._description) {
			this._description.addEventListener(
				'click',
				this.handledescriptionClick.bind(this)
			);
		}
		if (action?.onClick) {
			const handleAction = () => {
				action.onClick({
					isWheels: this._inputWheels?.checked,
					price: this.price,
				});
			};

			if (this._button) {
				this._button.addEventListener('click', handleAction);
			} else {
				container.addEventListener('click', handleAction);
			}
		}

		if (this._buttonLike) {
			this._buttonLike.addEventListener('change', () => {
				this.isLiked = this._buttonLike.checked;
				action.onChangeLike({ isLike: this.isLiked });
				this.addClassButtonLikeActive();
			});
		}
	}

	categoryPadding() {
		if (!this._category.textContent.includes('Техлист')) {
			this._category.style.padding = '0.4rem 1rem 0.5rem 1.9rem';
		}
	}

	addClassButtonLikeActive() {
		if (this._buttonLike) {
			if (this.isLiked) {
				this._buttonLike.classList.add('button_like_preview_active');
			} else {
				this._buttonLike.classList.remove('button_like_preview_active');
			}
		}
		this.events.emit('favorites:changed');
	}

	private addEnlargedClassToImage() {
		if (this._image) {
			this._image.classList.remove('enlarged');
		}
	}

	private addEnlargedClassToDescription() {
		if (this._description) {
			this._description.classList.remove('enlarged');
		}
	}

	private handleImageClick(event: MouseEvent) {
		event.stopPropagation();
		this.addEnlargedClassToDescription();
		const image = this._image;
		if (image) {
			if (image.classList.contains('enlarged')) {
				image.classList.remove('enlarged');
				this.hideDirectory();
			} else {
				image.classList.add('enlarged');
				this.showDirectory();
			}
		}
	}

	private showDirectory() {
		const directory = this._directory;
		if (directory) {
			setTimeout(() => {
				directory.classList.add('show');
			});
		}
	}

	private hideDirectory() {
		const directory = this._directory;
		if (this._directory) {
			setTimeout(() => {
				directory.classList.remove('show');
			});
		}
	}

	private handledescriptionClick(event: MouseEvent) {
		event.stopPropagation();
		this.addEnlargedClassToImage();
		const image = this._description;
		if (image) {
			if (image.classList.contains('enlarged')) {
				image.classList.remove('enlarged');
				this.hideDirectory();
			} else {
				image.classList.add('enlarged');
				this.showDirectory();
			}
		}
	}

	resetWeaponCount() {
		this.weapons.forEach((weapon) => {
			weapon.quantity = 0;
		});
		this.renderWeapons(this.weapons);
		this.BasedOnWeapon();
	}

	private totalWeaponCount(): number {
		return this.weapons.reduce((total, weapon) => total + weapon.quantity, 0);
	}

	private increaseWeaponCount(index: number) {
		if (this.totalWeaponCount() < 2) {
			// Проверка на общую сумму
			this.weapons[index].quantity++;
			this.renderWeapons(this.weapons);
			this.BasedOnWeapon();
		} else {
			console.warn('Общая сумма weapon_numper не может превышать 2');
		}
	}

	private decreaseWeaponCount(index: number) {
		if (this.weapons[index].quantity > 0) {
			this.weapons[index].quantity--;
			this.renderWeapons(this.weapons);
			this.BasedOnWeapon(); // Обновляем цену на основе оружия
		}
	}

	private notifyBasketChanged() {
		if (this.events) {
			this.events.emit('basket:changed');
		} else {
			console.error('Events manager is not initialized');
		}
	}

	getPriceAdjustmentBasedOnWheels(): number {
		if (this._inputWheels) {
			// Если инпут существует, проверяем его состояние
			return this._inputWheels.checked ? this.wheelsPrice : -this.wheelsPrice;
		} else {
			console.warn('Input wheels element not found!');
			return 0; // Возвращаем 0, если элемент не найден
		}
	}

	private updatePriceBasedOnWheels() {
		const priceChange = this.getPriceAdjustmentBasedOnWheels();

		const updatedPrice = (this.price || 0) + priceChange;

		this.price = updatedPrice;

		if (this.basketElement) {
			this.basketElement.price = updatedPrice;
		}

		this.notifyBasketChanged();
	}

	BasedOnWheels() {
		// Добавляем обработчик события изменения состояния инпута
		this._inputWheels.addEventListener(
			'change',
			this.updatePriceBasedOnWheels.bind(this)
		);
	}

	BasedOnLike() {
		// Добавляем обработчик события изменения состояния инпута
		this._buttonLike.addEventListener(
			'change',
			this.addClassButtonLikeActive.bind(this)
		);
	}

	public BasedOnWeapon() {
		const weaponsPrice = this.weapons?.reduce(
			(total, weapon) => total + weapon.price * weapon.quantity,
			0
		);

		this.price = this.priceValue + weaponsPrice;
		this.notifyBasketChanged(); // Уведомляем о изменении корзины
	}

	//Отключение кнопки
	disableButton(value: number | null) {
		if (this._button) {
			this._button.disabled = !value;
		}
	}

	set id(value: string) {
		this.container.dataset.id = value;
	}

	get id(): string {
		return this.container.dataset.id || '';
	}

	//Установка заголовка элемента
	set title(value: string) {
		this.setText(this._title, value);
	}

	set directory(value: string) {
		this.setText(this._directory, value);
		if (value === undefined) {
			this._directory.style.display = 'none';
		}
	}

	get title(): string {
		return this._title.textContent || '';
	}

	set buttonTitle(value: string) {
		if (this._button) {
			this.setText(this._button, value);
		}
	}

	set buttonLike(value: boolean) {
		if (this._buttonLike) {
			this.setChecked(this._buttonLike, value);
		}
	}

	set image(value: string) {
		this.setImage(this._image, value, this.id);
	}

	//Проверка на 'Бесценно'
	set price(value: number) {
		this.setText(this._price, value ? `${value.toString()} очков` : 'Бесценно');
		this.disableButton(value);

		// Обновляем цену в корзине, если товар добавлен
		if (this.basketElement) {
			this.basketElement.price = value || 0;
		}
	}

	get price(): number {
		return Number(this._price.textContent?.replace(' очков', '') || 0);
	}

	//Отображение артефакта
	set description(value: string) {
		this.setImage(this._description, value, this.id);
	}

	//Описание категории товара
	set category(value: string) {
		this.setText(this._category, value);
		this.toggleClass(this._category, category[value], true);
	}

	set isWheels(value: boolean) {
		this._inputWheels.checked = value;
		const url = new URL(window.location.href);
		url.searchParams.set('wheels', 'value');
		history.pushState({}, '', url.toString());
	}

	set marker(value: string) {
		this.setImage(this._marker, value);
	}

	set markerTitle(value: string) {
		this.setText(this._markerTitle, value);
	}

	renderWeapons(weapons: IItemWeapons) {
		if (weapons && this._weapons) {
			const weaponsElements = weapons.map((weapon, index) => {
				const container = cloneTemplate('#weapon');
				const weaponEl = new Weapon(container, {
					increase: () => {
						this.increaseWeaponCount(index);
					},
					decrease: () => {
						this.decreaseWeaponCount(index);
					},
				});
				return weaponEl.render({
					...weapon,
					isMax: this.totalWeaponCount() >= 2,
				});
			});
			this._weapons.replaceChildren(...weaponsElements);
		}
	}

	render(data: ICardItem): HTMLElement {
		const element = super.render(data);
		this.priceValue = data.price;
		if ('weapons' in data) {
			this.renderWeapons(data.weapons);
		}
		return element;
	}
}

export interface IBasketItem {
	price: number;
	image: string;
	description: string;
}

export class BasketElement extends Component<IBasketItem> {
	protected _index: HTMLElement;
	public _title: HTMLElement;
	public _price: HTMLElement;
	protected _button: HTMLButtonElement;
	protected _image?: HTMLImageElement;
	protected _description?: HTMLImageElement;
	protected _inputWheels?: HTMLInputElement;
	protected wheelsPrice?: number;
	protected _weapons?: HTMLInputElement;
	protected weapons?: IItemWeapons;
	protected _directory: HTMLElement;

	constructor(
		container: HTMLElement,
		index: number,
		events: EventEmitter,
		protected action?: ICardActions
	) {
		super(container);

		this._index = ensureElement<HTMLElement>('.basket__item-index', container);
		this.setText(this._index, index + 1);
		this._directory = container.querySelector('.directory');
		this._title = ensureElement<HTMLElement>('.card__title', container);
		this._price = ensureElement<HTMLElement>('.card__price_basket', container);
		this._button = container.querySelector('.card__button');
		this._image = container.querySelector('.card__image');
		this._description = container.querySelector('.card__description');
		this._inputWheels = container.querySelector(
			'.input_wheels'
		) as HTMLInputElement;
		this._weapons = container.querySelector('.weapons-list');

		this.events = events;

		if (this._inputWheels) {
			this._inputWheels.addEventListener('change', () => this.updatePrice());
		}

		if (this.weapons) {
			this._weapons.addEventListener(
				'change',
				() => this.action?.onChangeWeapon
			);
		}

		if (action?.onClick) {
			const handleClick = () => {
				const isWheels = this._inputWheels
					? this._inputWheels.checked
					: undefined;
				action.onClick({
					isWheels,
					price: this.priceValue,
				});
			};
			this._button.addEventListener('click', handleClick);
		}
		if (this._description) {
			this._description.addEventListener(
				'click',
				this.handledescriptionClick.bind(this)
			);
		}
		if (this._image) {
			this._image.addEventListener('click', this.handleImageClick.bind(this));
		}
		this.events.on('basket:save', () => {
			this.addEnlargedClassToImage();
		});
	}

	private handledescriptionClick(event: MouseEvent) {
		event.stopPropagation();
		this.addEnlargedClassToImage();
		const image = this._description;
		if (image) {
			if (image.classList.contains('enlarged')) {
				image.classList.remove('enlarged');
			} else {
				image.classList.add('enlarged');
			}
		}
	}

	private addEnlargedClassToImage() {
		if (this._image) {
			this._image.classList.remove('enlarged');
		}
	}

	private addEnlargedClassToDescription() {
		if (this._description) {
			this._description.classList.remove('enlarged');
		}
	}

	private handleImageClick(event: MouseEvent) {
		event.stopPropagation();
		this.addEnlargedClassToDescription();
		const image = this._image;
		if (image) {
			if (image.classList.contains('enlarged')) {
				image.classList.remove('enlarged');
			} else {
				image.classList.add('enlarged');
			}
		}
	}

	// Метод для обновления цены
	updatePrice() {
		let currentPrice = parseInt(
			this._price.textContent?.replace(' очков', '') || '0',
			10
		);

		if (this._inputWheels) {
			if (this._inputWheels.checked) {
				currentPrice += this.wheelsPrice || 0;
			} else {
				currentPrice -= this.wheelsPrice || 0;
			}
		}

		this.priceValue = currentPrice;

		if (this.action?.onChange) {
			this.action.onChange({
				price: currentPrice,
				isWheels: this._inputWheels?.checked,
			});
		}
	}

	private _priceValue = 0;

	get priceValue() {
		return this._priceValue;
	}

	set priceValue(value: number) {
		this._priceValue = value;
		this.price = value;
	}
	//
	set index(value: number) {
		this.setText(this._index, value);
	}

	set title(value: string) {
		this.setText(this._title, value);
	}

	set image(value: string) {
		this.setImage(this._image, value, this.title);
	}

	set description(value: string) {
		this.setImage(this._description, value, this.title);
	}

	// Отображает цену товаров в корзине
	set price(value: number) {
		this.setText(this._price, `${value} очков`);
	}

	set directory(value: string) {
		this.setText(this._directory, value);
	}

	get directory(): string {
		return this._directory.textContent || '';
	}

	set isWheels(value: boolean) {
		this._inputWheels.checked = value;
		const url = new URL(window.location.href);
		url.searchParams.set('wheels', 'value');
		history.pushState({}, '', url.toString());
	}

	set isWeapons(value: boolean) {
		this._weapons.checked = value;
	}

	private totalWeaponCount(): number {
		return this.weapons.reduce((total, weapon) => total + weapon.quantity, 0);
	}

	private increaseWeaponCount(index: number) {
		if (this.totalWeaponCount() < 2) {
			// Проверка на общую сумму
			this.weapons[index].quantity++;
			this.renderWeapons(this.weapons);
			this.BasedOnWeapon();
		} else {
			console.warn('Общая сумма weapon_numper не может превышать 2');
		}
	}

	private decreaseWeaponCount(index: number) {
		if (this.weapons[index].quantity > 0) {
			this.weapons[index].quantity--;
			this.renderWeapons(this.weapons);
			this.BasedOnWeapon();
		}
	}

	private notifyBasketChanged() {
		if (this.events) {
			this.events.emit('basket:changed');
		} else {
			console.error('Events manager is not initialized');
		}
	}

	public BasedOnWeapon() {
		const weaponsPrice =
			this.weapons?.reduce(
				(total, weapon) => total + weapon.price * weapon.quantity,
				0
			) || 0;

		this.price = this.priceValue + weaponsPrice;
		this.notifyBasketChanged();
	}

	renderWeapons(weapons: IItemWeapons) {
		if (weapons && this._weapons) {
			const selectedWeapons = weapons.filter((weapon) => weapon.quantity > 0);

			const weaponsElements = selectedWeapons.map((weapon, index) => {
				const container = cloneTemplate('#weapon');
				const weaponEl = new Weapon(container, {
					increase: () => {
						this.increaseWeaponCount(index);
					},
					decrease: () => {
						this.decreaseWeaponCount(index);
					},
				});
				return weaponEl.render({
					...weapon,
					isMax: this.totalWeaponCount() >= 2,
				});
			});
			this._weapons.replaceChildren(...weaponsElements);
		}
	}

	render(data: ICardItem): HTMLElement {
		const element = super.render(data);
		this.priceValue = data.price;
		if ('weapons' in data) {
			this.renderWeapons(data.weapons);
		}
		return element;
	}
}
