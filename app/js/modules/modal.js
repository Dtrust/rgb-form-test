import {resetForm} from './formValidation';

const modalObject = {
	overlay: document.querySelector('.overlay'),
	modalBlock: document.querySelector('.modal'),

	show() {
		document.body.classList.add('noscroll');

		this.overlay.classList.add('show');
		this.modalBlock.classList.add('show');
		this.modalBlock.classList.add('modal-animation');
		setTimeout(() => {
			this.modalBlock.classList.remove('modal-animation');
		}, 600);
	},
	hide() {

		if (this.overlay.classList.contains('show') && this.modalBlock.classList.contains('show')) {
			this.overlay.classList.remove('show');
			this.modalBlock.classList.remove('show');
			document.body.classList.remove('noscroll');
		}

		resetForm();
	},
};


export function modalControl() {

	modalObject.show()

	const modalBtn = document.querySelector('.modal-btn')

	document.onkeydown = function(e) {
		e = e || window.event;
		if (e.keyCode == 27) {
			modalObject.hide();
		}
	};

	document.addEventListener('click', function(e) {
		const target = e.target;
		const itsMenu = target == modalObject.modalBlock || modalObject.modalBlock.contains(target);
		const itsBtnMenu = target == modalBtn;
		const menuIsActive = modalObject.modalBlock.classList.contains('show');

		if (!itsMenu && !itsBtnMenu && menuIsActive) {
			modalObject.hide();
		}
	});

	modalBtn.addEventListener('click', () => {
		modalObject.hide()
	});
}
