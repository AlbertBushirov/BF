import { Component } from '../base/Component';
import { EventEmitter } from '../base/events';
import { ensureElement } from '../../utils/utils';
import {
	localParticipant,
	ITournament,
	IGames,
	localTournament,
} from '../../types/tournamentData';

interface ITournamentView {
	items: HTMLElement[];
}

export class Tournament extends Component<ITournamentView> {
	protected tournamentName: HTMLElement;
	protected tournamentListOne: HTMLElement;
	public _day: HTMLElement;
	public _day_two: HTMLElement;
	public _games: HTMLElement;

	constructor(container: HTMLElement, events: EventEmitter) {
		super(container, new EventEmitter());
		this._day = ensureElement<HTMLElement>('#day_one', container);
		this._day_two = ensureElement<HTMLElement>('#day_two', container);
		this.tournamentName = container.querySelector('.tournament__name');
		this.tournamentListOne = container.querySelector('.tournament__list_one');
		console.log(this.tournamentName);
		this.events = events;

		for (let i = 0; i < localTournament.length; i += 1) {
			const tournament = localTournament[i];
			this.renderTournament(tournament);
		}
	}

	private renderTournament(tournament: ITournament) {
		// Создаем контейнер для турнира
		const tournamentContainer = document.createElement('div');
		tournamentContainer.className = 'tournament';

		// Отрисовка заголовка турнира
		const titleTemplate = document.getElementById(
			'tournament-item'
		) as HTMLTemplateElement;
		const titleClone = titleTemplate.content.cloneNode(true) as HTMLElement;

		const titleElement = titleClone.querySelector(
			'.tournament__name'
		) as HTMLElement;
		titleElement.textContent = tournament.title;
		tournamentContainer.appendChild(titleElement);

		// Получаем основной заголовок турнира
		const mainTitleElement = this._day.parentElement.querySelector(
			'.tournament__name'
		) as HTMLElement;
		mainTitleElement.textContent = tournament.title;

		// Отрисовка участников
		const participantListOne = document.createElement('ul');
		participantListOne.className = 'tournament__list_one';
		tournament.participant.forEach((player) => {
			const tournamentList = this._day.querySelector(
				'.tournament__list_one'
			) as HTMLElement;
			const playerElement = document.createElement('li');
			playerElement.className = 'tournament__player';
			playerElement.textContent = player.name.name;

			const resultsElement = document.createElement('li');
			resultsElement.className = 'tournament__results';
			resultsElement.textContent = player.result;

			tournamentList.appendChild(playerElement);
			tournamentList.appendChild(resultsElement);
		});
		tournamentContainer.appendChild(participantListOne);

		tournament.participant1.forEach((player) => {
			const tournamentList = this._day_two.querySelector(
				'.tournament__list_two'
			) as HTMLElement;
			const playerElement = document.createElement('li');
			playerElement.className = 'tournament__player';
			playerElement.textContent = player.name.name;

			const resultsElement = document.createElement('li');
			resultsElement.className = 'tournament__results';
			resultsElement.textContent = player.result;

			tournamentList.appendChild(playerElement);
			tournamentList.appendChild(resultsElement);
		});

		//Отрисовка первого тура
		tournament.tour_one.forEach((player) => {
			const gameTemplate = document.getElementById(
				'tournament-game'
			) as HTMLTemplateElement;
			const gameClone = gameTemplate.content.cloneNode(true) as HTMLElement;

			// Получаем элементы из клона
			const playerElement = gameClone.querySelector(
				'.tournament__player'
			) as HTMLElement;
			const resultsElement = gameClone.querySelector(
				'.tournament__result'
			) as HTMLElement;

			// Устанавливаем текст для игрока и результата
			playerElement.textContent = player.name.name;
			resultsElement.textContent = `${player.result}`;

			if (player.result === 1) {
				resultsElement.style.backgroundColor = 'purple';
			}

			// Находим контейнер для добавления
			const tournamentList = this._day.querySelector(
				'#game_one'
			) as HTMLElement;

			// Добавляем весь элемент <li class="tournament_conteiner"> в контейнер
			tournamentList.appendChild(gameClone);
		});

		//Отрисовка второго тура
		tournament.tour_two.forEach((player) => {
			const gameTemplate = document.getElementById(
				'tournament-game'
			) as HTMLTemplateElement;
			const gameClone = gameTemplate.content.cloneNode(true) as HTMLElement;

			// Получаем элементы из клона
			const playerElement = gameClone.querySelector(
				'.tournament__player'
			) as HTMLElement;
			const resultsElement = gameClone.querySelector(
				'.tournament__result'
			) as HTMLElement;

			playerElement.textContent = player.name.name;
			resultsElement.textContent = `${player.result}`;

			if (player.result === 1) {
				resultsElement.style.backgroundColor = 'purple';
			}

			const tournamentList = this._day.querySelector(
				'#game_two'
			) as HTMLElement;

			tournamentList.appendChild(gameClone);
		});

		tournament.tour_thee.forEach((player) => {
			const gameTemplate = document.getElementById(
				'tournament-game'
			) as HTMLTemplateElement;
			const gameClone = gameTemplate.content.cloneNode(true) as HTMLElement;

			const playerElement = gameClone.querySelector(
				'.tournament__player'
			) as HTMLElement;
			const resultsElement = gameClone.querySelector(
				'.tournament__result'
			) as HTMLElement;

			playerElement.textContent = player.name.name;
			resultsElement.textContent = `${player.result}`;

			if (player.result === 1) {
				resultsElement.style.backgroundColor = 'purple';
			}

			const tournamentList = this._day.querySelector(
				'#game_three'
			) as HTMLElement;

			tournamentList.appendChild(gameClone);
		});

		tournament.tour_four.forEach((player) => {
			const gameTemplate = document.getElementById(
				'tournament-game'
			) as HTMLTemplateElement;
			const gameClone = gameTemplate.content.cloneNode(true) as HTMLElement;

			const playerElement = gameClone.querySelector(
				'.tournament__player'
			) as HTMLElement;
			const resultsElement = gameClone.querySelector(
				'.tournament__result'
			) as HTMLElement;

			playerElement.textContent = player.name.name;
			resultsElement.textContent = `${player.result}`;

			if (player.result === 1) {
				resultsElement.style.backgroundColor = 'purple';
			}

			const tournamentList = this._day_two.querySelector(
				'#game_four'
			) as HTMLElement;

			tournamentList.appendChild(gameClone);
		});

		tournament.tour_five.forEach((player) => {
			const gameTemplate = document.getElementById(
				'tournament-game'
			) as HTMLTemplateElement;
			const gameClone = gameTemplate.content.cloneNode(true) as HTMLElement;

			const playerElement = gameClone.querySelector(
				'.tournament__player'
			) as HTMLElement;
			const resultsElement = gameClone.querySelector(
				'.tournament__result'
			) as HTMLElement;

			playerElement.textContent = player.name.name;
			resultsElement.textContent = `${player.result}`;

			if (player.result === 1) {
				resultsElement.style.backgroundColor = 'purple';
			}

			const tournamentList = this._day_two.querySelector(
				'#game_five'
			) as HTMLElement;

			tournamentList.appendChild(gameClone);
		});

		tournament.tour_six.forEach((player) => {
			const gameTemplate = document.getElementById(
				'tournament-game'
			) as HTMLTemplateElement;
			const gameClone = gameTemplate.content.cloneNode(true) as HTMLElement;

			const playerElement = gameClone.querySelector(
				'.tournament__player'
			) as HTMLElement;
			const resultsElement = gameClone.querySelector(
				'.tournament__result'
			) as HTMLElement;

			playerElement.textContent = player.name.name;
			resultsElement.textContent = `${player.result}`;

			if (player.result === 1) {
				resultsElement.style.backgroundColor = 'purple';
			}

			const tournamentList = this._day_two.querySelector(
				'#game_six'
			) as HTMLElement;

			tournamentList.appendChild(gameClone);
		});
	}
}
