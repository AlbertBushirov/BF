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

		localTournament.forEach((element) => {
			const result = this.tournamentRender(element);
		});
	}

	tournamentRender(tournament: ITournament) {
		const tournamentTemplate = document.querySelector(
			'#tournament-item'
		) as HTMLTemplateElement;
		const tournamentElement = tournamentTemplate.content;

		const container = tournamentElement.querySelector('.tournament__list');
		const cloneContainer = container.cloneNode(true) as HTMLElement;

		cloneContainer.querySelector('.tournament__name').textContent =
			tournament.title;

		const allNames = tournament.participant.map((el) => el.name.name).join();
		cloneContainer.querySelector('.tournament__player').textContent = allNames;

		return cloneContainer;
	}
}
