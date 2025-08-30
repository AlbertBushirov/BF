import { Component } from '../base/Component';
import { EventEmitter } from '../base/events';
import { ensureElement } from '../../utils/utils';
import { ITournament, localTournament } from '../../types/tournamentData';

interface ITournamentView {
	items: HTMLElement[];
}

export class Tournament extends Component<ITournamentView> {
	protected tournament: HTMLElement;
	protected tournamentListOne: HTMLElement;

	constructor(container: HTMLElement, events: EventEmitter) {
		super(container, new EventEmitter());
		this.tournament = container.querySelector('.tournament');

		this.events = events;

		localTournament.forEach((el) => {
			const result = this.tournamentRender(el);
			this.tournament.append(result);
		});
	}

	hoverElement(element: HTMLElement) {
		const players = document.querySelector(
			'.tournament__player'
		) as HTMLElement;

		element.addEventListener('click', () => {
			if (element.textContent === players.textContent) {
				element.style.backgroundColor = 'orange';
				players.style.backgroundColor = 'orange';
			}
		});
	}

	tournamentRender(tournament: ITournament) {
		const template = document.querySelector(
			'#tournament-item'
		) as HTMLTemplateElement;
		const tournamentTemplate = template.content;
		const tournamentElement = tournamentTemplate
			.querySelector('.tournament-item')
			.cloneNode(true) as HTMLElement;
		tournamentElement.querySelector('.tournament__name').textContent =
			tournament.title;

		//Список участников первого дня
		const dayOne = tournamentElement.querySelector('#day_one');
		const tournamentList = dayOne.querySelector('.tournament__list');

		const itemTemplate = tournamentList.querySelector('.tournament__item');
		tournamentList.innerHTML = '';

		tournament.participant.forEach((player) => {
			const listElement = itemTemplate.cloneNode(true) as HTMLElement;

			listElement.querySelector('.tournament__player').textContent =
				player.name.name;
			listElement.querySelector('.tournament__result').textContent =
				player.result;

			tournamentList.append(listElement);
		});

		//Список участников второго дня
		const dayTwo = tournamentElement.querySelector('#day_two');
		const tournamentListTwo = dayTwo.querySelector('.tournament__list');

		const itemTemplateTwo =
			tournamentListTwo.querySelector('.tournament__item');
		tournamentListTwo.innerHTML = '';

		tournament.participantTwo.forEach((player) => {
			const listElement = itemTemplateTwo.cloneNode(true) as HTMLElement;

			listElement.querySelector('.tournament__player').textContent =
				player.name.name;
			listElement.querySelector('.tournament__result').textContent =
				player.result;

			tournamentListTwo.append(listElement);
		});

		//Первый тур
		const tournamentTour = dayOne.querySelector('#game_one');
		const gameOne = tournamentTour.querySelector('.tournament__game');

		const tournamentConteiner = gameOne.querySelector('.tournament_conteiner');
		gameOne.innerHTML = '';

		tournament.tour_one.forEach((player) => {
			const tourElement = tournamentConteiner.cloneNode(true) as HTMLElement;

			tourElement.querySelector('.tournament__player').textContent =
				player.name.name;
			tourElement.querySelector(
				'.tournament__result'
			).textContent = `${player.result}`;

			const resultsElement = tourElement.querySelector(
				'.tournament__result'
			) as HTMLElement;
			if (player.result === 1) {
				resultsElement.style.backgroundColor = 'purple';
			}

			gameOne.append(tourElement);
		});

		//Второй тур
		const tournamentTourTwo = dayOne.querySelector('#game_two');
		const gameTwo = tournamentTourTwo.querySelector('.tournament__game');

		const tournamentConteinerTwo = gameTwo.querySelector(
			'.tournament_conteiner'
		);
		gameTwo.innerHTML = '';

		tournament.tour_two.forEach((player) => {
			const tourElement = tournamentConteinerTwo.cloneNode(true) as HTMLElement;

			tourElement.querySelector('.tournament__player').textContent =
				player.name.name;
			tourElement.querySelector(
				'.tournament__result'
			).textContent = `${player.result}`;

			const resultsElement = tourElement.querySelector(
				'.tournament__result'
			) as HTMLElement;
			if (player.result === 1) {
				resultsElement.style.backgroundColor = 'purple';
			}

			gameTwo.append(tourElement);
		});

		//Третий тур
		const tournamentTourThree = dayOne.querySelector('#game_three');
		const gameThree = tournamentTourThree.querySelector('.tournament__game');

		const tournamentConteinerThree = gameThree.querySelector(
			'.tournament_conteiner'
		);
		gameThree.innerHTML = '';

		tournament.tour_three.forEach((player) => {
			const tourElement = tournamentConteinerThree.cloneNode(
				true
			) as HTMLElement;

			tourElement.querySelector('.tournament__player').textContent =
				player.name.name;
			tourElement.querySelector(
				'.tournament__result'
			).textContent = `${player.result}`;

			const resultsElement = tourElement.querySelector(
				'.tournament__result'
			) as HTMLElement;
			if (player.result === 1) {
				resultsElement.style.backgroundColor = 'purple';
			}

			gameThree.append(tourElement);
		});

		//Четвертый тур
		const tournamentTourFour = dayTwo.querySelector('#game_four');
		const gameFour = tournamentTourFour.querySelector('.tournament__game');

		const tournamentConteinerFour = gameFour.querySelector(
			'.tournament_conteiner'
		);
		gameFour.innerHTML = '';

		tournament.tour_four.forEach((player) => {
			const tourElement = tournamentConteinerThree.cloneNode(
				true
			) as HTMLElement;

			tourElement.querySelector('.tournament__player').textContent =
				player.name.name;
			tourElement.querySelector(
				'.tournament__result'
			).textContent = `${player.result}`;

			const resultsElement = tourElement.querySelector(
				'.tournament__result'
			) as HTMLElement;
			if (player.result === 1) {
				resultsElement.style.backgroundColor = 'purple';
			}

			gameFour.append(tourElement);
		});

		//Пятый тур
		const tournamentTourFive = dayTwo.querySelector('#game_five');
		const gameFive = tournamentTourFive.querySelector('.tournament__game');

		const tournamentConteinerFive = gameFive.querySelector(
			'.tournament_conteiner'
		);
		gameFive.innerHTML = '';

		tournament.tour_five.forEach((player) => {
			const tourElement = tournamentConteinerFive.cloneNode(
				true
			) as HTMLElement;

			tourElement.querySelector('.tournament__player').textContent =
				player.name.name;
			tourElement.querySelector(
				'.tournament__result'
			).textContent = `${player.result}`;

			const resultsElement = tourElement.querySelector(
				'.tournament__result'
			) as HTMLElement;
			if (player.result === 1) {
				resultsElement.style.backgroundColor = 'purple';
			}

			gameFive.append(tourElement);
		});

		//Шестой тур
		const tournamentTourSix = dayTwo.querySelector('#game_six');
		const gameSix = tournamentTourSix.querySelector('.tournament__game');

		const tournamentConteinerSix = gameSix.querySelector(
			'.tournament_conteiner'
		);
		gameSix.innerHTML = '';

		tournament.tour_six.forEach((player) => {
			const tourElement = tournamentConteinerSix.cloneNode(true) as HTMLElement;

			tourElement.querySelector('.tournament__player').textContent =
				player.name.name;
			tourElement.querySelector(
				'.tournament__result'
			).textContent = `${player.result}`;

			const resultsElement = tourElement.querySelector(
				'.tournament__result'
			) as HTMLElement;
			if (player.result === 1) {
				resultsElement.style.backgroundColor = 'purple';
			}

			gameSix.append(tourElement);
		});

		return tournamentElement;
	}
}
