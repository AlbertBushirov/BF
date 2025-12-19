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
	public _achievements: HTMLElement;
	constructor(container: HTMLElement, events: EventEmitter) {
		super(container, new EventEmitter());
		this._player = ensureElement<HTMLElement>('.rating__list', container);

		this.events = events;
		this.renderPlayers(localPlayers);
	}
	private renderPlayers(players: IPlayersForm[]) {
		players.forEach((player) => {
			player.winrating =
				player.games !== 0 ? Math.round((player.win / player.games) * 100) : 0;
		});
		// Очищаем текущий список
		this._player.innerHTML = '';

		players.sort((a, b) => {
			//Сравниваем суммы процента побед и побед
			const scoreA = a.winrating + a.win;
			const scoreB = b.winrating + b.win;

			if (scoreB !== scoreA) {
				return scoreB - scoreA;
			}

			// Сравниваем количество игр
			if (b.games !== a.games) {
				return b.games - a.games;
			}

			// Если количество побед и игр одинаковое, сравниваем количество достижений
			const achievementsA = a.achievements ? a.achievements.length : 0;
			const achievementsB = b.achievements ? b.achievements.length : 0;

			return achievementsB - achievementsA; // Сравниваем по количеству достижений
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
			gamesElement.textContent =
				player.win.toString() + ' / ' + player.games.toString();
			winElement.textContent =
				player.games !== 0
					? `${Math.round((player.win / player.games) * 100)}%`
					: '0%';
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
					achievementDiv.className = 'rating__achievement';
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
