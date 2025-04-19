import { projectile, rocketProjectile } from './weapons';

export const localWeapons = [
	{
		id: 'ObeDragon',
		title: 'Дракон',
		category: 'Боевое существо',
		image: require('../images/TehList/ObeDragon.jpg'),
		price: 250,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'ObeDarkShaman',
		title: 'Тёмный Шаман',
		category: 'Легионеры Некроманта',
		image: require('../images/TehList/ObeDarkShaman.jpg'),
		price: 110,
		inBasket: true,
		button: '',
		directory:
			'Ядовитое облако. Вероятность выпадения 6, при использовании в 5 воинов: 59.8%; в 4 воина: 51.8%; в 3 воина: 42.1%. Нейтрализация. Вероятность успешного использования: 33.33%',
	},
	{
		id: 'ObeKlerik',
		title: 'Клерик',
		category: 'Войска Колдуна',
		image: require('../images/TehList/ObeKlerik.jpg'), // Прямой URL для удаленного изображения
		price: 110,
		inBasket: true,
		button: '',
		directory:
			'Огненный дождь. Вероятность успеха при использовании в 5 воинов: 91.2%; в 4 воина: 80.25%; в 3 воина:  70.37%; в 2 воина: 55.56%.',
	},
	{
		id: 'ObeMasterVolshebnik',
		title: 'Мастер Волшебник',
		category: 'Гвардия Чародея',
		image: require('../images/TehList/ObeMasterVolshebnik.jpg'), // Прямой URL для удаленного изображения
		price: 110,
		inBasket: true,
		button: '',
		directory:
			'Молния. Вероятность успешного использования: 33,33%. Воскрешение. Вероятность успешного использования в раненного воина: 67%; в мертвого воина: 33,33%',
	},
	{
		id: 'ObeBrodyachiMag',
		title: 'Бродячий Маг',
		category: 'Гильдия вольных стрелков',
		image: require('../images/TehList/ObeBrodyachiMag.jpg'), // Прямой URL для удаленного изображения
		price: 120,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'ObePolbustuk',
		title: 'Полб`Уст`Ук',
		category: 'Сторонние производители',
		image: require('../images/TehList/ObePolbustuk.jpg'), // Прямой URL для удаленного изображения
		price: 100,
		inBasket: true,
		button: '',
		directory:
			'Луковое амбре. Вероятность успешного использования в 1 воина: 67%',
	},
	{
		id: 'ObeOriana',
		title: 'Ориана',
		category: 'Сторонние производители',
		image: require('../images/TehList/ObeOriana.jpg'), // Прямой URL для удаленного изображения
		price: 120,
		inBasket: true,
		button: '',
		directory: 'Кибер-сердце. Вероятность успешного использования: 33,33%',
	},

	{
		id: 'arbaletpauk',
		title: 'Паук',
		category: 'Техлист',
		image: require('../images/TehList/Pauk.png'), // Прямой URL для удаленного изображения
		price: 80,
		inBasket: true,
		button: '',
		directory: '',
	},

	{
		id: 'arbalettitan',
		title: 'Титан',
		category: 'Техлист',
		image: require('../images/TehList/Titan.png'), // Прямой URL для удаленного изображения
		price: 120,
		inBasket: true,
		button: '',
		directory: '',
	},

	{
		id: 'catapultdikobraz',
		title: 'Дикобраз',
		category: 'Техлист',
		image: require('../images/TehList/Dikoobraz.png'), // Прямой URL для удаленного изображения
		price: 80,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'catapultklop',
		title: 'Клоп',
		category: 'Техлист',
		image: require('../images/TehList/Klop.png'), // Прямой URL для удаленного изображения
		price: 100,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'catapultciklop',
		title: 'Циклоп',
		category: 'Техлист',
		image: require('../images/TehList/Ciklop.jpg'), // Прямой URL для удаленного изображения
		price: 90,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkabuldog',
		title: 'Бульдог',
		category: 'Техлист',
		image: require('../images/TehList/Buldog.png'), // Прямой URL для удаленного изображения
		price: 90,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkaedinorog',
		title: 'Единорог',
		category: 'Техлист',
		image: require('../images/TehList/Edinorog.png'), // Прямой URL для удаленного изображения
		price: 130,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'MDB-15',
		title: 'MDB-15',
		category: 'Техлист',
		image: require('../images/TehList/MDB-15.jpg'), // Прямой URL для удаленного изображения
		price: 180,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkagrad',
		title: 'Град',
		category: 'Техлист',
		image: require('../images/TehList/Grad.png'), // Прямой URL для удаленного изображения
		price: 80,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkasparka',
		title: 'Спарка',
		category: 'Техлист',
		image: require('../images/TehList/Sparka.png'), // Прямой URL для удаленного изображения
		price: 50,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkastilet',
		title: 'Стилет',
		category: 'Техлист',
		image: require('../images/TehList/Stilet.jpg'), // Прямой URL для удаленного изображения
		price: 60,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkaexecutor',
		title: 'Экзекутор',
		category: 'Техлист',
		image: require('../images/TehList/Akzikutor.jpg'), // Прямой URL для удаленного изображения
		price: 60,
		inBasket: true,
		button: '',
		directory: '',
	},
];
//Орудия с шинами
export const localWeaponsWheels = [
	{
		id: 'arbaletgoliaf',
		title: 'Голиаф',
		category: 'Техлист',
		image: require('../images/TehList/Goliaf.png'), // Прямой URL для удаленного изображения
		price: 80,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'arbaletskorpion',
		title: 'Скорпион',
		category: 'Техлист',
		image: require('../images/TehList/Skorpion.png'), // Прямой URL для удаленного изображения
		price: 130,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'arbaletharibda',
		title: 'Харибда',
		category: 'Техлист',
		image: require('../images/TehList/Haribda.png'), // Прямой URL для удаленного изображения
		price: 70,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'catapultbogomol',
		title: 'Богомол',
		category: 'Техлист',
		image: require('../images/TehList/Bogomol.png'), // Прямой URL для удаленного изображения
		price: 70,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'catapultsarancha',
		title: 'Саранча',
		category: 'Техлист',
		image: require('../images/TehList/Sarancha.png'), // Прямой URL для удаленного изображения
		price: 110,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkablast',
		title: 'Бласт',
		category: 'Техлист',
		image: require('../images/TehList/Blast.png'), // Прямой URL для удаленного изображения
		price: 130,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkabuivol',
		title: 'Буйвол',
		category: 'Техлист',
		image: require('../images/TehList/Buivol.png'), // Прямой URL для удаленного изображения
		price: 80,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkagrom',
		title: 'Гром',
		category: 'Техлист',
		image: require('../images/TehList/Grom.png'), // Прямой URL для удаленного изображения
		price: 120,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkatelec',
		title: 'Телец',
		category: 'Техлист',
		image: require('../images/TehList/Telec.png'), // Прямой URL для удаленного изображения
		price: 70,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkaShkval',
		title: 'Шквал',
		category: 'Техлист',
		image: require('../images/TehList/Shkval.png'), // Прямой URL для удаленного изображения
		price: 110,
		inBasket: true,
		button: '',
		directory: '',
	},
	{
		id: 'pushkashtorm',
		title: 'Шторм',
		category: 'Техлист',
		image: require('../images/TehList/Shtorm.png'), // Прямой URL для удаленного изображения
		price: 70,
		inBasket: true,
		button: '',
		directory: '',
	},
];

//Минометы
