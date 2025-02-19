import { ensureElement } from '../../utils/utils';
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
	protected _wrapper: HTMLElement;
	protected _basket: HTMLElement;
	protected _modal: HTMLElement;
	protected _rating: HTMLElement;

	constructor(container: HTMLElement, protected events: IEvents) {
		super(container);

		this._counter = ensureElement<HTMLElement>(
			'.header__basket-counter',
			container
		);
		this._catalog = ensureElement<HTMLElement>('.gallery', container);
		this._wrapper = ensureElement<HTMLElement>('.page__wrapper', container);
		this._basket = ensureElement<HTMLElement>('.header__basket', container);
		this._modal = ensureElement<HTMLElement>('.modal__container', container);
		this._rating = ensureElement<HTMLElement>('.rating__point', container);

		// обработчик клика на корзину
		this._basket.addEventListener('click', () => {
			this.events.emit('basket:open');
		});

		this._rating.addEventListener('click', () => {
			this.events.emit('rating:open');
		});
	}
	//Установка значения счетчика корзины.
	set counter(value: number) {
		this.setText(this._counter, String(value));
	}

	set catalog(items: HTMLElement[]) {
		this._catalog.replaceChildren(...items);
	}

	set locked(value: boolean) {
		this.toggleClass(this._wrapper, 'page__wrapper_locked', value);
		this.toggleClass(this._modal, 'modal__container_locked', value);
	}
}
