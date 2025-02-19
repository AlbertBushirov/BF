export interface Cup {
	image: string;
	title: string;
}

//Санкт-Петербург
const OneSPB1: Cup = {
	image: require('../images/cups-1.png'),
	title: 'Чемпион турнира в Санкт-Петербурге 2023',
};

const OneSPB2: Cup = {
	image: require('../images/cups-1.png'),
	title: 'Серебро турнира в Санкт-Петербурге 2023',
};

const TwoSPB1: Cup = {
	image: require('../images/cups-2.png'),
	title: 'Чемпион турнира в Санкт-Петербурге 2024',
};

const TwoSPB2: Cup = {
	image: require('../images/cups-2.png'),
	title: 'Серебро турнира в Санкт-Петербурге 2024',
};

const TwoSPB3: Cup = {
	image: require('../images/cups-2.png'),
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
	title: 'Чемпион турнира в Челябинске 2024',
};

export const localPlayers = [
	{
		id: 'Albert_Bashirov',
		image: require('../images/avatar_gamers.png'),
		player: 'Иосиф Сталин',
		achievements: [TwoSPB1, OneSPB1, TwoMoscow3, OneChel1],
		games: 11,
		win: 73,
	},
	{
		id: 'Ivan_Vasilev',
		image: require('../images/avatar_gamers.png'),
		player: 'Иван Иванович',
		achievements: [],
		games: 11,
		win: 80,
	},
	{
		id: 'Grisha_Telhai',
		image: require('../images/avatar_gamers.png'),
		player: 'Григорий Распутин',
		achievements: [],
		games: 13,
		win: 80,
	},
];
