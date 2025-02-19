import { Component } from '../base/Component';
import { IPlayersForm } from '../../types';
import { EventEmitter } from '../base/events';
import { ensureElement } from '../../utils/utils';
import { localPlayers, Cup } from '../../types/playersData';

interface IRatingView {
	items: HTMLElement[];
}

export class Rating extends Component<IRatingView> {
	public _player: HTMLElement;
	constructor(container: HTMLElement, events: EventEmitter) {
		super(container, new EventEmitter());
		this._player = ensureElement<HTMLElement>('.rating__list', container);
		this.events = events;
		this.renderPlayers(localPlayers);
	}
	private renderPlayers(players: IPlayersForm[]) {
		// Очищаем текущий список
		this._player.innerHTML = '';

		players.sort((a, b) => {
			if (b.win !== a.win) {
				return b.win - a.win;
			}

			return b.games - a.games;
		});

		players.forEach((player, index) => {
			const template = document.getElementById(
				'rating-item'
			) as HTMLTemplateElement;
			const clone = template.content.cloneNode(true) as HTMLElement;

			const indexElement = clone.querySelector(
				'.rating__item-index'
			) as HTMLElement;
			const imageElement = clone.querySelector(
				'.rating__image'
			) as HTMLImageElement;
			const nameElement = clone.querySelector('.rating__name') as HTMLElement;
			const gamesElement = clone.querySelector('.rating__games') as HTMLElement;
			const winElement = clone.querySelector('.rating__win') as HTMLElement;
			const achievements = clone.querySelector(
				'.rating__achievements'
			) as HTMLElement;

			// Устанавливаем данные игрока
			indexElement.textContent = (index + 1).toString();
			imageElement.src = player.image;
			imageElement.alt = player.player;
			nameElement.textContent = player.player;
			gamesElement.textContent = player.games.toString();
			winElement.textContent = `${player.win}%`;
			if (player.achievements && player.achievements.length > 0) {
				player.achievements.forEach((achievement: Cup) => {
					const achievementImage = document.createElement('img');
					achievementImage.className = 'rating__achievements_image';
					achievementImage.src = achievement.image;
					achievementImage.alt = achievement.title;

					const achievementTitle = document.createElement('span');
					achievementTitle.className = 'rating__achievements_title';
					achievementTitle.textContent = achievement.title;

					const achievementDiv = document.createElement('div');
					achievementDiv.className = 'rating__achievements';
					achievementDiv.appendChild(achievementImage);
					achievementDiv.appendChild(achievementTitle);

					achievements.appendChild(achievementDiv);
				});
			}

			// Добавляем элемент в список
			this._player.appendChild(clone);
		});
	}
}
