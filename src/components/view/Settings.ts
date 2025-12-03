import { Component } from '../base/Component';
import { EventEmitter } from '../base/events';
import { ensureElement } from '../../utils/utils';

interface IRatingView {
	items: HTMLElement;
}

export class Settings extends Component<IRatingView> {
	public _inputArtefact: HTMLInputElement;
	public _inputNet: HTMLInputElement;
	public _inputLight: HTMLInputElement;
	public _favorites: HTMLInputElement;
	public _KBF: HTMLInputElement;
	public _AOBF: HTMLInputElement;
	//public _inputnet: HTMLInputElement;
	constructor(container: HTMLElement, events: EventEmitter) {
		super(container, new EventEmitter());
		this._inputArtefact = container.querySelector(
			'.save_armlist'
		) as HTMLInputElement;
		this._inputNet = container.querySelector(
			'.net_armlist'
		) as HTMLInputElement;

		this._inputLight = container.querySelector(
			'.light_theme'
		) as HTMLInputElement;

		this._favorites = container.querySelector(
			'.favorites_armlist'
		) as HTMLInputElement;

		this._KBF = container.querySelector('.KBF_armlist') as HTMLInputElement;
		this._AOBF = container.querySelector('.AOBF_armlist') as HTMLInputElement;

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

		const favoritesValue = localStorage.getItem('favoritesSaveEnabled');
		if (favoritesValue !== 'false') {
			this._favorites.checked = true;
			this.events.emit('favorites_on');
		} else {
			this._favorites.checked = false;
			this.events.emit('favorites_off');
		}

		const kbfValue = localStorage.getItem('KBFSaveEnabled');
		if (kbfValue === 'true') {
			this._KBF.checked = true;
			this.events.emit('KBF_on');
		} else {
			this._KBF.checked = false;
			this.events.emit('KBF_off');
		}

		const aobfValue = localStorage.getItem('AOBFSaveEnabled');
		if (aobfValue === 'true') {
			this._AOBF.checked = true;
			this.events.emit('AOBF_on');
		} else {
			this._AOBF.checked = false;
			this.events.emit('AOBF_off');
		}

		this._favorites.addEventListener('change', () => {
			if (this._favorites.checked) {
				this._KBF.checked = false;
				this._AOBF.checked = false;
				localStorage.setItem('KBFSaveEnabled', 'false');
				this.events.emit('KBF_off');

				this.events.emit('favorites_on');
			} else {
				this.events.emit('favorites_off');
			}
		});

		this._KBF.addEventListener('change', () => {
			if (this._KBF.checked) {
				this._favorites.checked = false;
				localStorage.setItem('favoritesSaveEnabled', 'false');
				this.events.emit('favorites_off');
				localStorage.setItem('KBFSaveEnabled', 'true');
				this.events.emit('KBF_on');
			} else {
				localStorage.setItem('KBFSaveEnabled', 'false');
				this.events.emit('KBF_off');
			}
		});

		this._AOBF.addEventListener('change', () => {
			if (this._AOBF.checked) {
				this._favorites.checked = false;
				localStorage.setItem('favoritesSaveEnabled', 'false');
				this.events.emit('favorites_off');
				localStorage.setItem('AOBFSaveEnabled', 'true');
				this.events.emit('AOBF_on');
			} else {
				localStorage.setItem('AOBFSaveEnabled', 'false');
				this.events.emit('AOBF_off');
			}
		});
	}
}
