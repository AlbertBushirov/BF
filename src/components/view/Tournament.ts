import { Component } from '../base/Component';
import { EventEmitter } from '../base/events';
import { ensureElement } from '../../utils/utils';

interface IRatingView {
	items: HTMLElement[];
}

export class Memo extends Component<IRatingView> {
	protected _virtual_shooting: HTMLElement;

	constructor(container: HTMLElement, events: EventEmitter) {
		super(container, new EventEmitter());
		this._virtual_shooting = ensureElement<HTMLElement>(
			'.virtual_shooting',
			container
		);
		this.events = events;
	}
}
