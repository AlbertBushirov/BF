import { backgroundClip } from 'html2canvas/dist/types/css/property-descriptors/background-clip';
import { createElement, ensureElement } from '../../utils/utils';
import { Component } from '../base/Component';
import { EventEmitter } from '../base/events';
import html2canvas from 'html2canvas';

interface IBasketView {
	items: HTMLElement[];
	total: number;
}

export class Basket extends Component<IBasketView> {
	protected _list: HTMLElement;
	protected _total: HTMLElement;
	protected _buttonBasket: HTMLElement;
	protected _buttonSave: HTMLElement;
	protected _index: HTMLElement;
	protected _title: HTMLElement;
	protected _price: HTMLElement;
	protected _button: HTMLButtonElement;
	protected _isArtefactSaveEnabled: boolean = false;

	protected _description?: HTMLImageElement;
	protected _footerPrice: HTMLElement;

	constructor(container: HTMLElement, protected events: EventEmitter) {
		super(container);

		this._list = ensureElement<HTMLElement>('.basket__list', this.container);
		this._total = this.container.querySelector('.basket__price');
		this._buttonBasket = this.container.querySelector('.basket__button');
		this._buttonSave = this.container.querySelector('.button_save');
		this._footerPrice = document.querySelector('.header_price');
		if (this._buttonBasket) {
			this._buttonBasket.addEventListener('click', () => {
				events.emit('basket:clear');
			});
		}

		if (this._buttonSave) {
			this._buttonSave.addEventListener('click', () => {
				events.emit('basket:save');
				this.saveBasketAsImage();
			});
		}

		this.events.on('artefact:save', () => {
			this._isArtefactSaveEnabled = true;
		});

		this.events.on('artefact:cancel', () => {
			this._isArtefactSaveEnabled = false;
		});

		this.items = [];
	}

	private saveBasketAsImage() {
		const basketList = document.querySelector('.basket__list') as HTMLElement;

		if (!basketList) {
			return;
		}

		const items = basketList.querySelectorAll('.basket__item');

		if (!this._isArtefactSaveEnabled) {
			basketList.style.width = '570px';
		} else {
			basketList.style.width = '880px';
		}

		html2canvas(basketList, {
			ignoreElements: (element) => {
				return (
					(!this._isArtefactSaveEnabled &&
						element.classList.contains('card__description')) ||
					element.classList.contains('card__title') ||
					element.classList.contains('basket__item-delete') ||
					element.classList.contains('card__price_basket')
				);
			},
		})
			.then((canvas) => {
				// Создаем изображение из канваса
				const link = document.createElement('a');
				link.href = canvas.toDataURL('image/jpeg', 1.0);
				link.download = 'MyRoster.jpg';
				link.click();
				items.forEach((item) => {
					const basketItem = item as HTMLElement;
					basketItem.style.paddingLeft = '';
					basketList.style.width = '';
				});
			})
			.catch((error) => {
				console.error('Error generating image:', error);
			});
	}

	set items(items: HTMLElement[]) {
		if (items.length) {
			this._list.replaceChildren(...items);
			this.setDisabled(this._buttonBasket, false);
			this.setDisabled(this._buttonSave, false);
		} else {
			const emptyMessage = createElement<HTMLParagraphElement>('p');
			this.setText(emptyMessage, 'Армия не выбрана');
			this._list.replaceChildren(emptyMessage);
			this.setDisabled(this._buttonBasket, true);
			this.setDisabled(this._buttonSave, true);
		}
	}

	set total(total: number) {
		if (this._total) {
			this.setText(this._total, `${total.toString()} очков`);
			this.updateFooterPrice(total); // Обновляем сумму в footer
		} else {
			console.warn('Element for total price is not found.');
		}
	}

	private updateFooterPrice(total: number) {
		if (this._footerPrice) {
			this.setText(
				this._footerPrice,
				`Сумма ростера: ${total.toString()} очков`
			);
		} else {
			console.warn('Element for footer price is not found.');
		}
	}
}
