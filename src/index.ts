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
import { Settings } from './components/view/Settings';
import { Tournament } from './components/view/Tournament';

//Управление событиями и API
const events = new EventEmitter();
const api = new WebLarekAPI(CDN_URL, API_URL);

//Переменные
const modal = new Modal(ensureElement<HTMLElement>('#modal-container'), events);
const page = new Page(document.body, events);
//const favoritesPage = new FavoritesPage(document.body, events);
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
const settingsTemplate = ensureElement<HTMLTemplateElement>('#settings');

const tournamentTemplate = ensureElement<HTMLTemplateElement>('#tournament');

const memoTemplate = ensureElement<HTMLElement>('.memo');

// Инициализация состояния приложения
const appData = new AppData({}, events);

const basket = new Basket(cloneTemplate(basketTemplate), events);

const rating = new Rating(cloneTemplate(ratingTemplate), events);

const settings = new Settings(cloneTemplate(settingsTemplate), events);

const tournament = new Tournament(cloneTemplate(tournamentTemplate), events);

const categoryOrder = [
	'Войска Колдуна',
	'Легионеры Некроманта',
	'Гвардия Чародея',
	'Гильдия вольных стрелков',
	'Ст. производители (НО)',
	'Ст. производители (Б)',
	'Ст. производители (ВИМ)',
	'Ст. производители (ХБ)',
	'Ст. производители (АС)',
	'Ст. производители (ВПМ)',
	'Ст. производители (ЛЧП)',
	'Войска Колдуна (ОБЕ)',
	'Легионеры Некроманта (ОБЕ)',
	'Гвардия Чародея (ОБЕ)',
	'Гильдия вольных стрелков (ОБЕ)',
	'Боевое существо (ОБЕ)',
	'Ст. производители (ВПМ) (ОБЕ)',
	'Ст. производители (Б) (ОБЕ)',
	'Техлист (1А)',
	'Техлист (1П)',
	'Техлист (1МП)',
	'Техлист (1К)',
	'Техлист (2П)',
	'Техлист (2А)',
	'Техлист (2МП)',
	'Техлист (2К)',
];

// Обработчик изменения каталога

events.on<CatalogChangeEvent>('items:changed', () => {
	page.favorites = appData.favorites.length;
	page.showFavoritesFooter();
	setTimeout(() => {
		page.favoritesTimeout();
	}, 3000);

	const sortedItems = appData.items.slice().sort((a, b) => {
		const indexA = categoryOrder.indexOf(a.category);
		const indexB = categoryOrder.indexOf(b.category);

		const posA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
		const posB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;

		if (posA !== posB) {
			return posA - posB;
		}
		if (a.title && b.title) {
			return a.title.localeCompare(b.title, 'ru', { sensitivity: 'base' });
		}
	});

	page.catalog = sortedItems.map((item) => {
		const card = new Card('card', cloneTemplate(cardCatalogTemplate), {
			onClick: () => events.emit('card:select', item),
		});
		const checkedAttr: boolean = appData.productLike(item);
		card.buttonLike = checkedAttr;

		card.marker = item.marker;
		card.markerTitle = item.markerTitle;

		const categoryText = card._category.textContent || '';
		if (
			categoryText.includes('Гильдия вольных стрелков') ||
			categoryText.includes('Гвардия Чародея') ||
			categoryText.includes('Легионеры Некроманта') ||
			categoryText.includes('Войска Колдуна')
		) {
			card._category.style.padding = '0.5rem 1rem 0.5rem 1.9rem';
		}

		if (
			!categoryText.includes('Гильдия вольных стрелков') ||
			!categoryText.includes('Гвардия Чародея') ||
			!categoryText.includes('Легионеры Некроманта') ||
			!categoryText.includes('Войска Колдуна')
		) {
			card._category.style.padding = '0.5rem 1rem 0.5rem 1.9rem';
		}

		return card.render(item);
	});

	const savedNetState = localStorage.getItem('netState');
	if (savedNetState === 'save' || savedNetState === 'cancel') {
		applyNetState(savedNetState);
	}

	events.on('net:save', () => {
		applyNetState('save');
		localStorage.setItem('netState', 'save');
	});

	events.on('net:cancel', () => {
		applyNetState('cancel');
		localStorage.setItem('netState', 'cancel');
	});

	events.on('lightTheme:save', () => {
		applyNetState('cancel');
		localStorage.setItem('netState', 'cancel');
	});
});

function setupNavigationHandlers() {
	const addScrollHandler = (
		element: HTMLElement | null,
		filterFn: (h2: HTMLElement) => boolean
	) => {
		if (!element) return;
		element.addEventListener('click', (event) => {
			event.preventDefault();
			const allH2 = Array.from(document.querySelectorAll('.card__category'));
			const target = allH2.find(filterFn);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		});
	};

	addScrollHandler(
		page._pointWeapon,
		(h2) =>
			h2.textContent?.includes('Техлист') ||
			h2.textContent?.includes('(1А)') ||
			h2.textContent?.includes('(1П)') ||
			h2.textContent?.includes('(1МП)') ||
			h2.textContent?.includes('(1К)') ||
			h2.textContent?.includes('(2П)') ||
			h2.textContent?.includes('(2МП)') ||
			h2.textContent?.includes('(2К)') ||
			h2.textContent?.includes('(2А)')
	);
	addScrollHandler(page._pointFightMachine, (h2) =>
		h2.textContent?.includes('Боевая машина')
	);
	addScrollHandler(page._pointSpecial, (h2) => h2.textContent?.includes('ОБЕ'));
	addScrollHandler(page._pointNecromancer, (h2) =>
		h2.textContent?.includes('Легионеры Некроманта')
	);
	addScrollHandler(page._pointSorcerer, (h2) =>
		h2.textContent?.includes('Гвардия Чародея')
	);
	addScrollHandler(page._pointGVS, (h2) =>
		h2.textContent?.includes('Гильдия вольных стрелков')
	);
	addScrollHandler(page._pointOutsiders, (h2) =>
		h2.textContent?.includes('Ст. производители')
	);
}

const galeries = document.querySelectorAll('.gallery');

function applyNetState(state: 'save' | 'cancel') {
	const galleriesItem = document.querySelectorAll('.gallery__item');
	const cartCategory = document.querySelectorAll('.card__category');
	const cartCategoryArray = Array.from(cartCategory);
	if (state === 'save') {
		galeries.forEach((gallery) => {
			gallery.classList.add('gallery__net');
			gallery.classList.remove('gallery');
		});

		galleriesItem.forEach((gallery) => {
			gallery.classList.add('galleryItem__net');
			gallery.classList.remove('card');
		});
		cartCategoryArray.forEach((el: HTMLElement) => {
			if (el.textContent.includes('Техлист')) {
				el.style.fontSize = '13px';
				const res = el.textContent.slice(7);
				el.textContent = res;
			}
			if (!el.textContent.includes('Техлист')) {
				el.style.padding = '1rem 1rem';
			}
		});
	} else {
		galeries.forEach((gallery) => {
			gallery.classList.add('gallery');
			gallery.classList.remove('gallery__net');
		});

		galleriesItem.forEach((gallery) => {
			gallery.classList.add('card');
			gallery.classList.remove('galleryItem__net');
		});
		cartCategoryArray.forEach((el: HTMLElement) => {
			if (
				!el.textContent.includes('Гильдия вольных стрелков') ||
				!el.textContent.includes('Гвардия Чародея') ||
				!el.textContent.includes('Легионеры Некроманта') ||
				!el.textContent.includes('Войска Колдуна')
			) {
				el.style.padding = '0.5rem 1rem';
			}
			if (
				el.textContent.includes('Гильдия вольных стрелков') ||
				el.textContent.includes('Гвардия Чародея') ||
				el.textContent.includes('Легионеры Некроманта') ||
				el.textContent.includes('Войска Колдуна')
			) {
				el.style.padding = '0.5rem 1rem 0.5rem 1.9rem';
			}
			const res = el.textContent;
			el.textContent = res;
		});
	}
}

//Выбор товара
events.on('card:select', (item: ICardItem) => {
	appData.setPreview(item);
});

//Добавление Боевой единицы в корзину
events.on('product:add', (item: ICardItem) => {
	appData.addBasket(item);
	modal.close();
});

//Добавление Боевой единицы в Избранное
events.on('product:addLike', (item: ICardItem) => {
	appData.addFavorites(item);
	modal.close();
});

events.on('product:deleteLike', (item: ICardItem) => {
	appData.removeFromLike(item.id);
	modal.close();
});

//Удаление продукта из корзины
events.on('product:delete', (item: ICardItem) => {
	appData.removeFromBasket(item.id);
});

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

const order: Record<string, number> = {
	list: 1,
	tech: 2,
	wheels: 3,
	machine: 4,
};

//Обработчик изменения в корзине и обновления общей стоимости
events.on('basket:changed', () => {
	page.counter = appData.getOrderProducts().length;
	let total = 0;

	const sortedItems = appData
		.getOrderProducts()
		.sort((a: ICardItem, b: ICardItem) => {
			const orderA = order[a.type] || 5;
			const orderB = order[b.type] || 5;

			const aIsTehlist = a.category.includes('Техлист');
			const bIsTehlist = b.category.includes('Техлист');

			if (aIsTehlist && bIsTehlist) {
				return 0;
			}

			if (aIsTehlist) {
				return 1;
			}

			if (bIsTehlist) {
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

//Открытие настроек
events.on('settings:open', () => {
	modal.render({
		content: settings.render({}),
	});
});

// Открытие турнира
events.on('tournament:open', () => {
	page.locked = true;
	modal.render({
		content: tournament.render({}),
	});
});

//Открытие справочника
events.on('memo:open', () => {
	page.locked = true;
	memoTemplate.classList.add('active');
	modal.render({
		content: memoTemplate,
	});
});

window.addEventListener('hashchange', () => {
	if (window.location.hash === '#rating') {
		events.emit('rating:open');
	}
	if (window.location.hash === '#memo') {
		events.emit('memo:open');
	}
	if (window.location.hash === '#tournament') {
		events.emit('tournament:open');
	}
	if (window.location.hash === '#settings') {
		events.emit('settings:open');
	}
});

document.addEventListener('DOMContentLoaded', () => {
	if (window.location.hash === '#rating') {
		events.emit('rating:open');
	}
	if (window.location.hash === '#memo') {
		events.emit('memo:open');
	}
	if (window.location.hash === '#tournament') {
		events.emit('tournament:open');
	}
	if (window.location.hash === '#settings') {
		events.emit('settings:open');
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
			item.marker = res.marker;
			item.markerTitle = res.markerTitle;
			item.inBasket = res.inBasket;

			const card = new Card('card', cloneTemplate(cardPreviewTemplate), {
				onClick: () => {
					if (appData.productOrder(item)) {
						appData.removeFromBasket(item.id);
						modal.close();
					} else {
						events.emit('product:add', item);
					}
				},
				onChangeLike: () => {
					if (appData.productLike(item)) {
						appData.removeFromLike(item.id);

						modal.close();
					} else {
						events.emit('product:addLike', item);
					}
				},
			});

			card.BasedOnLike();

			const checkedAttr: boolean = appData.productLike(item);
			card.buttonLike = checkedAttr;

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
			card.categoryPadding();
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
				onChangeLike: () => {
					if (appData.productLike(item)) {
						appData.removeFromLike(item.id);

						modal.close();
					} else {
						events.emit('product:addLike', item);
					}
				},
			});
			card.BasedOnLike();

			const checkedAttr: boolean = appData.productLike(item) ? true : false;
			card.buttonLike = checkedAttr;
			modal.render({
				content: card.render({
					...item,
				}),
			});
			card.categoryPadding();
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
				onChangeLike: () => {
					if (appData.productLike(item)) {
						appData.removeFromLike(item.id);

						modal.close();
					} else {
						events.emit('product:addLike', item);
					}
				},
			});

			card.BasedOnWheels();

			card.BasedOnLike();

			const checkedAttr: boolean = appData.productLike(item) ? true : false;
			card.buttonLike = checkedAttr;
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
				onChangeLike: () => {
					if (appData.productLike(item)) {
						appData.removeFromLike(item.id);

						modal.close();
					} else {
						events.emit('product:addLike', item);
					}
				},
			});

			card.BasedOnLike();

			const checkedAttr: boolean = appData.productLike(item) ? true : false;
			card.buttonLike = checkedAttr;

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
	const jsonStr = JSON.stringify(
		appData.getOrderProducts().map((item) => item.id)
	);

	location.hash = encodeURIComponent(jsonStr);
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

			setupNavigationHandlers();

			appData.loadFavoritesFromLocalStorage();

			events.on('favorites_on', () => {
				appData.setCatalog(appData.favorites);
			});

			events.on('favorites_off', () => {
				appData.setCatalog(combinedList);
			});

			const favoritesEnabled = localStorage.getItem('favoritesSaveEnabled');
			if (favoritesEnabled === 'true') {
				events.emit('favorites_on');
			} else {
				events.emit('favorites_off');
			}

			const savedNetState = localStorage.getItem('netState');
			if (savedNetState === 'save' || savedNetState === 'cancel') {
				applyNetState(savedNetState);
			}

			events.on('net:save', () => {
				applyNetState('save');
				localStorage.setItem('netState', 'save');
			});

			events.on('net:cancel', () => {
				applyNetState('cancel');
				localStorage.setItem('netState', 'cancel');
			});

			loadBasketFromLocalStorage();
		}
	)

	.catch((error) => {
		console.error('Ошибка при загрузке данных:', error);
	});
