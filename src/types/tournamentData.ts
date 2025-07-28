export interface players {
	id: string;
	name: string;
}

export interface IGames {
	name: players;
	result: string;
}

export interface ITournament {
	title: string;
	participant: Array<{ name: players; result: string }>;
	participant1: Array<{ name: players; result: string }>;
	tour_one: Array<{ name: players; result: number }>;
	tour_two: Array<{ name: players; result: number }>;
	tour_thee: Array<{ name: players; result: number }>;
	tour_four: Array<{ name: players; result: number }>;
	tour_five: Array<{ name: players; result: number }>;
	tour_six: Array<{ name: players; result: number }>;
}

//Участники Турниров

const Sergey_Latishev: players = {
	id: 'Sergey_Latishev',
	name: 'Сергей Латышев',
};

const Artur_Kovalev: players = {
	id: 'Artur_Kovalev',
	name: 'Артур Ковалёв',
};

const Andrey_Andreev: players = {
	id: 'Andrey_Andreev',
	name: 'Андрей Андреев',
};

const Ivan_Perfilev: players = {
	id: 'Ivan_Perfilev',
	name: 'Иван Перфильев',
};

const Egor_Kolobov: players = {
	id: 'Egor_Kolobov',
	name: 'Егор Колобов',
};

const Evgeniy_Sorokin: players = {
	id: 'Evgeniy_Sorokin',
	name: 'Евгений Сорокин',
};

const Andrei_Omelyashko: players = {
	id: 'Andrei_Omelyashko',
	name: 'Андрей Омеляшко',
};

const Pavel_Kotenev: players = {
	id: 'Pavel_Kotenev',
	name: 'Павел Котенёв',
};

const Ivan_Polyak: players = {
	id: 'Ivan_Polyak',
	name: 'Иван Поляк',
};

const Egor_Klesch: players = {
	id: 'Egor_Klesch',
	name: 'Егор Клещ',
};

//Результаты игровых дней

export const localParticipant = [
	{ name: Sergey_Latishev, result: '3/3' },
	{ name: Artur_Kovalev, result: '3/3' },
	{ name: Andrey_Andreev, result: '2/3' },
	{ name: Ivan_Perfilev, result: '2/3' },
	{ name: Egor_Kolobov, result: '1/3' },
	{ name: Evgeniy_Sorokin, result: '1/3' },
	{ name: Andrei_Omelyashko, result: '1/3' },
	{ name: Pavel_Kotenev, result: '1/3' },
	{ name: Ivan_Polyak, result: '1/3' },
	{ name: Egor_Klesch, result: '0/3' },
];

export const localParticipant1 = [
	{ name: Sergey_Latishev, result: '5/6' },
	{ name: Artur_Kovalev, result: '5/6' },
	{ name: Andrey_Andreev, result: '3/6' },
	{ name: Ivan_Perfilev, result: '3/6' },
	{ name: Egor_Kolobov, result: '3/6' },
	{ name: Evgeniy_Sorokin, result: '2/6' },
	{ name: Andrei_Omelyashko, result: '4/6' },
	{ name: Pavel_Kotenev, result: '3/6' },
	{ name: Ivan_Polyak, result: '1/6' },
	{ name: Egor_Klesch, result: '1/6' },
];

export const OMSK25localTour_one = [
	{ name: Sergey_Latishev, result: 1 },
	{ name: Ivan_Perfilev, result: 0 },

	{ name: Artur_Kovalev, result: 1 },
	{ name: Egor_Klesch, result: 0 },

	{ name: Andrei_Omelyashko, result: 0 },
	{ name: Egor_Kolobov, result: 1 },

	{ name: Pavel_Kotenev, result: 0 },
	{ name: Andrey_Andreev, result: 1 },

	{ name: Ivan_Polyak, result: 0 },
	{ name: Evgeniy_Sorokin, result: 1 },
];

export const OMSK25localTour_two = [
	{ name: Sergey_Latishev, result: 1 },
	{ name: Evgeniy_Sorokin, result: 0 },

	{ name: Artur_Kovalev, result: 1 },
	{ name: Andrei_Omelyashko, result: 0 },

	{ name: Andrey_Andreev, result: 1 },
	{ name: Egor_Kolobov, result: 0 },

	{ name: Pavel_Kotenev, result: 0 },
	{ name: Ivan_Perfilev, result: 1 },

	{ name: Egor_Klesch, result: 0 },
	{ name: Ivan_Polyak, result: 1 },
];

export const OMSK25localTour_thee = [
	{ name: Sergey_Latishev, result: 1 },
	{ name: Andrey_Andreev, result: 0 },

	{ name: Artur_Kovalev, result: 1 },
	{ name: Evgeniy_Sorokin, result: 0 },

	{ name: Andrei_Omelyashko, result: 1 },
	{ name: Ivan_Polyak, result: 0 },

	{ name: Egor_Kolobov, result: 0 },
	{ name: Ivan_Perfilev, result: 1 },

	{ name: Egor_Klesch, result: 0 },
	{ name: Pavel_Kotenev, result: 1 },
];

export const OMSK25localTour_four = [
	{ name: Sergey_Latishev, result: 0 },
	{ name: Artur_Kovalev, result: 1 },

	{ name: Ivan_Perfilev, result: 0 },
	{ name: Andrey_Andreev, result: 1 },

	{ name: Pavel_Kotenev, result: 1 },
	{ name: Ivan_Polyak, result: 0 },

	{ name: Egor_Kolobov, result: 1 },
	{ name: Evgeniy_Sorokin, result: 0 },

	{ name: Egor_Klesch, result: 0 },
	{ name: Andrei_Omelyashko, result: 1 },
];

export const OMSK25localTour_five = [
	{ name: Sergey_Latishev, result: 1 },
	{ name: Egor_Kolobov, result: 0 },

	{ name: Artur_Kovalev, result: 1 },
	{ name: Andrey_Andreev, result: 0 },

	{ name: Pavel_Kotenev, result: 0 },
	{ name: Andrei_Omelyashko, result: 1 },

	{ name: Ivan_Perfilev, result: 1 },
	{ name: Ivan_Polyak, result: 0 },

	{ name: Egor_Klesch, result: 0 },
	{ name: Evgeniy_Sorokin, result: 1 },
];

export const OMSK25localTour_six = [
	{ name: Sergey_Latishev, result: 1 },
	{ name: Artur_Kovalev, result: 0 },

	{ name: Evgeniy_Sorokin, result: 0 },
	{ name: Pavel_Kotenev, result: 1 },

	{ name: Andrei_Omelyashko, result: 1 },
	{ name: Ivan_Perfilev, result: 0 },

	{ name: Egor_Klesch, result: 1 },
	{ name: Ivan_Polyak, result: 0 },

	{ name: Egor_Kolobov, result: 1 },
	{ name: Andrey_Andreev, result: 0 },
];

export const localTournament = [
	{
		title: 'Турнир в Омске 2025',
		participant: localParticipant,
		participant1: localParticipant1,
		tour_one: OMSK25localTour_one,
		tour_two: OMSK25localTour_two,
		tour_thee: OMSK25localTour_thee,
		tour_four: OMSK25localTour_four,
		tour_five: OMSK25localTour_five,
		tour_six: OMSK25localTour_six,
	},
];
