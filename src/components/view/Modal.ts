import { ensureElement } from '../../utils/utils';
import { Component } from '../base/Component';
import { IEvents } from '../base/events';

interface IModalData {
	content: HTMLElement;
}

export class Modal extends Component<IModalData> {
	protected _closeButton: HTMLButtonElement;
	protected _content: HTMLElement;
	protected _modalContainer: HTMLElement;

	constructor(container: HTMLElement, protected events: IEvents) {
		super(container);
		this._modalContainer = ensureElement<HTMLElement>(
			'.modal__container',
			container
		);

		this._closeButton = ensureElement<HTMLButtonElement>(
			'.modal__close',
			container
		);
		this._content = ensureElement<HTMLElement>('.modal__content', container);

		//обработчики событий для закрытия модального окна
		this._closeButton.addEventListener('click', this.close.bind(this));
		this.container.addEventListener('click', this.close.bind(this));

		this._content.addEventListener('click', (event) => event.stopPropagation());
	}

	set content(value: HTMLElement) {
		this._content.replaceChildren(value);
	}

	//Открытие модального окна
	open() {
		this.container.classList.add('modal_active');
		this.events.emit('modal:open');
	}

	// Закрытие модального окна
	close(): void {
		this.container.classList.remove('modal_active');
		this.content = null;
		this.events.emit('modal:close');
		window.location.hash = 'home';
		document.body.style.overflow = '';
		document.body.style.paddingRight = '';
	}

	renderMin(data: IModalData): HTMLElement {
		const isMobile = window.innerWidth <= 768;
		document.body.style.paddingRight = isMobile ? '5' : '15px';
		document.body.style.overflow = 'hidden';
		super.render(data);
		this.open();
		this._modalContainer.classList.add('activeMin');
		this._content.classList.add('activeMin');
		return this.container;
	}

	//Показать модальное окно
	render(data: IModalData): HTMLElement {
		const isMobile = window.innerWidth <= 768;
		document.body.style.paddingRight = isMobile ? '5' : '15px';
		document.body.style.overflow = 'hidden';
		super.render(data);
		this._modalContainer.classList.remove('activeMin');
		this._content.classList.remove('activeMin');
		this.open();
		return this.container;
	}
}
