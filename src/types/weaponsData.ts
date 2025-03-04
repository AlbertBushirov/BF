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
	},
	{
		id: 'ObeDarkShaman',
		title: 'Тёмный Шаман',
		category: 'Легионеры Некроманта',
		image: require('../images/TehList/ObeDarkShaman.jpg'),
		price: 110,
		inBasket: true,
		button: '',
	},
	{
		id: 'ObeKlerik',
		title: 'Клерик',
		category: 'Войска Колдуна',
		image: require('../images/TehList/ObeKlerik.jpg'), // Прямой URL для удаленного изображения
		price: 110,
		inBasket: true,
		button: '',
	},
	{
		id: 'ObeMasterVolshebnik',
		title: 'Мастер Волшебник',
		category: 'Гвардия Чародея',
		image: require('../images/TehList/ObeMasterVolshebnik.jpg'), // Прямой URL для удаленного изображения
		price: 110,
		inBasket: true,
		button: '',
	},
	{
		id: 'ObeBrodyachiMag',
		title: 'Бродячий Маг',
		category: 'Гильдия вольных стрелков',
		image: require('../images/TehList/ObeBrodyachiMag.jpg'), // Прямой URL для удаленного изображения
		price: 120,
		inBasket: true,
		button: '',
	},
	{
		id: 'ObePolbustuk',
		title: 'ПолбУстУк',
		category: 'Сторонние производители',
		image: require('../images/TehList/ObePolbustuk.jpg'), // Прямой URL для удаленного изображения
		price: 100,
		inBasket: true,
		button: '',
	},
	{
		id: 'ObeOriana',
		title: 'Ориана',
		category: 'Сторонние производители',
		image: require('../images/TehList/ObeOriana.jpg'), // Прямой URL для удаленного изображения
		price: 120,
		inBasket: true,
		button: '',
	},

	{
		id: 'arbaletpauk',
		title: 'Паук',
		category: 'Техлист',
		image: require('../images/TehList/Pauk.png'), // Прямой URL для удаленного изображения
		price: 80,
		inBasket: true,
		button: '',
	},

	{
		id: 'arbalettitan',
		title: 'Титан',
		category: 'Техлист',
		image: require('../images/TehList/Titan.png'), // Прямой URL для удаленного изображения
		price: 120,
		inBasket: true,
		button: '',
	},

	{
		id: 'catapultdikobraz',
		title: 'Дикобраз',
		category: 'Техлист',
		image: require('../images/TehList/Dikoobraz.png'), // Прямой URL для удаленного изображения
		price: 80,
		inBasket: true,
		button: '',
	},
	{
		id: 'catapultklop',
		title: 'Клоп',
		category: 'Техлист',
		image: require('../images/TehList/Klop.png'), // Прямой URL для удаленного изображения
		price: 100,
		inBasket: true,
		button: '',
	},
	{
		id: 'catapultciklop',
		title: 'Циклоп',
		category: 'Техлист',
		image: require('../images/TehList/Ciklop.jpg'), // Прямой URL для удаленного изображения
		price: 90,
		inBasket: true,
		button: '',
	},
	{
		id: 'pushkabuldog',
		title: 'Бульдог',
		category: 'Техлист',
		image: require('../images/TehList/Buldog.png'), // Прямой URL для удаленного изображения
		price: 90,
		inBasket: true,
		button: '',
	},
	{
		id: 'pushkaedinorog',
		title: 'Единорог',
		category: 'Техлист',
		image: require('../images/TehList/Edinorog.png'), // Прямой URL для удаленного изображения
		price: 130,
		inBasket: true,
		button: '',
	},
	{
		id: 'MDB-15',
		title: 'MDB-15',
		category: 'Техлист',
		image: require('../images/TehList/MDB-15.jpg'), // Прямой URL для удаленного изображения
		price: 180,
		inBasket: true,
		button: '',
	},
	{
		id: 'pushkagrad',
		title: 'Град',
		category: 'Техлист',
		image: require('../images/TehList/Grad.png'), // Прямой URL для удаленного изображения
		price: 80,
		inBasket: true,
		button: '',
	},
	{
		id: 'pushkasparka',
		title: 'Спарка',
		category: 'Техлист',
		image: require('../images/TehList/Sparka.png'), // Прямой URL для удаленного изображения
		price: 50,
		inBasket: true,
		button: '',
	},
	{
		id: 'pushkastilet',
		title: 'Стилет',
		category: 'Техлист',
		image: require('../images/TehList/Stilet.jpg'), // Прямой URL для удаленного изображения
		price: 60,
		inBasket: true,
		button: '',
	},
	{
		id: 'pushkaexecutor',
		title: 'Экзекутор',
		category: 'Техлист',
		image: require('../images/TehList/Akzikutor.jpg'), // Прямой URL для удаленного изображения
		price: 60,
		inBasket: true,
		button: '',
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
	},
	{
		id: 'arbaletskorpion',
		title: 'Скорпион',
		category: 'Техлист',
		image: require('../images/TehList/Skorpion.png'), // Прямой URL для удаленного изображения
		price: 130,
		inBasket: true,
		button: '',
	},
	{
		id: 'arbaletharibda',
		title: 'Харибда',
		category: 'Техлист',
		image: require('../images/TehList/Haribda.png'), // Прямой URL для удаленного изображения
		price: 70,
		inBasket: true,
		button: '',
	},
	{
		id: 'catapultbogomol',
		title: 'Богомол',
		category: 'Техлист',
		image: require('../images/TehList/Bogomol.png'), // Прямой URL для удаленного изображения
		price: 70,
		inBasket: true,
		button: '',
	},
	{
		id: 'catapultsarancha',
		title: 'Саранча',
		category: 'Техлист',
		image: require('../images/TehList/Sarancha.png'), // Прямой URL для удаленного изображения
		price: 110,
		inBasket: true,
		button: '',
	},
	{
		id: 'pushkablast',
		title: 'Бласт',
		category: 'Техлист',
		image: require('../images/TehList/Blast.png'), // Прямой URL для удаленного изображения
		price: 130,
		inBasket: true,
		button: '',
	},
	{
		id: 'pushkabuivol',
		title: 'Буйвол',
		category: 'Техлист',
		image: require('../images/TehList/Buivol.png'), // Прямой URL для удаленного изображения
		price: 80,
		inBasket: true,
		button: '',
	},
	{
		id: 'pushkagrom',
		title: 'Гром',
		category: 'Техлист',
		image: require('../images/TehList/Grom.png'), // Прямой URL для удаленного изображения
		price: 120,
		inBasket: true,
		button: '',
	},
	{
		id: 'pushkatelec',
		title: 'Телец',
		category: 'Техлист',
		image: require('../images/TehList/Telec.png'), // Прямой URL для удаленного изображения
		price: 70,
		inBasket: true,
		button: '',
	},
	{
		id: 'pushkaShkval',
		title: 'Шквал',
		category: 'Техлист',
		image: require('../images/TehList/Shkval.png'), // Прямой URL для удаленного изображения
		price: 110,
		inBasket: true,
		button: '',
	},
	{
		id: 'pushkashtorm',
		title: 'Шторм',
		category: 'Техлист',
		image: require('../images/TehList/Shtorm.png'), // Прямой URL для удаленного изображения
		price: 70,
		inBasket: true,
		button: '',
	},
];

//Минометы
export const localMortar = [
	{
		id: 'minometKrab',
		title: 'Краб',
		category: 'Техлист',
		image: require('../images/TehList/Krab.png'),
		price: 40,
		inBasket: true,
		weapons: [projectile, rocketProjectile],
		button: '',
	},
	{
		id: 'minometMolot',
		title: 'Молот',
		category: 'Техлист',
		image: require('../images/TehList/Molot.png'),
		price: 60,
		inBasket: true,
		weapons: [projectile, rocketProjectile],
		button: '',
	},
	{
		id: 'minometedelveys',
		title: 'Эдельвейс',
		category: 'Техлист',
		image: require('../images/TehList/Adalveis.png'),
		price: 60,
		inBasket: true,
		weapons: [projectile, rocketProjectile],
		button: '',
	},
];
