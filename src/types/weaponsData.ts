import { projectile, rocketProjectile } from './weapons';

export const localWeapons = [
	{
		id: 'ObeDragon',
		title: 'Дракон',
		category: 'Боевое существо ОБЕ',
		image: require('../images/TehList/ObeDragon.jpg'),
		price: 200,
		inBasket: true,
		button: '',
		directory:
			'Огневая Атака. Вероятность, что воин хотя бы ранен, при использовании в 3 воинов: 87.5%; в 2 воина: 75%',
		marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 50.',
	},
	{
		id: 'ObeDarkShaman',
		title: 'Тёмный Шаман',
		category: 'Легионеры Некроманта ОБЕ',
		image: require('../images/TehList/ObeDarkShaman.png'),
		price: 110,
		inBasket: true,
		button: '',
		directory:
			'Ядовитое облако. Вероятность выпадения 6, при использовании в 5 воинов: 59.8%; в 4 воина: 51.8%; в 3 воина: 42.1%. Нейтрализация. Вероятность успешного использования: 33.33%',
	},
	{
		id: 'ObeKlerik',
		title: 'Клерик',
		category: 'Войска Колдуна ОБЕ',
		image: require('../images/TehList/ObeKlerik.png'), // Прямой URL для удаленного изображения
		price: 110,
		inBasket: true,
		button: '',
		directory:
			'Огненный дождь. Вероятность успеха при использовании в 5 воинов: 91.2%; в 4 воина: 80.25%; в 3 воина:  70.37%; в 2 воина: 55.56%.',
	},
	{
		id: 'ObeMasterVolshebnik',
		title: 'Мастер Волшебник ',
		category: 'Гвардия Чародея ОБЕ',
		image: require('../images/TehList/ObeMasterVolshebnik.png'), // Прямой URL для удаленного изображения
		price: 110,
		inBasket: true,
		button: '',
		directory:
			'Молния. Вероятность успешного использования: 33,33%. Воскрешение. Вероятность успешного использования в раненного воина: 67%; в мертвого воина: 33,33%',
	},
	{
		id: 'ObeBrodyachiMag',
		title: 'Бродячий Маг',
		category: 'Гильдия вольных стрелков ОБЕ',
		image: require('../images/TehList/ObeBrodyachiMag.jpg'), // Прямой URL для удаленного изображения
		price: 120,
		inBasket: true,
		directory: '',
		button: '',
	},
	{
		id: 'ObePolbustuk',
		title: `Полб'Уст'Ук`,
		category: 'База ОБЕ (КБФ)',
		image: require('../images/TehList/ObePolbustuk.jpg'), // Прямой URL для удаленного изображения
		price: 100,
		inBasket: true,
		button: '',
		directory:
			'Луковое амбре. Вероятность успешного использования в 1 воина: 67%',
	},
	{
		id: 'ObeRiha',
		title: 'Ррыкха',
		category: 'База ОБЕ (КБФ)',
		image: require('../images/TehList/ObeRiha.jpg'), // Прямой URL для удаленного изображения
		price: 90,
		inBasket: true,
		button: '',
		directory: '',
	},

	{
		id: 'ObeOriana',
		title: 'Ориана',
		category: 'Войско павшего мага ОБЕ (КБФ)',
		image: require('../images/TehList/ObeOriana.jpg'), // Прямой URL для удаленного изображения
		price: 120,
		inBasket: true,
		button: '',
		directory: 'Кибер-сердце. Вероятность успешного использования: 33,33%',
	},
	{
		id: 'ObeBesstrashni',
		title: 'Эрведан Бесстрашный',
		category: 'Легионы черной планеты ОБЕ (КБФ)',
		image: require('../images/TehList/ObeBesstrashni.jpg'), // Прямой URL для удаленного изображения
		price: 110,
		inBasket: true,
		button: '',
		directory: 'Вероятность выиграть инициативу с Эрведаном: 72%',
		marker: require('../images/marker_new.png'),
		markerTitle: 'Новый адаптированный ОБЕ',
	},

	{
		id: 'arbaletpauk',
		title: 'Паук',
		category: 'Техлист (1А)',
		image: require('../images/TehList/Pauk.png'), // Прямой URL для удаленного изображения
		price: 70,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 10.',*/
	},

	{
		id: 'pushkabuldog',
		title: 'Бульдог',
		category: 'Техлист (1П)',
		image: require('../images/TehList/Buldog.png'), // Прямой URL для удаленного изображения
		price: 80,
		inBasket: true,
		button: '',
		directory: '',
		/*	marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 10.',*/
	},

	{
		id: 'pushkaedinorog',
		title: 'Единорог',
		category: 'Техлист (1П)',
		image: require('../images/TehList/Edinorog.png'), // Прямой URL для удаленного изображения
		price: 110,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 10.',*/
	},

	{
		id: 'pushkascilla',
		title: 'Сцилла',
		category: 'Техлист (1П)',
		image: require('../images/TehList/Scilla.png'), // Прямой URL для удаленного изображения
		price: 75,
		inBasket: true,
		button: '',
		directory: '',
	},

	{
		id: 'pushkagrad',
		title: 'Град',
		category: 'Техлист (1МП)',
		image: require('../images/TehList/Grad.png'), // Прямой URL для удаленного изображения
		price: 70,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 10.',*/
	},
	{
		id: 'pushkasparka',
		title: 'Спарка',
		category: 'Техлист (1МП)',
		image: require('../images/TehList/Sparka.png'), // Прямой URL для удаленного изображения
		price: 50,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkastilet',
		title: 'Стилет',
		category: 'Техлист (1МП)',
		image: require('../images/TehList/Stilet.png'), // Прямой URL для удаленного изображения
		price: 60,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkaexecutor',
		title: 'Экзекутор',
		category: 'Техлист (1МП)',
		image: require('../images/TehList/Akzikutor.png'), // Прямой URL для удаленного изображения
		price: 60,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'catapultklop',
		title: 'Клоп',
		category: 'Техлист (1К)',
		image: require('../images/TehList/Klop.png'), // Прямой URL для удаленного изображения
		price: 90,
		inBasket: true,
		button: '',
		directory: '',
		marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 5.',
	},

	{
		id: 'arbalettitan',
		title: 'Титан',
		category: 'Техлист (2А)',
		image: require('../images/TehList/Titan.png'), // Прямой URL для удаленного изображения
		price: 115,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 5.',*/
	},

	{
		id: 'catapultdikobraz',
		title: 'Дикобраз',
		category: 'Техлист (2К)',
		image: require('../images/TehList/Dikoobraz.png'), // Прямой URL для удаленного изображения
		price: 100,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Повышена цена на 20.',*/
	},

	{
		id: 'catapultciklop',
		title: 'Циклоп',
		category: 'Техлист (2К)',
		image: require('../images/TehList/Ciklop.png'),
		price: 90,
		inBasket: true,
		button: '',
		directory: '',
	},

	{
		id: 'MDB-15',
		title: 'MDB-15',
		category: 'Техлист (2П)',
		categoryGun: '(2П)',
		image: require('../images/TehList/MDB-15.png'),
		price: 150,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 30.',*/
	},
];
//Орудия с шинами
export const localWeaponsWheels = [
	{
		id: 'pushkaShkval',
		title: 'Шквал',
		category: 'Техлист (1МП)',
		image: require('../images/TehList/Shkval.png'), // Прямой URL для удаленного изображения
		price: 95,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Понижена цена на 5.',*/
	},
	{
		id: 'arbaletskorpion',
		title: 'Скорпион',
		category: 'Техлист (1А)',
		image: require('../images/TehList/Skorpion.png'), // Прямой URL для удаленного изображения
		price: 105,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Понижена цена на 15.',*/
	},
	{
		id: 'pushkagrom',
		title: 'Гром',
		category: 'Техлист (1П)',
		image: require('../images/TehList/Grom.png'), // Прямой URL для удаленного изображения
		price: 105,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Понижена цена на 15.',*/
	},
	{
		id: 'arbaletgoliaf',
		title: 'Голиаф',
		category: 'Техлист (2А)',
		image: require('../images/TehList/Goliaf.png'), // Прямой URL для удаленного изображения
		price: 100,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Повышена цена на 20.',*/
	},

	{
		id: 'arbaletharibda',
		title: 'Харибда',
		category: 'Техлист (2А)',
		image: require('../images/TehList/Haribda.png'), // Прямой URL для удаленного изображения
		price: 85,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Повышена цена на 15.',*/
	},
	{
		id: 'catapultbogomol',
		title: 'Богомол',
		category: 'Техлист (2К)',
		image: require('../images/TehList/Bogomol.png'), // Прямой URL для удаленного изображения
		price: 70,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'catapultsarancha',
		title: 'Саранча',
		category: 'Техлист (1К)',
		image: require('../images/TehList/Sarancha.png'),
		price: 85,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Понижена цена на 5.',*/
	},
	{
		id: 'pushkablast',
		title: 'Бласт',
		category: 'Техлист (1П)',
		image: require('../images/TehList/Blast.png'),
		price: 110,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Понижена цена на 10.',*/
	},
	{
		id: 'pushkabuivol',
		title: 'Буйвол',
		category: 'Техлист (2П)',
		image: require('../images/TehList/Buivol.png'),
		price: 90,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Повышена цена на 10.',*/
	},

	{
		id: 'pushkatelec',
		title: 'Телец',
		category: 'Техлист (2П)',
		image: require('../images/TehList/Telec.png'), // Прямой URL для удаленного изображения
		price: 85,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Повышена цена на 15.',*/
	},

	{
		id: 'pushkashtorm',
		title: 'Шторм',
		category: 'Техлист (2МП)',
		image: require('../images/TehList/Shtorm.png'), // Прямой URL для удаленного изображения
		price: 80,
		inBasket: true,
		button: '',
		directory: '',
		/*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Повышена цена на 15.',*/
	},
];

//Минометы
