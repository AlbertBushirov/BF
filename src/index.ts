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
const searchTemplate = ensureElement<HTMLElement>('.search');

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
	'Нейтральный отряд (КБФ)',
	'Воители иных миров (КБФ)',
	'База (КБФ)',
	'Х-Бункер (КБФ)',
	'Альянс Свободных (КБФ)',
	'Войско павшего мага (КБФ)',
	'Легионы черной планеты (КБФ)',
	'База (АОБФ)',
	'Нейтралы (АОБФ)',
	'Альянс Свободных (АОБФ)',
	'Войско павшего мага (АОБФ)',
	'Войска Колдуна ОБЕ',
	'Легионеры Некроманта ОБЕ',
	'Гвардия Чародея ОБЕ',
	'Гильдия вольных стрелков ОБЕ',
	'Боевое существо ОБЕ',
	'Войско павшего мага ОБЕ (КБФ)',
	'База ОБЕ (КБФ)',
	'Легионы черной планеты ОБЕ (КБФ)',

	'Техлист (1А)',
	'Техлист (1П)',
	'Техлист (1МП)',
	'Техлист (1К)',
	'Техлист (2П)',
	'Техлист (2А)',
	'Техлист (2МП)',
	'Техлист (2К)',
	'Боевая машина',
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

		if (indexA !== indexB) {
			return indexA - indexB;
		}
		if (a.title && b.title) {
			return a.title.localeCompare(b.title, 'ru', { sensitivity: 'base' });
		}
	});

	page.catalog = sortedItems.map((item) => {
		const card = new Card('card', cloneTemplate(cardCatalogTemplate), {
			onClick: () => events.emit('card:select', item),
		});
		//const checkedAttr: boolean = appData.productLike(item);
		//card.buttonLike = checkedAttr;

		card.marker = item.marker;
		card.markerTitle = item.markerTitle;

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
	setBackground(appData.items);
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
	addScrollHandler(page._pointKBF, (h2) => h2.textContent?.includes('(КБФ)'));
	addScrollHandler(page._pointAOBF, (h2) => h2.textContent?.includes('(АОБФ)'));
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
			if (el.textContent.includes('Техлист')) {
				el.style.padding = '0.4rem 1rem';
			} else {
				el.style.padding = '0.4rem 0.3rem 0.4rem 1.6rem';
			}

			const res = el.textContent;
			el.textContent = res;
		});
	}
}

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

			if (a.price > b.price && orderA === 1 && orderB === 1) {
				return -1;
			}

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
				events.emit('product:delete', item);
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

//Открытие справочника
events.on('search:open', () => {
	searchTemplate.classList.add('active');
	modal.render({
		content: searchTemplate,
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

//Удаление продукта из корзины
events.on('product:delete', (item: ICardItem) => {
	appData.removeFromBasket(item.id);

	const jsonStr = JSON.stringify(appData.basket.map((item) => item.id));
	location.hash = '#basket/' + encodeURIComponent(jsonStr);
});

//Открытие корзины товаров
events.on('basket:open', () => {
	page.locked = true;
	modal.render({
		content: basket.render({}),
	});

	const jsonStr = JSON.stringify(appData.basket.map((item) => item.id));
	location.hash = '#basket/' + encodeURIComponent(jsonStr);
});

//Выбор товара
events.on('card:select', (item: ICardItem) => {
	if (item && item.id) {
		appData.setPreview(item);
		location.hash = '#preview/' + encodeURIComponent(item.id);
	}
});

function findItemById(id: string): ICardItem | undefined {
	return appData.items.find((item) => item.id === id);
}

function handleBasketHash(hash: string) {
	try {
		const jsonPart = decodeURIComponent(hash.substring(8));
		const itemIds = JSON.parse(jsonPart);
		appData.addBasketString(itemIds);
		console.log(appData.basket);
		//appData.restoreBasket(itemIds);
		events.emit('basket:open');
		// Восстанавливаем корзину с сохраненными ID
	} catch (error) {
		console.error('Error parsing basket hash:', error);
		appData.restoreBasket([]);
		events.emit('basket:open');
	}
}

function handleHash() {
	const hash = window.location.hash;

	if (hash === '#rating') {
		events.emit('rating:open');
		return;
	}
	if (hash === '#memo') {
		events.emit('memo:open');
		return;
	}
	if (hash === '#tournament') {
		events.emit('tournament:open');
		return;
	}
	if (hash === '#settings') {
		events.emit('settings:open');
		return;
	}
	if (hash.startsWith('#basket/')) {
		handleBasketHash(hash);
		return;
	}
	if (hash.startsWith('#preview/')) {
		const idFromHash = decodeURIComponent(hash.split('/')[1]);
		const item = findItemById(idFromHash);
		if (item) {
			events.emit('card:select', item);
		}
		return;
	}
}

window.addEventListener('hashchange', handleHash);
document.addEventListener('DOMContentLoaded', handleHash);

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

function generateNewId(originalId: string, price?: number): string {
	return originalId + '+' + price + '-' + Math.round(Math.random() * 1000);
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

			item.marker = res.marker;
			item.markerTitle = res.markerTitle;
			item.inBasket = res.inBasket;

			const card = new Card('card', cloneTemplate(cardTehlistTemplate), {
				onClick: () => {
					const newCartId = generateNewId(item.id);
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

			const checkedAttr: boolean = appData.productLike(item);
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

			item.marker = res.marker;
			item.markerTitle = res.markerTitle;
			item.inBasket = res.inBasket;

			// Создание карточки товара
			const card = new Card('card', cloneTemplate(cardTehlistWheelsTemplate), {
				onClick: (formData: { isWheels?: boolean; price: number }) => {
					const selectedPrice = formData.price ?? item.price;

					// Передаем выбранную цену в функцию generateNewId
					const newCartId = generateNewId(item.id, selectedPrice);

					const updatedItem = {
						...item,
						isWheels: formData.isWheels,
						price: selectedPrice, // Используем актуальную цену
						id: newCartId,
					};

					events.emit('product:add', updatedItem);
					updateHashWithProduct(newCartId);
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

			const checkedAttr: boolean = appData.productLike(item);
			card.buttonLike = checkedAttr;
			modal.render({
				content: card.render({
					...item,
				}),
			});
		});
	}
});

function updateHashWithProduct(productId: string) {
	const currentHash = location.hash.substring(1);
	const ids = currentHash ? currentHash.split('+') : [];

	// Проверяем, не добавлен ли уже товар с таким originalId
	const newProductOriginalId = productId.split('+')[0];
	const existingIndex = ids.findIndex(
		(id) => id.split('+')[0] === newProductOriginalId
	);

	if (existingIndex !== -1) {
		// Заменяем существующий ID
		ids[existingIndex] = productId;
	} else {
		// Добавляем новый ID
		ids.push(productId);
	}

	location.hash = ids.join('+');
}

events.on('preview:changed', (item: ICardItem) => {
	if (item && item.type === 'machine') {
		api.getFightingMachineItem(item.id).then((res) => {
			item.id = res.id;
			item.category = res.category;
			item.title = res.title;
			item.image = res.image;
			item.price = res.price;
			item.weapons = res.weapons;

			item.marker = res.marker;
			item.markerTitle = res.markerTitle;
			item.inBasket = res.inBasket;

			// Создание карточки товара
			const card = new Card('card', cloneTemplate(cardFightMachineTemplate), {
				onClick: (formData: { weapons?: IItemWeapons }) => {
					const newCartId = generateNewId(item.id);
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
			card.categoryPadding();
		});
	}
});

events.on('basket:clear', () => {
	appData.clearBasket();
	modal.close();
});

events.on('modal:close', () => {
	page.locked = false;
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

function NotKBF(mass: ICardItem[]) {
	return mass.filter((el: ICardItem) => !el.category.includes('(КБФ)'));
}

function NotAOBF(mass: ICardItem[]) {
	return mass.filter((el: ICardItem) => !el.category.includes('(АОБФ)'));
}

function setBackground(items: ICardItem[]) {
	const galleryItems = document.querySelectorAll('.gallery__item');

	galleryItems.forEach((galleryItem) => {
		// Сбрасываем фон для всех элементов
		(galleryItem as HTMLElement).style.background = '';

		// Находим заголовок товара в DOM
		const titleElement = galleryItem.querySelector('.card__title');
		if (!titleElement) return;

		const title = titleElement.textContent?.trim() || '';

		// Ищем соответствующий товар в данных
		const itemData = items.find((item) => item.title.trim() === title);

		// Если нашли товар и он имеет категорию (КБФ) - применяем стиль
		if (itemData && itemData.category && itemData.category.includes('(КБФ)')) {
			(galleryItem as HTMLElement).classList.add('backKBF');
		} else if (
			itemData &&
			itemData.category &&
			itemData.category.includes('(АОБФ)')
		) {
			(galleryItem as HTMLElement).classList.add('backAOBF');
		} else {
			(galleryItem as HTMLElement).classList.add('backOriginal');
		}
	});
}

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
			const KBF = document.querySelector('.point_KBF') as HTMLElement;
			const AOBF = document.querySelector('.point_AOBF') as HTMLElement;

			let isKBFEnabled = false;
			let isAOBFEnabled = false;

			function applyFilters() {
				let filteredList = [...combinedList];

				if (isKBFEnabled) {
					filteredList = NotKBF(filteredList);
				}

				if (isAOBFEnabled) {
					filteredList = NotAOBF(filteredList);
				}

				appData.setCatalog(filteredList);
			}

			events.on('KBF_on', () => {
				isKBFEnabled = true;
				KBF.style.display = 'none';
				applyFilters();
			});

			events.on('KBF_off', () => {
				isKBFEnabled = false;
				KBF.style.display = 'block';
				applyFilters();
			});
			events.on('AOBF_on', () => {
				isAOBFEnabled = true;
				AOBF.style.display = 'none';
				applyFilters();
			});

			events.on('AOBF_off', () => {
				isAOBFEnabled = false;
				AOBF.style.display = 'block';
				applyFilters();
			});
			appData.setCatalog(combinedList);

			setupNavigationHandlers();

			events.on('favorites_on', () => {
				appData.setCatalog(appData.favorites);
			});

			events.on('favorites_off', () => {
				appData.setCatalog(combinedList);
			});
			appData.loadFavoritesFromLocalStorage();

			document.addEventListener('DOMContentLoaded', () => {
				const searchInput = document.querySelector('.search__input');
				const items = Array.from(
					document.querySelectorAll('.card__title')
				) as HTMLElement[];

				// Сохраняем оригинальный текст для каждого элемента
				items.forEach((item) => {
					if (!item.dataset.originalText) {
						item.dataset.originalText = item.textContent || '';
					}
				});

				searchInput.addEventListener('input', (e) => {
					const target = e.target as HTMLInputElement;
					const query = target.value.toLowerCase().trim();

					items.forEach((item) => {
						const originalText = item.dataset.originalText || '';
						const text = originalText.toLowerCase();
						const matches = text.includes(query);

						// Фильтрация: скрываем/показываем
						item.classList.toggle('hidden', !matches);

						if (matches && query) {
							// Подсветка совпадений
							const regex = new RegExp(
								`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`,
								'gi'
							);
							const highlighted = originalText.replace(
								regex,
								'<mark>$1</mark>'
							);
							item.innerHTML = highlighted;
						} else {
							// Возвращаем оригинальный текст без подсветки
							item.innerHTML = originalText;
						}
					});

					// Прокрутка до первого видимого элемента
					const firstVisible = document.querySelector(
						'.card__title:not(.hidden)'
					);
					if (firstVisible && query) {
						firstVisible.scrollIntoView({
							behavior: 'smooth',
							block: 'center',
						});
					}
				});
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

			const KBFEnabled = localStorage.getItem('KBFSaveEnabled');
			if (KBFEnabled === 'true') {
				events.emit('KBF_on');
			} else {
				events.emit('KBF_off');
			}

			const AOBFEnabled = localStorage.getItem('AOBFSaveEnabled');
			if (AOBFEnabled === 'true') {
				events.emit('AOBF_on');
			} else {
				events.emit('AOBF_off');
			}

			loadBasketFromLocalStorage();
		}
	)

	.catch((error) => {
		console.error('Ошибка при загрузке данных:', error);
	});
