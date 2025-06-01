import { Component } from '../base/Component';
import { EventEmitter } from '../base/events';
import { ensureElement } from '../../utils/utils';

interface IRatingView {
	items: HTMLElement;
}

export class Settings extends Component<IRatingView> {
	public _inputArtefact: HTMLInputElement;
	public _inputNet: HTMLInputElement;
	//public _inputnet: HTMLInputElement;
	constructor(container: HTMLElement, events: EventEmitter) {
		super(container, new EventEmitter());
		this._inputArtefact = container.querySelector(
			'.save_armlist'
		) as HTMLInputElement;
		this._inputNet = container.querySelector(
			'.net_armlist'
		) as HTMLInputElement;

		this.events = events;

		const savedValue = localStorage.getItem('artefactSaveEnabled');
		if (savedValue === 'true') {
			this._inputArtefact.checked = true;
			this.events.emit('artefact:save');
		} else {
			this._inputArtefact.checked = false;
			this.events.emit('artefact:cancel');
		}

		this._inputArtefact.addEventListener('change', () => {
			if (this._inputArtefact.checked) {
				localStorage.setItem('artefactSaveEnabled', 'true');
				this.events.emit('artefact:save');
			} else {
				localStorage.setItem('artefactSaveEnabled', 'false');
				this.events.emit('artefact:cancel');
			}
		});

		const netValue = localStorage.getItem('netSaveEnabled');
		if (netValue === 'true') {
			this._inputNet.checked = true;
			this.events.emit('net:save');
		} else {
			this._inputNet.checked = false;
			this.events.emit('net:cancel');
		}

		this._inputNet.addEventListener('change', () => {
			if (this._inputNet.checked) {
				localStorage.setItem('netSaveEnabled', 'true');
				this.events.emit('net:save');
			} else {
				localStorage.setItem('netSaveEnabled', 'false');
				this.events.emit('net:cancel');
			}
		});
	}
}
