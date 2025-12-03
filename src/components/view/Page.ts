import { ensureElement, createElement } from '../../utils/utils';
import { Component } from '../base/Component';
import { IEvents } from '../base/events';

interface IPage {
	counter: number;
	catalog: HTMLElement[];
	locked: boolean;
}

export class Page extends Component<IPage> {
	protected _counter: HTMLElement;
	protected _catalog: HTMLElement;
	protected _gallery: HTMLElement;
	protected _galleryItem: HTMLElement;
	protected _wrapper: HTMLElement;
	protected _basket: HTMLElement;
	protected _modal: HTMLElement;
	protected _rating: HTMLElement;
	protected _memo: HTMLElement;
	protected _search: HTMLElement;
	protected _tournament: HTMLElement;
	protected _settings: HTMLElement;
	public _pointWeapon: HTMLElement;
	public _pointFightMachine: HTMLElement;
	public _pointSpecial: HTMLElement;
	public _pointNecromancer: HTMLElement;
	public _pointGVS: HTMLElement;
	public _pointSorcerer: HTMLElement;
	public _pointKBF: HTMLElement;
	public _pointAOBF: HTMLElement;
	protected _favoritesFooter: HTMLElement;
	private _scrollTop: number = 0;
	private _scrollLeft: number = 0;

	constructor(container: HTMLElement, protected events: IEvents) {
		super(container);

		this._counter = ensureElement<HTMLElement>(
			'.header__basket-counter',
			container
		);
		this._catalog = ensureElement<HTMLElement>('.gallery', container);
		this._favoritesFooter = ensureElement<HTMLElement>(
			'.favorites__footer',
			container
		);
		this._wrapper = ensureElement<HTMLElement>('.page__wrapper', container);
		this._basket = ensureElement<HTMLElement>('.header__basket', container);
		this._modal = ensureElement<HTMLElement>('.modal__container', container);
		this._rating = ensureElement<HTMLElement>('.rating__point', container);
		this._memo = ensureElement<HTMLElement>('.memo__point', container);
		this._search = ensureElement<HTMLElement>('.search__point', container);
		this._settings = ensureElement<HTMLElement>('.settings__point', container);
		this._tournament = ensureElement<HTMLElement>(
			'.tournament__point',
			container
		);
		this._pointWeapon = ensureElement<HTMLElement>('.point_weapon');
		this._pointFightMachine = ensureElement<HTMLElement>('.point_fightMachine');
		this._pointSpecial = ensureElement<HTMLElement>('.point_special');
		this._pointNecromancer = ensureElement<HTMLElement>('.point_Necromancer');
		this._pointGVS = ensureElement<HTMLElement>('.point_GVS');
		this._pointSorcerer = ensureElement<HTMLElement>('.point_Sorcerer');
		this._pointKBF = ensureElement<HTMLElement>('.point_KBF');
		this._pointAOBF = ensureElement<HTMLElement>('.point_AOBF');

		this._basket.addEventListener('click', () => {
			this.events.emit('basket:open');
		});

		this._rating.addEventListener('click', () => {
			this.events.emit('rating:open');
		});

		this._memo.addEventListener('click', () => {
			this.events.emit('memo:open');
		});

		this._settings.addEventListener('click', () => {
			this.events.emit('settings:open');
		});

		this._tournament.addEventListener('click', () => {
			this.events.emit('tournament:open');
		});
		this._search.addEventListener('click', () => {
			this.events.emit('search:open');
		});
	}
	//Установка значения счетчика корзины.
	set counter(value: number) {
		this.setText(this._counter, String(value));
	}

	set favorites(value: number) {
		this.setText(
			this._favoritesFooter,
			`${String(value)} избранных Боевых единиц`
		);
	}

	showFavoritesFooter() {
		this._favoritesFooter.classList.add('favorites__footer_active');
	}

	favoritesTimeout() {
		this._favoritesFooter.classList.remove('favorites__footer_active');
	}

	set catalog(items: HTMLElement[]) {
		this._catalog.replaceChildren(...items);
		if (!items.length) {
			const emptyMessage = createElement<HTMLParagraphElement>('p');
			this.setText(emptyMessage, 'У вас нет избранных боевых единиц');
			this._catalog.replaceChildren(emptyMessage);
		}
	}

	set locked(value: boolean) {
		this.toggleClass(this._wrapper, 'page__wrapper_locked', value);
		this.toggleClass(this._modal, 'modal__container_locked', value);
	}
}
