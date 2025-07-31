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
	participantTwo?: Array<{ name: players; result: string }>;
	tour_one: Array<{ name: players; result: number }>;
	tour_two?: Array<{ name: players; result: number }>;
	tour_three?: Array<{ name: players; result: number }>;
	tour_four?: Array<{ name: players; result: number }>;
	tour_five?: Array<{ name: players; result: number }>;
	tour_six?: Array<{ name: players; result: number }>;
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

const Albert_Bashirov: players = {
	id: 'Albert_Bashirov',
	name: 'Альберт Баширов',
};

const Ivan_Vasilev: players = {
	id: 'Ivan_Vasilev',
	name: 'Иван Васильев',
};

const Denis_Solodkov: players = {
	id: 'Denis_Solodkov',
	name: 'Денис Солодков',
};

const Kim_Sabirov: players = {
	id: 'Kim_Sabirov',
	name: 'Ким Сабиров',
};

const Denis_Shtaltovoi: players = {
	id: 'Denis_Shtaltovoi',
	name: 'Денис Шталтовой',
};

const Vadim_Basuk: players = {
	id: 'Vadim_Basuk',
	name: 'Вадим Басюк',
};

const Vladimir_Baskov: players = {
	id: 'Vladimir_Baskov',
	name: 'Владимир Басков',
};

const Sergey_Egorov: players = {
	id: 'Sergey_Egorov',
	name: 'Сергей Егоров',
};

const Maksim_Yacyk: players = {
	id: 'Maksim_Yacyk',
	name: 'Максим Яцук',
};

const Aleksey_Fedulov: players = {
	id: 'Aleksey_Fedulov',
	name: 'Алексей Федулов',
};

const Ivan_Grigorev: players = {
	id: 'Ivan_Grigorev',
	name: 'Иван Григорьев',
};

const Dmitriy_Ryabov: players = {
	id: 'Dmitriy_Ryabov',
	name: 'Дмитрий Рябов',
};
//Результаты игровых дней

//Омск 2025
const OmskParticipant = [
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

const OmskParticipant1 = [
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

const OMSK25localTour_one = [
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

export const OMSK25localTour_three = [
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

//Санкт-Петербург
const SPB25Participant = [
	{ name: Ivan_Vasilev, result: '3/3' },
	{ name: Denis_Solodkov, result: '3/3' },
	{ name: Artur_Kovalev, result: '2/3' },
	{ name: Albert_Bashirov, result: '2/3' },
	{ name: Kim_Sabirov, result: '2/3' },
	{ name: Denis_Shtaltovoi, result: '2/3' },
	{ name: Evgeniy_Sorokin, result: '2/3' },
	{ name: Vadim_Basuk, result: '2/3' },
	{ name: Vladimir_Baskov, result: '0/3' },
	{ name: Sergey_Egorov, result: '2/3' },
	{ name: Maksim_Yacyk, result: '0/3' },
	{ name: Aleksey_Fedulov, result: '1/3' },
	{ name: Ivan_Grigorev, result: '0/3' },
	{ name: Dmitriy_Ryabov, result: '0/3' },
];

const SPB25Participant1 = [
	{ name: Ivan_Vasilev, result: '5/6' },
	{ name: Denis_Solodkov, result: '4/6' },
	{ name: Artur_Kovalev, result: '5/6' },
	{ name: Albert_Bashirov, result: '4/6' },
	{ name: Kim_Sabirov, result: '4/6' },
	{ name: Denis_Shtaltovoi, result: '4/6' },
	{ name: Evgeniy_Sorokin, result: '3/6' },
	{ name: Vadim_Basuk, result: '3/6' },
	{ name: Vladimir_Baskov, result: '2/6' },
	{ name: Sergey_Egorov, result: '2/6' },
	{ name: Maksim_Yacyk, result: '2/6' },
	{ name: Aleksey_Fedulov, result: '1/6' },
	{ name: Ivan_Grigorev, result: '0/3' },
	{ name: Dmitriy_Ryabov, result: '0/3' },
];

const SPB25localTour_one = [
	{ name: Artur_Kovalev, result: 0 },
	{ name: Albert_Bashirov, result: 1 },

	{ name: Vladimir_Baskov, result: 0 },
	{ name: Denis_Solodkov, result: 1 },

	{ name: Kim_Sabirov, result: 1 },
	{ name: Evgeniy_Sorokin, result: 0 },

	{ name: Aleksey_Fedulov, result: 0 },
	{ name: Vadim_Basuk, result: 1 },

	{ name: Maksim_Yacyk, result: 0 },
	{ name: Ivan_Vasilev, result: 1 },

	{ name: Dmitriy_Ryabov, result: 0 },
	{ name: Denis_Shtaltovoi, result: 1 },

	{ name: Ivan_Grigorev, result: 0 },
	{ name: Sergey_Egorov, result: 1 },
];

const SPB25localTour_two = [
	{ name: Artur_Kovalev, result: 1 },
	{ name: Ivan_Grigorev, result: 0 },

	{ name: Vladimir_Baskov, result: 0 },
	{ name: Denis_Shtaltovoi, result: 1 },

	{ name: Kim_Sabirov, result: 1 },
	{ name: Aleksey_Fedulov, result: 0 },

	{ name: Ivan_Vasilev, result: 1 },
	{ name: Vadim_Basuk, result: 0 },

	{ name: Maksim_Yacyk, result: 0 },
	{ name: Denis_Solodkov, result: 1 },

	{ name: Dmitriy_Ryabov, result: 0 },
	{ name: Evgeniy_Sorokin, result: 1 },

	{ name: Albert_Bashirov, result: 1 },
	{ name: Sergey_Egorov, result: 0 },
];

const SPB25localTour_three = [
	{ name: Artur_Kovalev, result: 1 },
	{ name: Kim_Sabirov, result: 0 },

	{ name: Vladimir_Baskov, result: 0 },
	{ name: Aleksey_Fedulov, result: 1 },

	{ name: Ivan_Vasilev, result: 1 },
	{ name: Albert_Bashirov, result: 0 },

	{ name: Denis_Shtaltovoi, result: 0 },
	{ name: Vadim_Basuk, result: 1 },

	{ name: Maksim_Yacyk, result: 0 },
	{ name: Sergey_Egorov, result: 1 },

	{ name: Dmitriy_Ryabov, result: 0 },
	{ name: Denis_Solodkov, result: 1 },

	{ name: Ivan_Grigorev, result: 0 },
	{ name: Evgeniy_Sorokin, result: 1 },
];

const SPB25localTour_four = [
	{ name: Artur_Kovalev, result: 1 },
	{ name: Evgeniy_Sorokin, result: 0 },

	{ name: Vladimir_Baskov, result: 1 },
	{ name: Maksim_Yacyk, result: 0 },

	{ name: Ivan_Vasilev, result: 1 },
	{ name: Denis_Solodkov, result: 0 },

	{ name: Denis_Shtaltovoi, result: 0 },
	{ name: Kim_Sabirov, result: 1 },

	{ name: Albert_Bashirov, result: 1 },
	{ name: Sergey_Egorov, result: 0 },

	{ name: Aleksey_Fedulov, result: 0 },
	{ name: Vadim_Basuk, result: 1 },
];

const SPB25localTour_five = [
	{ name: Artur_Kovalev, result: 1 },
	{ name: Ivan_Vasilev, result: 0 },

	{ name: Albert_Bashirov, result: 1 },
	{ name: Denis_Solodkov, result: 0 },

	{ name: Kim_Sabirov, result: 1 },
	{ name: Vadim_Basuk, result: 0 },

	{ name: Denis_Shtaltovoi, result: 1 },
	{ name: Vladimir_Baskov, result: 0 },

	{ name: Aleksey_Fedulov, result: 0 },
	{ name: Maksim_Yacyk, result: 1 },

	{ name: Evgeniy_Sorokin, result: 1 },
	{ name: Sergey_Egorov, result: 0 },
];

const SPB25localTour_six = [
	{ name: Artur_Kovalev, result: 1 },
	{ name: Albert_Bashirov, result: 0 },

	{ name: Vadim_Basuk, result: 0 },
	{ name: Denis_Shtaltovoi, result: 1 },

	{ name: Denis_Solodkov, result: 1 },
	{ name: Evgeniy_Sorokin, result: 0 },

	{ name: Aleksey_Fedulov, result: 0 },
	{ name: Vladimir_Baskov, result: 1 },

	{ name: Sergey_Egorov, result: 0 },
	{ name: Maksim_Yacyk, result: 1 },

	{ name: Kim_Sabirov, result: 0 },
	{ name: Ivan_Vasilev, result: 1 },
];

export const localTournament = [
	{
		title: 'Турнир в Омске 2025',
		participant: OmskParticipant,
		participantTwo: OmskParticipant1,
		tour_one: OMSK25localTour_one,
		tour_two: OMSK25localTour_two,
		tour_three: OMSK25localTour_three,
		tour_four: OMSK25localTour_four,
		tour_five: OMSK25localTour_five,
		tour_six: OMSK25localTour_six,
	},
	{
		title: 'Турнир в Санкт-Петербурге 2025',
		participant: SPB25Participant,
		participantTwo: SPB25Participant1,
		tour_one: SPB25localTour_one,
		tour_two: SPB25localTour_two,
		tour_three: SPB25localTour_three,
		tour_four: SPB25localTour_four,
		tour_five: SPB25localTour_five,
		tour_six: SPB25localTour_six,
	},
];
