import './scss/styles.scss';
import { API_URL, CDN_URL } from './utils/constants';
import {
	ICardItem,
	ITehListWheelsEtem,
	IFightingMachineItem,
	IItemWeapons,
} from './types/index';
import { EventEmitter } from './components/base/events';
import { WebLarekAPI } from './components/data/ExtensionApi';
import { AppData, CatalogChangeEvent } from './components/data/AppData';
import { Card, BasketElement } from './components/View/Card';
import { cloneTemplate, ensureElement } from './utils/utils';
import { Page } from './components/View/Page';
import { Modal } from './components/View/Modal';
import { Basket } from './components/View/Basket';
import { Rating } from './components/view/Rating';
import html2canvas from 'html2canvas';

//Управление событиями и API
const events = new EventEmitter();
const api = new WebLarekAPI(CDN_URL, API_URL);

//Переменные
const modal = new Modal(ensureElement<HTMLElement>('#modal-container'), events);
const page = new Page(document.body, events);
const cardCatalogTemplate = ensureElement<HTMLTemplateElement>('#card-catalog');

const cardPreviewTemplate = ensureElement<HTMLTemplateElement>('#card-preview');
const cardTehlistTemplate = ensureElement<HTMLTemplateElement>('#card-tehlist');
const cardTehlistWheelsTemplate = ensureElement<HTMLTemplateElement>(
	'#card-tehlist_wheels'
);
const cardFightMachineTemplate = ensureElement<HTMLTemplateElement>(
	'#card-fighting_machine'
);
const basketTemplate = ensureElement<HTMLTemplateElement>('#basket');
const cardBasketTemplate = ensureElement<HTMLTemplateElement>('#card-basket');
const cardBasketTemplateWheels = ensureElement<HTMLTemplateElement>(
	'#card-basket_wheels'
);
const cardBasketTemplateFM = ensureElement<HTMLTemplateElement>(
	'#card-basket_fighting_machine'
);
const ratingTemplate = ensureElement<HTMLTemplateElement>('#rating');

// Инициализация состояния приложения
const appData = new AppData({}, events);

const basket = new Basket(cloneTemplate(basketTemplate), events);

const rating = new Rating(cloneTemplate(ratingTemplate), events);

// Обработчик изменения каталога
events.on<CatalogChangeEvent>('items:changed', () => {
	page.catalog = appData.items.map((item) => {
		const card = new Card('card', cloneTemplate(cardCatalogTemplate), {
			onClick: () => events.emit('card:select', item),
		});

		return card.render(item);
	});
});

//Выбор товара
events.on('card:select', (item: ICardItem) => {
	appData.setPreview(item);
});

//Добавление продукта в корзину
events.on('product:add', (item: ICardItem) => {
	appData.addBasket(item);
	modal.close();
});

//Удаление продукта из корзины
events.on('product:delete', (item: ICardItem) => {
	appData.removeFromBasket(item.id);
});

const order: Record<string, number> = {
	list: 1,
	tech: 2,
	wheels: 3,
	machine: 4,
};

function saveBasketToLocalStorage() {
	const basketItems = appData.getOrderProducts();
	localStorage.setItem('basket', JSON.stringify(basketItems));
}

function loadBasketFromLocalStorage() {
	const storedBasket = localStorage.getItem('basket');
	if (storedBasket) {
		const basketItems = JSON.parse(storedBasket);
		basketItems.forEach((item: ICardItem) => {
			appData.addBasket(item);
		});
		events.emit('basket:changed');
	}
}

//Обработчик изменения в корзине и обновления общей стоимости
events.on('basket:changed', () => {
	page.counter = appData.getOrderProducts().length;
	let total = 0;

	const sortedItems = appData
		.getOrderProducts()
		.sort((a: ICardItem, b: ICardItem) => {
			const orderA = order[a.type] || 5;
			const orderB = order[b.type] || 5;

			if (a.category === 'Техлист' && b.category === 'Техлист') {
				return 0;
			}

			if (a.category === 'Техлист') {
				return 1;
			}

			if (b.category === 'Техлист') {
				return -1;
			}

			return orderA - orderB;
		});

	basket.items = sortedItems.map((item, index) => {
		let cardTemplate;

		// Выбор шаблона в зависимости от типа товара
		if (item.type === 'wheels') {
			cardTemplate = cardBasketTemplateWheels;
		} else if (item.type === 'machine') {
			cardTemplate = cardBasketTemplateFM;
		} else {
			cardTemplate = cardBasketTemplate;
		}

		const card = new BasketElement(cloneTemplate(cardTemplate), index, events, {
			onClick: () => {
				appData.removeFromBasket(item.id);
				saveBasketToLocalStorage();
			},
			onChange: ({ price, isWheels }) => {
				appData.basket[index].price = price;
				if (item.type === 'wheels') {
					(appData.basket[index] as ITehListWheelsEtem).isWheels = isWheels;
				}

				basket.total = appData.getTotalPrice();
				saveBasketToLocalStorage();
			},
			onChangeWeapon: ({ weapons }) => {
				if (item.type === 'machine') {
					(appData.basket[index] as IFightingMachineItem).weapons = weapons;
				}
			},
		});

		total += item.price;

		return card.render(item);
	});

	basket.total = total;

	saveBasketToLocalStorage();
});

// Открытие рейтинга игроков
events.on('rating:open', () => {
	page.locked = true;
	modal.render({
		content: rating.render({}),
	});
});

window.addEventListener('hashchange', () => {
	if (window.location.hash === '#rating') {
		events.emit('rating:open');
	}
});

document.addEventListener('DOMContentLoaded', () => {
	if (window.location.hash === '#rating') {
		events.emit('rating:open');
	}
});

// Обработчики изменения предпросмотра продукта и добавления в корзину
events.on('preview:changed', (item: ICardItem) => {
	if (item && item.type === 'list') {
		api.getWarriorsItem(item.id).then((res) => {
			item.id = res.id;
			item.category = res.category;
			item.title = res.title;
			item.description = res.description;
			item.image = res.image;
			item.price = res.price;
			item.directory = res.directory;

			const card = new Card('card', cloneTemplate(cardPreviewTemplate), {
				onClick: () => {
					if (appData.productOrder(item)) {
						appData.removeFromBasket(item.id);
						modal.close();
					} else {
						events.emit('product:add', item);
					}
				},
			});
			const buttonTitle: string = appData.productOrder(item)
				? 'Убрать'
				: 'Добавить';
			card.buttonTitle = buttonTitle;
			modal.render({
				content: card.render({
					...item,
					button: buttonTitle,
				}),
			});
		});
	}
});

function generateNewId(): string {
	return '' + Math.random().toString(36).substr(2, 9);
}

events.on('preview:changed', (item: ICardItem) => {
	if (item && item.type === 'tech') {
		api.getWeaponsItem(item.id).then((res) => {
			item.id = res.id;
			item.category = res.category;
			item.title = res.title;
			item.image = res.image;
			item.price = res.price;
			item.directory = res.directory;

			const card = new Card('card', cloneTemplate(cardTehlistTemplate), {
				onClick: () => {
					const newCartId = generateNewId();
					events.emit('product:add', {
						...item,
						id: newCartId,
					});
				},
			});

			modal.render({
				content: card.render({
					...item,
				}),
			});
		});
	}
});

events.on('preview:changed', (item: ICardItem) => {
	if (item && item.type === 'wheels') {
		api.getWeaponsWheelsItem(item.id).then((res) => {
			item.id = res.id;
			item.category = res.category;
			item.title = res.title;
			item.image = res.image;
			item.price = res.price;

			// Создание карточки товара
			const card = new Card('card', cloneTemplate(cardTehlistWheelsTemplate), {
				onClick: (formData: { isWheels?: boolean; price: number }) => {
					const newCartId = generateNewId();
					events.emit('product:add', {
						...item,
						isWheels: formData.isWheels,
						price: formData.price ?? item.price,
						id: newCartId,
					});
				},
			});

			card.BasedOnWheels();
			modal.render({
				content: card.render({
					...item,
				}),
			});
		});
	}
});

events.on('preview:changed', (item: ICardItem) => {
	if (item && item.type === 'machine') {
		api.getFightingMachineItem(item.id).then((res) => {
			item.id = res.id;
			item.category = res.category;
			item.title = res.title;
			item.image = res.image;
			item.price = res.price;
			item.weapons = res.weapons;

			// Создание карточки товара
			const card = new Card('card', cloneTemplate(cardFightMachineTemplate), {
				onClick: (formData: { weapons?: IItemWeapons }) => {
					const newCartId = generateNewId();
					events.emit('product:add', {
						...item,
						quantity: 0,
						weapon: formData.weapons,
						price: card.price,
						id: newCartId,
					});
				},
			});

			modal.render({
				content: card.render({
					...item,
				}),
			});
			card.resetWeaponCount();
		});
	}
});

//Открытие корзицы товаров
events.on('basket:open', () => {
	modal.render({
		content: basket.render({}),
	});
});

events.on('basket:clear', () => {
	appData.clearBasket();
	modal.close();
});

// Блокировка прокрутки страницы
events.on('basket:open', () => {
	page.locked = true;
});

events.on('modal:close', () => {
	page.locked = false;
	history.replaceState(null, '', window.location.pathname);
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Обработчик события для переключения меню
menuToggle.addEventListener('click', () => {
	menu.classList.toggle('active');
});

// Закрытие меню при клике вне его
document.addEventListener('click', (event) => {
	const target = event.target as Node;
	const isClickInsideMenu = menu.contains(target);
	const isClickInsideToggle = menuToggle.contains(target);

	if (!isClickInsideMenu && !isClickInsideToggle) {
		menu.classList.remove('active'); // Закрываем меню
	}
});

// Закрытие меню при прокрутке страницы
window.addEventListener('scroll', () => {
	menu.classList.remove('active'); // Закрываем меню
});

// Обработчик события для закрытия меню при клике на элементы
const menuItems = menu.querySelectorAll('.menu-item');

menuItems.forEach((item) => {
	item.addEventListener('click', () => {
		menu.classList.remove('active'); // Закрываем меню
	});
});

//Получаем массив товаров с сервера
Promise.all([
	api.getWarriorsList(),
	api.getWeaponsList(),
	api.getWeaponsWheelsList(),
	api.getFightingMachineList(),
])
	.then(
		([warriorsList, weaponsList, getFightMachineList, getlocalMortarList]) => {
			// Объединяем оба списка в один массив и передаем в setCatalog
			const combinedList: ICardItem[] = [
				...warriorsList,
				...weaponsList,
				...getFightMachineList,
				...getlocalMortarList,
			];
			appData.setCatalog(combinedList);

			const pointWeapon = document.querySelector('.point_weapon');
			const pointFightMachine = document.querySelector('.point_fightMachine');
			const pointSpecial = document.querySelector('.point_special');
			const pointNecromancer = document.querySelector('.point_Necromancer');
			const pointSorcerer = document.querySelector('.point_Sorcerer');
			const pointGVS = document.querySelector('.point_GVS');
			const pointOutsiders = document.querySelector('.point_Outsiders');

			const divs = document.querySelectorAll('.card__title');

			if (pointWeapon) {
				pointWeapon.addEventListener('click', (event) => {
					event.preventDefault();

					const tehlist = Array.from(divs).filter((h2) =>
						h2.textContent.includes('Паук')
					);

					if (tehlist.length > 0) {
						tehlist[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
					}
				});
			}
			if (pointFightMachine) {
				pointFightMachine.addEventListener('click', (event) => {
					event.preventDefault();

					const tehlist = Array.from(divs).filter((h2) =>
						h2.textContent.includes('UNL-3')
					);

					if (tehlist.length > 0) {
						tehlist[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
					}
				});
			}

			if (pointSpecial) {
				pointSpecial.addEventListener('click', (event) => {
					event.preventDefault();

					const tehlist = Array.from(divs).filter((h2) =>
						h2.textContent.includes('Тёмный Шаман')
					);

					if (tehlist.length > 0) {
						tehlist[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
					}
				});
			}
			if (pointWeapon) {
				pointWeapon.addEventListener('click', (event) => {
					event.preventDefault();

					const tehlist = Array.from(divs).filter((h2) =>
						h2.textContent.includes('Паук')
					);

					if (tehlist.length > 0) {
						tehlist[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
					}
				});
			}
			if (pointNecromancer) {
				pointNecromancer.addEventListener('click', (event) => {
					event.preventDefault();

					const tehlist = Array.from(divs).filter((h2) =>
						h2.textContent.includes('Кентавр')
					);

					if (tehlist.length > 0) {
						tehlist[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
					}
				});
			}
			if (pointSorcerer) {
				pointSorcerer.addEventListener('click', (event) => {
					event.preventDefault();

					const tehlist = Array.from(divs).filter((h2) =>
						h2.textContent.includes('Амазонки')
					);

					if (tehlist.length > 0) {
						tehlist[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
					}
				});
			}
			if (pointGVS) {
				pointGVS.addEventListener('click', (event) => {
					event.preventDefault();

					const tehlist = Array.from(divs).filter((h2) =>
						h2.textContent.includes('Беркут')
					);

					if (tehlist.length > 0) {
						tehlist[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
					}
				});
			}
			if (pointOutsiders) {
				pointOutsiders.addEventListener('click', (event) => {
					event.preventDefault();

					const tehlist = Array.from(divs).filter((h2) =>
						h2.textContent.includes('Драконоборцы')
					);

					if (tehlist.length > 0) {
						tehlist[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
					}
				});
			}
			loadBasketFromLocalStorage();
		}
	)
	.catch((error) => {
		console.error('Ошибка при загрузке данных:', error);
	});
