export interface Cup {
	image: string;
	title: string;
}

//За судейство
const judgeTwoSPB: Cup = {
	image: require('../images/judge.png'),
	title: 'Судья турнира в Санкт-Петербурге 2024',
};

const judgeOneMoskow: Cup = {
	image: require('../images/judge.png'),
	title: 'Судья турнира в Москве 2023',
};

const judgeThreeSPB: Cup = {
	image: require('../images/judge.png'),
	title: 'Судья турнира в Санкт-Петербурге 2025',
};

//-------------------------------------------------------------------------------

//За оргазизацию
const organizerOneSPB: Cup = {
	image: require('../images/organizer.png'),
	title: 'Организатор турнира в Санкт-Петербурге 2023',
};

const organizerTwoSPB: Cup = {
	image: require('../images/organizer.png'),
	title: 'Организатор турнира в Санкт-Петербурге 2024',
};

const organizerThreeSPB: Cup = {
	image: require('../images/organizer.png'),
	title: 'Организатор турнира в Санкт-Петербурге 2025',
};

const organizerThreeJuniorSPB: Cup = {
	image: require('../images/JuniorOrganizer.png'),
	title: 'Организатор турнира Юниоров в Санкт-Петербурге 2025',
};

const organizerOneChe: Cup = {
	image: require('../images/organizer.png'),
	title: 'Организатор турнира в Челябинске 2023',
};

const organizerTwoChe: Cup = {
	image: require('../images/organizer.png'),
	title: 'Организатор турнира в Челябинске 2024',
};

const organizerTwoMoscow: Cup = {
	image: require('../images/organizer.png'),
	title: 'Организатор турнира в Москве 2024',
};

const organizerOneOmsk: Cup = {
	image: require('../images/organizer.png'),
	title: 'Организатор турнира в Омске 2025',
};

const organizerOneMoscow: Cup = {
	image: require('../images/organizer.png'),
	title: 'Организатор турнира в Москве 2023',
};

//Санкт-Петербург
const OneSPB1: Cup = {
	image: require('../images/cups-1.png'),
	title: 'Чемпион турнира в Санкт-Петербурге 2023',
};

const OneSPB2: Cup = {
	image: require('../images/cups-2.png'),
	title: 'Серебро турнира в Санкт-Петербурге 2023',
};

const TwoSPB1: Cup = {
	image: require('../images/cups-1.png'),
	title: 'Чемпион турнира в Санкт-Петербурге 2024',
};

const TwoSPB2: Cup = {
	image: require('../images/cups-2.png'),
	title: 'Серебро турнира в Санкт-Петербурге 2024',
};

const TwoSPB3: Cup = {
	image: require('../images/cups-3.png'),
	title: 'Бронза турнира в Санкт-Петербурге 2024',
};

const ThreeSPB1: Cup = {
	image: require('../images/cups-1.png'),
	title: 'Чемпион турнира в Санкт-Петербурге 2025',
};

const ThreeSPB2: Cup = {
	image: require('../images/cups-2.png'),
	title: 'Серебро турнира в Санкт-Петербурге 2025',
};

const ThreeSPB3: Cup = {
	image: require('../images/cups-3.png'),
	title: 'Бронза турнира в Санкт-Петербурге 2025',
};

//Москва
const OneMoscow1: Cup = {
	image: require('../images/cups-1.png'),
	title: 'Чемпион турнира в Москве 2023',
};

const OneMoscow2: Cup = {
	image: require('../images/cups-2.png'),
	title: 'Серебро турнира в Москве 2023',
};

const TwoMoscow1: Cup = {
	image: require('../images/cups-1.png'),
	title: 'Чемпион турнира в Москве 2024',
};

const TwoMoscow2: Cup = {
	image: require('../images/cups-2.png'),
	title: 'Серебро турнира в Москве 2024',
};

const TwoMoscow3: Cup = {
	image: require('../images/cups-3.png'),
	title: 'Бронза турнира в Москве 2024',
};

//Челябинск
const OneChel1: Cup = {
	image: require('../images/cups-1.png'),
	title: 'Чемпион турнира в Челябинске. Январь 2024',
};

const OneChel2: Cup = {
	image: require('../images/cups-2.png'),
	title: 'Серебро турнира в Челябинске. Январь 2024',
};

const TwoChel1: Cup = {
	image: require('../images/cups-1.png'),
	title: 'Чемпион турнира в Челябинске. Сентябрь 2024',
};

const TwoChel2: Cup = {
	image: require('../images/cups-2.png'),
	title: 'Серебро турнира в Челябинске. Сентябрь 2024',
};

const TwoChel3: Cup = {
	image: require('../images/cups-3.png'),
	title: 'Бронза турнира в Челябинске. Сентябрь 2024',
};

//Омск
const OneOmsk1: Cup = {
	image: require('../images/cups-1.png'),
	title: 'Чемпион турнира в Омске 2025',
};

const OneOmsk2: Cup = {
	image: require('../images/cups-2.png'),
	title: 'Серебро турнира в Омске 2025',
};

//-------------------------------------------------------------------------------

export const localPlayers = [
	{
		id: 'Eduard_Permyakov',
		image: require('../images/avatar_gamers.png'),
		player: 'Эдуард Пермяков',
		achievements: [organizerOneMoscow, organizerTwoMoscow],
		games: 0,
		winrating: 0,
		win: 0,
	},
	{
		id: 'Alexander_Safronov',
		image: require('../images/avatar_gamers.png'),
		player: 'Александр Сафронов',
		achievements: [organizerThreeSPB],
		games: 0,
		winrating: 0,
		win: 0,
	},
	{
		id: 'Petr_Devyatko',
		image: require('../images/photo_players/Petr_Devyatko.jpg'),
		player: 'Пётр Девятко',
		achievements: [organizerOneSPB, organizerTwoSPB, organizerThreeSPB],
		games: 0,
		winrating: 0,
		win: 0,
	},
	{
		id: 'Elena_Alekseeva',
		image: require('../images/avatar_gamers.png'),
		player: 'Елена Алексеева',
		achievements: [
			organizerOneSPB,
			organizerTwoSPB,
			organizerTwoMoscow,
			organizerOneOmsk,
			organizerThreeSPB,
		],
		games: 0,
		winrating: 0,
		win: 0,
	},
	{
		id: 'Albert_Bashirov',
		image: require('../images/photo_players/Albert_Bashirov.jpg'),
		player: 'Альберт Баширов',
		achievements: [ThreeSPB3],
		games: 17, //Побед: 8
		win: 12,
	},
	{
		id: 'Artur_Kovalev',
		image: require('../images/photo_players/Artur_Kovalev.jpg'),
		player: 'Артур Ковалёв',
		achievements: [
			OneMoscow1,
			TwoChel1,
			ThreeSPB1,
			TwoSPB2,
			OneOmsk2,
			TwoMoscow3,
		],
		games: 39, //Побед: 22
		win: 32,
	},
	{
		id: 'Sergey_Latishev',
		image: require('../images/photo_players/Sergey_Latishev.jpg'),
		player: 'Сергей Латышев',
		achievements: [OneChel1, TwoMoscow1, OneOmsk1, TwoSPB3, organizerTwoChe],
		games: 21, //Побед: 14
		win: 19,
	},
	{
		id: 'Ivan_Vasilev',
		image: require('../images/photo_players/Ivan_Vasilev.jpg'),
		player: 'Иван Васильев',
		achievements: [ThreeSPB2],
		games: 31,
		winrating: 5500,
		win: 17, //Побед: 17
	},
	{
		id: 'Stepan_Harlakshin',
		image: require('../images/avatar_gamers.png'),
		player: 'Степан Харлашкин',
		achievements: [],
		games: 15, //Побед: 10
		win: 10,
	},
	{
		id: 'Mikhail_Bezgans',
		image: require('../images/avatar_gamers.png'),
		player: 'Михаил Безганс',
		achievements: [TwoChel3],
		games: 6, //Побед: 4
		winrating: 67,
		win: 4,
	},
	{
		id: 'Viktor_Petrov',
		image: require('../images/avatar_gamers.png'),
		player: 'Виктор Петров',
		achievements: [TwoSPB1, OneSPB2, judgeThreeSPB],
		games: 9, //Побед: 7
		winrating: 78,
		win: 7,
	},
	{
		id: 'Aleksey_Fedulov',
		image: require('../images/avatar_gamers.png'),
		player: 'Алексей Федулов',
		achievements: [organizerTwoMoscow],
		games: 18, //Побед: 6
		winrating: 50,
		win: 7,
	},
	{
		id: 'Denis_Solodkov',
		image: require('../images/avatar_gamers.png'),
		player: 'Денис Солодков',
		achievements: [],
		games: 19, //Побед: 6
		winrating: 46,
		win: 10,
	},
	{
		id: 'Aleksey_Mukhin',
		image: require('../images/avatar_gamers.png'),
		player: 'Алексей Мухин',
		achievements: [OneMoscow2],
		games: 9, //Побед: 6
		winrating: 67,
		win: 6,
	},
	{
		id: 'Leonid_Vasilev',
		image: require('../images/avatar_gamers.png'),
		player: 'Леонид Васильев',
		achievements: [],
		games: 9, //Побед: 5
		winrating: 56,
		win: 5,
	},
	{
		id: 'Ruslan_Ilyasov',
		image: require('../images/avatar_gamers.png'),
		player: 'Руслан Ильясов',
		achievements: [TwoMoscow2],
		games: 6, //Побед: 5
		winrating: 8300,
		win: 5,
	},
	{
		id: 'Ivan_Gaidukov',
		image: require('../images/avatar_gamers.png'),
		player: 'Иван Гайдуков',
		achievements: [],
		games: 9, //Побед: 4
		winrating: 44,
		win: 4,
	},
	{
		id: 'Vasily_Nikishin',
		image: require('../images/avatar_gamers.png'),
		player: 'Василий Никишин',
		achievements: [],
		games: 5, //Побед: 1
		winrating: 20,
		win: 1,
	},
	{
		id: 'Ural_Ismagilov',
		image: require('../images/avatar_gamers.png'),
		player: 'Урал Исмагилов',
		achievements: [OneChel2],
		games: 4, //Побед: 3
		winrating: 75,
		win: 3,
	},
	{
		id: 'Dmitriy_Vinogradov',
		image: require('../images/avatar_gamers.png'),
		player: 'Дмитрий Виноградов',
		achievements: [judgeThreeSPB],
		games: 6, //Побед: 3
		winrating: 50,
		win: 3,
	},
	{
		id: 'Kim_Sabirov',
		image: require('../images/avatar_gamers.png'),
		player: 'Ким Сабиров',
		achievements: [OneSPB1, judgeTwoSPB],
		games: 9,
		win: 7,
	},
	{
		id: 'Pavel_Karelin',
		image: require('../images/avatar_gamers.png'),
		player: 'Павел Карелин',
		achievements: [],
		games: 3, //Побед: 2
		winrating: 67,
		win: 2,
	},
	{
		id: 'Artem_Sirvachev',
		image: require('../images/avatar_gamers.png'),
		player: 'Артём Сырвачев',
		achievements: [TwoChel2],
		games: 10, //Побед: 7
		winrating: 70,
		win: 7,
	},
	{
		id: 'Leonid_Solovev',
		image: require('../images/avatar_gamers.png'),
		player: 'Леонид Соловьев',
		achievements: [],
		games: 6, //Побед: 4
		winrating: 67,
		win: 4,
	},
	{
		id: 'Andrey_Andreev',
		image: require('../images/photo_players/Andrey_Andreev.jpg'),
		player: 'Андрей Андреев',
		achievements: [],
		games: 14, //Побед: 3
		winrating: 43,
		win: 6,
	},
	{
		id: 'Timofei_Barahovski',
		image: require('../images/avatar_gamers.png'),
		player: 'Тимофей Бараховский',
		achievements: [judgeOneMoskow, organizerTwoMoscow],
		games: 4, //Побед: 2
		winrating: 50,
		win: 2,
	},
	{
		id: 'Alexander_Mashkalo',
		image: require('../images/avatar_gamers.png'),
		player: 'Александр Машкало',
		achievements: [organizerThreeJuniorSPB],
		games: 6, //Побед: 2
		winrating: 33,
		win: 2,
	},
	{
		id: 'Georgiy_Dragun',
		image: require('../images/avatar_gamers.png'),
		player: 'Георгий Драгун',
		achievements: [],
		games: 4, //Побед: 2
		winrating: 50,
		win: 2,
	},
	{
		id: 'Danila_Kuznecov',
		image: require('../images/avatar_gamers.png'),
		player: 'Данила Кузнецов',
		achievements: [],
		games: 11, //Побед: 5
		winrating: 45,
		win: 5,
	},
	{
		id: 'Dmitriy_Sokil',
		image: require('../images/avatar_gamers.png'),
		player: 'Дмитрий Сокил',
		achievements: [],
		games: 13, //Побед: 2
		winrating: 15,
		win: 2,
	},
	{
		id: 'Egor_Muzika',
		image: require('../images/avatar_gamers.png'),
		player: 'Егор Музыка',
		achievements: [],
		games: 4, //Побед: 2
		winrating: 50,
		win: 2,
	},
	{
		id: 'Evgeniy_Sorokin',
		image: require('../images/avatar_gamers.png'),
		player: 'Евгений Сорокин',
		achievements: [],
		games: 16,
		winrating: 40,
		win: 7,
	},
	{
		id: 'Eduard_Agievich',
		image: require('../images/avatar_gamers.png'),
		player: 'Эдуард Агиевич',
		achievements: [],
		games: 8, //Побед: 3
		winrating: 36,
		win: 3,
	},
	{
		id: 'Pavel_Gavrilov',
		image: require('../images/avatar_gamers.png'),
		player: 'Павел Гаврилов',
		achievements: [],
		games: 3, //Побед: 1
		winrating: 33,
		win: 1,
	},
	{
		id: 'Vladimir_Baskov',
		image: require('../images/avatar_gamers.png'),
		player: 'Владимир Басков',
		achievements: [],
		games: 9, //Побед: 1
		winrating: 33,
		win: 3,
	},
	{
		id: 'Zahar_Alekseev',
		image: require('../images/avatar_gamers.png'),
		player: 'Захар Алексеев',
		achievements: [],
		games: 3, //Побед: 1
		winrating: 33,
		win: 1,
	},
	{
		id: 'Sergey_Egorov',
		image: require('../images/avatar_gamers.png'),
		player: 'Сергей Егоров',
		achievements: [],
		games: 14, //Побед: 1
		winrating: 13,
		win: 3,
	},
	{
		id: 'Anton_Zubakov',
		image: require('../images/avatar_gamers.png'),
		player: 'Антон Зубков',
		achievements: [],
		games: 3, //Побед: 1
		winrating: 33,
		win: 1,
	},
	{
		id: 'Borovik_Matvei',
		image: require('../images/avatar_gamers.png'),
		player: 'Матвей Боровик',
		achievements: [],
		games: 3, //Побед: 1
		winrating: 33,
		win: 1,
	},
	{
		id: 'Egor_Kornev',
		image: require('../images/avatar_gamers.png'),
		player: 'Егор Корнев',
		achievements: [],
		games: 9, //Побед: 5
		winrating: 56,
		win: 5,
	},
	{
		id: 'Vaycheslav_Kocherov',
		image: require('../images/avatar_gamers.png'),
		player: 'Вячеслав Качеров',
		achievements: [],
		games: 3, //Побед: 1
		winrating: 33,
		win: 1,
	},
	{
		id: 'Igor_Reshetnikov',
		image: require('../images/avatar_gamers.png'),
		player: 'Игорь Решетников',
		achievements: [],
		games: 9, //Побед: 1
		winrating: 10,
		win: 1,
	},
	{
		id: 'Denis_Shtaltovoi',
		image: require('../images/avatar_gamers.png'),
		player: 'Денис Шталтовой',
		achievements: [],
		games: 10, //Побед: 1
		winrating: 25,
		win: 5,
	},
	{
		id: 'Ivan_Vershinin',
		image: require('../images/avatar_gamers.png'),
		player: 'Иван Вершинин',
		achievements: [],
		games: 3, //Побед: 1
		winrating: 33,
		win: 1,
	},
	{
		id: 'Andrei_Omelyashko',
		image: require('../images/avatar_gamers.png'),
		player: 'Андрей Омеляшко',
		achievements: [organizerOneChe],
		games: 12, //Побед: 4
		winrating: 67,
		win: 8,
	},
	{
		id: 'Ruslan_Aljanov',
		image: require('../images/avatar_gamers.png'),
		player: 'Руслан Альжанов',
		achievements: [organizerOneOmsk],
		games: 3, //Побед: 0
		winrating: 0,
		win: 0,
	},
	{
		id: 'Georgiy_Matveev',
		image: require('../images/avatar_gamers.png'),
		player: 'Георгий Матвеев',
		achievements: [],
		games: 7, //Побед: 0
		winrating: 0,
		win: 0,
	},
	{
		id: 'Maksim_Dobrohodov',
		image: require('../images/avatar_gamers.png'),
		player: 'Максим Доброходов',
		achievements: [],
		games: 3,
		winrating: 0,
		win: 0,
	},

	{
		id: 'Vladisliav_Rastihin',
		image: require('../images/avatar_gamers.png'),
		player: 'Владислав Растихин',
		achievements: [],
		games: 3,
		winrating: 0,
		win: 0,
	},
	{
		id: 'Alexander_Toporkov',
		image: require('../images/avatar_gamers.png'),
		player: 'Александр Топорков',
		achievements: [],
		games: 6,
		winrating: 33,
		win: 2,
	},

	{
		id: 'Ivan_Perfilev',
		image: require('../images/photo_players/Ivan_Perfilev.jpg'),
		player: 'Иван Перфильев',
		achievements: [],
		games: 10,
		winrating: 50,
		win: 5,
	},
	{
		id: 'Stanislav_Tarasov',
		image: require('../images/avatar_gamers.png'),
		player: 'Станислав Тарасов',
		achievements: [],
		games: 3,
		winrating: 33,
		win: 1,
	},
	{
		id: 'Ivan_Polyak',
		image: require('../images/avatar_gamers.png'),
		player: 'Иван Поляк',
		achievements: [],
		games: 6,
		winrating: 17,
		win: 1,
	},
	{
		id: 'Egor_Klesch',
		image: require('../images/avatar_gamers.png'),
		player: 'Егор Клещ',
		achievements: [],
		games: 6,
		winrating: 17,
		win: 1,
	},
	{
		id: 'Pavel_Kotenev',
		image: require('../images/avatar_gamers.png'),
		player: 'Павел Котенёв',
		achievements: [],
		games: 6,
		winrating: 50,
		win: 3,
	},
	{
		id: 'Egor_Kolobov',
		image: require('../images/avatar_gamers.png'),
		player: 'Егор Колобов',
		achievements: [],
		games: 6,
		winrating: 50,
		win: 3,
	},
	{
		id: 'Vadim_Basuk',
		image: require('../images/photo_players/Vadim_Basuk.jpg'),
		player: 'Вадим Басюк',
		achievements: [],
		games: 6,
		winrating: 50,
		win: 3,
	},
	{
		id: 'Maksim_Yacuk',
		image: require('../images/avatar_gamers.png'),
		player: 'Максим Яцук',
		achievements: [],
		games: 6,
		winrating: 50,
		win: 2,
	},
	{
		id: 'Ivan_grigorev',
		image: require('../images/avatar_gamers.png'),
		player: 'Иван Григорьев',
		achievements: [],
		games: 6,
		winrating: 50,
		win: 0,
	},
	{
		id: 'Dmitriy Ryabov',
		image: require('../images/avatar_gamers.png'),
		player: 'Дмитрий Рябов',
		achievements: [],
		games: 6,
		winrating: 50,
		win: 0,
	},
];
