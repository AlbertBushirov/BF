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

const organizerOneMoscow: Cup = {
	image: require('../images/organizer.png'),
	title: 'Организатор турнира в Москве 2023',
};

//Санкт-Петербург 2023
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

export const localPlayers = [
	{
		id: 'Eduard_Permyakov',
		image: require('../images/avatar_gamers.png'),
		player: 'Эдуард Пермяков',
		achievements: [organizerOneMoscow, organizerTwoMoscow],
		games: 0, //Побед: 0
		winrating: 0,
		win: 0,
	},
	{
		id: 'Petr_Devyatko',
		image: require('../images/avatar_gamers.png'),
		player: 'Пётр Девятко',
		achievements: [organizerOneSPB, organizerTwoSPB],
		games: 0, //Побед: 0
		winrating: 0,
		win: 0,
	},
	{
		id: 'Elena_Alekseeva',
		image: require('../images/avatar_gamers.png'),
		player: 'Елена Алексеева',
		achievements: [organizerOneSPB, organizerTwoSPB, organizerTwoMoscow],
		games: 0, //Побед: 0
		winrating: 0,
		win: 0,
	},
	{
		id: 'Albert_Bashirov',
		image: require('../images/photo_players/Albert_Bashirov.jpg'),
		player: 'Альберт Баширов',
		achievements: [],
		games: 11, //Побед: 8
		winrating: 73,
		win: 8,
	},
	{
		id: 'Artur_Kovalev',
		image: require('../images/avatar_gamers.png'),
		player: 'Артур Ковалёв',
		achievements: [OneMoscow1, TwoChel1, TwoSPB2, TwoMoscow3],
		games: 27, //Побед: 22
		winrating: 81,
		win: 22,
	},
	{
		id: 'Sergey_Latishev',
		image: require('../images/photo_players/Sergey_Latishev.jpg'),
		player: 'Сергей Латышев',
		achievements: [OneChel1, TwoMoscow1, TwoSPB3, organizerTwoChe],
		games: 15, //Побед: 14
		winrating: 93,
		win: 14,
	},
	{
		id: 'Ivan_Vasilev',
		image: require('../images/photo_players/Ivan_Vasilev.jpg'),
		player: 'Иван Васильев',
		achievements: [],
		games: 20, //Побед: 12
		winrating: 60,
		win: 12,
	},
	{
		id: 'Stepan_Harlakshin',
		image: require('../images/avatar_gamers.png'),
		player: 'Степан Харлакшин',
		achievements: [],
		games: 15, //Побед: 10
		winrating: 67,
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
		achievements: [TwoSPB1, OneSPB2],
		games: 9, //Побед: 7
		winrating: 78,
		win: 7,
	},
	{
		id: 'Aleksey_Fedulov',
		image: require('../images/avatar_gamers.png'),
		player: 'Алексей Федулов',
		achievements: [organizerTwoMoscow],
		games: 12, //Побед: 6
		winrating: 50,
		win: 6,
	},
	{
		id: 'Denis_Solodkov',
		image: require('../images/avatar_gamers.png'),
		player: 'Денис Солодков',
		achievements: [],
		games: 13, //Побед: 6
		winrating: 46,
		win: 6,
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
		winrating: 83,
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
		achievements: [],
		games: 6, //Побед: 3
		winrating: 50,
		win: 3,
	},
	{
		id: 'Kim_Sabirov',
		image: require('../images/avatar_gamers.png'),
		player: 'Ким Сабиров',
		achievements: [OneSPB1, judgeTwoSPB],
		games: 3, //Побед: 3
		winrating: 100,
		win: 3,
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
		id: 'Andrei_Andreev',
		image: require('../images/avatar_gamers.png'),
		player: 'Андрей Анреев',
		achievements: [],
		games: 8, //Побед: 3
		winrating: 38,
		win: 3,
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
		achievements: [],
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
		games: 4, //Побед: 2
		winrating: 50,
		win: 2,
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
		games: 3, //Побед: 1
		winrating: 33,
		win: 1,
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
		games: 3, //Побед: 1
		winrating: 0,
		win: 1,
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
		games: 4, //Побед: 1
		winrating: 25,
		win: 1,
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
		games: 6, //Побед: 4
		winrating: 67,
		win: 4,
	},
	{
		id: 'Ruslan_Aljanov',
		image: require('../images/avatar_gamers.png'),
		player: 'Руслан Альжанов',
		achievements: [],
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
		games: 3, //Побед: 0
		winrating: 0,
		win: 0,
	},

	{
		id: 'Vladisliav_Rastihin',
		image: require('../images/avatar_gamers.png'),
		player: 'Владислав Растихин',
		achievements: [],
		games: 3, //Побед: 0
		winrating: 0,
		win: 0,
	},
	{
		id: 'Alexander_Toporkov',
		image: require('../images/avatar_gamers.png'),
		player: 'Александр Топорков',
		achievements: [],
		games: 6, //Побед: 2
		winrating: 33,
		win: 2,
	},

	{
		id: 'Ivan_Perfilev',
		image: require('../images/avatar_gamers.png'),
		player: 'Иван Перфильев',
		achievements: [],
		games: 4, //Побед: 2
		winrating: 50,
		win: 2,
	},

	{
		id: 'Stanislav_Tarasov',
		image: require('../images/avatar_gamers.png'),
		player: 'Станислав Тарасов',
		achievements: [],
		games: 3, //Побед: 2
		winrating: 33,
		win: 1,
	},
];
