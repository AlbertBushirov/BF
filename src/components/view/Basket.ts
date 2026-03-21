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
	protected _formLimit: HTMLElement;
	public _inputLimit: HTMLInputElement;
	protected _buttonLimit: HTMLButtonElement;
	protected _isArtefactSaveEnabled: boolean = false;
	public _limit: number | null = null;

	protected _description?: HTMLImageElement;
	protected _footerPrice: HTMLElement;

	constructor(container: HTMLElement, protected events: EventEmitter) {
		super(container);

		this._list = ensureElement<HTMLElement>('.basket__list', this.container);
		this._total = this.container.querySelector('.basket__price');
		this._buttonBasket = this.container.querySelector('.basket__button');
		this._buttonSave = this.container.querySelector('.button_save');
		this._footerPrice = document.querySelector('.header_price');
		this._formLimit = this.container.querySelector('.form_limit');
		this._inputLimit = this._formLimit.querySelector('.input_limit');
		this._buttonLimit = this._formLimit.querySelector('.button_limit');
		console.log('Контейнер:', this.container);
		console.log('Форма:', this._formLimit);
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

		if (this._buttonLimit) {
			this._buttonLimit.addEventListener('click', () => {
				events.emit('basket:limit');
			});
		}

		if (this._inputLimit) {
			this._inputLimit.addEventListener('input', () => {
				this._buttonLimit.disabled = this._inputLimit.value.trim() === '';
			});
		}

		this.events.on('artefact:save', () => {
			this._isArtefactSaveEnabled = true;
		});

		this.events.on('artefact:cancel', () => {
			this._isArtefactSaveEnabled = false;
		});

		this.events.on('limit_off', () => {
			this._formLimit.style.display = 'none';
		});

		this.events.on('limit_on', () => {
			this._formLimit.style.display = 'flex';
		});

		this.items = [];
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

	basketLimit(current: number, limit: number | null) {
		this._limit = limit;
		this.total = current;
		this._buttonLimit.disabled = true;
	}

	set total(total: number) {
		if (this._limit) {
			// Если лимит установлен, рисуем красивую строку
			const text = `${total} / ${this._limit} очков`;
			this.setText(this._total, text);
			this.setText(this._footerPrice, text);
			this.updateFooterPrice();
		} else {
			this.setText(this._total, `${total.toString()} очков`);
			this.updateFooterPrice();
		}
	}

	private updateFooterPrice() {
		if (this._footerPrice) {
			this.setText(
				this._footerPrice,
				`Сумма ростера: ${this._total.textContent}`
			);
		} else {
			console.warn('Element for footer price is not found.');
		}
	}

	private saveBasketAsImage() {
		const basketList = document.querySelector('.basket__list') as HTMLElement;
		if (!basketList) return;

		const items = basketList.querySelectorAll('.basket__item');
		const isMobile = window.innerWidth <= 768;

		// Настройки стилей для захвата
		if (!this._isArtefactSaveEnabled) {
			basketList.style.width = isMobile ? '400px' : '575px';
		} else {
			basketList.style.width = isMobile ? '620px' : '885px';
		}
		items.forEach((item) => {
			const basketItem = item as HTMLElement;
			basketItem.style.paddingLeft = '10px';
		});

		const totalText = this._total?.textContent || '';
		const displayTotal = `Сумма ростера: ${totalText}`;

		const totalElement = document.createElement('div');
		totalElement.textContent = displayTotal;
		totalElement.style.cssText = `
		margin-top: 15px;
		padding: 16px;
		text-align: center;
		font-size: ${isMobile ? '24px' : '32px'};
		font-weight: bold;
		background-color: rgba(0, 0, 0, 0.5);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.51);
		width: 100%;
		box-sizing: border-box;
	`;

		basketList.appendChild(totalElement);

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
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
					scale: 4,
					useCORS: true,
					allowTaint: true,
				})
					.then((canvas) => {
						if (basketList.contains(totalElement)) {
							basketList.removeChild(totalElement);
						}

						const link = document.createElement('a');
						link.href = canvas.toDataURL('image/jpeg', 1.0);
						link.download = 'MyRoster.jpg';
						link.click();

						items.forEach((item) => {
							const basketItem = item as HTMLElement;
							basketItem.style.paddingLeft = '';
						});
						basketList.style.width = '';
					})
					.catch((error) => {
						console.error('Error generating image:', error);

						if (basketList.contains(totalElement)) {
							basketList.removeChild(totalElement);
						}
					});
			});
		});
	}
}
