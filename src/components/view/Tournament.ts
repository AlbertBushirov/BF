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
	public _day: HTMLElement;
	public _day_two: HTMLElement;
	public _games: HTMLElement;

	constructor(container: HTMLElement, events: EventEmitter) {
		super(container, new EventEmitter());
		this._day = ensureElement<HTMLElement>('#day_one', container);
		this._day_two = ensureElement<HTMLElement>('#day_two', container);

		this.events = events;
	}
}
