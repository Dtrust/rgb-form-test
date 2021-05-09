export const loader = {
	loader: document.querySelector('.loader'),

	show() {
		if (this.loader.classList.contains('visually-hidden')) {
			this.loader.classList.remove('visually-hidden');
		}
	},
	hide() {
		if (!this.loader.classList.contains('visually-hidden')) {
			this.loader.classList.add('visually-hidden');
		}
	}
}
