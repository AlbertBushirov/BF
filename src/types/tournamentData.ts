export interface playerResult {
	title: string;
	result: string;
}

export interface players {
	name: string;
}

//Омск 2025

const Sergey_Latishev: players = {
	name: 'Сергей Латышев',
};

const Artur_Kovalev: players = {
	name: 'Артур Ковалёв',
};

const Andrey_Andreev: players = {
	name: 'Андрей Андреев',
};

const Ivan_Perfilev: players = {
	name: 'Иван Перфильев',
};

const Egor_Kolobov: players = {
	name: 'Егор Колобов',
};

const Evgeniy_Sorokin: players = {
	name: 'Евгений Сорокин',
};

const Andrei_Omelyashko: players = {
	name: 'Андрей Омеляшко',
};

const Pavel_Kotenev: players = {
	name: 'Павел Котенёв',
};

const Ivan_Polyak: players = {
	name: 'Иван Поляк',
};

const Egor_Klesch: players = {
	name: 'Егор Клещ',
};

const localParticipant = [
	{ name: Sergey_Latishev, result: '3/3' },
	{ name: Artur_Kovalev, result: '3/3' },
	{ name: Andrey_Andreev, result: '3/2' },
	{ name: Ivan_Perfilev, result: '3/2' },
	{ name: Egor_Kolobov, result: '3/1' },
	{ name: Evgeniy_Sorokin, result: '3/1' },
	{ name: Andrei_Omelyashko, result: '3/1' },
	{ name: Pavel_Kotenev, result: '3/1' },
	{ name: Ivan_Polyak, result: '3/1' },
	{ name: Egor_Klesch, result: '3/1' },
];

const localTour_one = [
	[
		{ name: Sergey_Latishev, result: '1' },
		{ name: Ivan_Perfilev, result: '0' },
	],
	[
		{ name: Artur_Kovalev, result: '1' },
		{ name: Egor_Klesch, result: '0' },
	],
	[
		{ name: Andrei_Omelyashko, result: '0' },
		{ name: Egor_Kolobov, result: '1' },
	],
	[
		{ name: Pavel_Kotenev, result: '0' },
		{ name: Andrey_Andreev, result: '1' },
	],
	[
		{ name: Ivan_Polyak, result: '0' },
		{ name: Evgeniy_Sorokin, result: '1' },
	],
];

const localTour_two = [
	{
		nameWins: Sergey_Latishev,
		resultWins: 1,
		nameLose: Evgeniy_Sorokin,
		resultLose: 0,
	},
	{
		nameWins: Artur_Kovalev,
		resultWins: 1,
		nameLose: Andrei_Omelyashko,
		resultLose: 0,
	},
	{
		nameWins: Andrey_Andreev,
		resultWins: 1,
		nameLose: Egor_Kolobov,
		resultLose: 0,
	},
	{
		nameWins: Pavel_Kotenev,
		resultWins: 1,
		nameLose: Ivan_Perfilev,
		resultLose: 0,
	},
	{
		nameWins: Egor_Klesch,
		resultWins: 1,
		nameLose: Ivan_Polyak,
		resultLose: 0,
	},
];

const localTour_three = [
	{
		nameWins: Sergey_Latishev,
		resultWins: 1,
		nameLose: Evgeniy_Sorokin,
		resultLose: 0,
	},
	{
		nameWins: Artur_Kovalev,
		resultWins: 1,
		nameLose: Andrei_Omelyashko,
		resultLose: 0,
	},
	{
		nameWins: Andrey_Andreev,
		resultWins: 1,
		nameLose: Egor_Kolobov,
		resultLose: 0,
	},
	{
		nameWins: Pavel_Kotenev,
		resultWins: 1,
		nameLose: Ivan_Perfilev,
		resultLose: 0,
	},
	{
		nameWins: Egor_Klesch,
		resultWins: 1,
		nameLose: Ivan_Polyak,
		resultLose: 0,
	},
];
