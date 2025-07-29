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

		localParticipant.forEach((element) => {
			const result = this.participantRender(element);
			this.tournamentListOne.append(result);
		});
	}

	participantRender(tournament: IGames) {
		const tournamentTemplate = document.querySelector(
			'#tournament-item'
		) as HTMLTemplateElement;
		const tournamentElement = tournamentTemplate.content;

		const container = tournamentElement.querySelector('.tournament__list');
		const cloneContainer = container.cloneNode(true) as HTMLElement;

		cloneContainer.querySelector('.tournament__player').textContent =
			tournament.name.name;
		cloneContainer.querySelector('.tournament__results').textContent =
			tournament.result;

		return cloneContainer;
	}
}
