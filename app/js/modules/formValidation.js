import {submitForm} from './submitForm';


export function formValidation(formBlock) {

	const form = document.getElementById(formBlock);
	const submitBtn = form.querySelector('.form-btn');
	const fieldWrappers = form.querySelectorAll('.form-item');


	function removeClassFromSlimSelect() {
		// This function was deleted inherit class from technical div
		// Toggle error class for technical div
		const slimSelectBlock = document.querySelector('.ss-main');

		if (slimSelectBlock.classList.contains('validate')) {
			slimSelectBlock.classList.remove('validate');
		}

		const ssValueField = slimSelectBlock.querySelector('.ss-values');
		const selectFieldMsg = slimSelectBlock.parentNode.lastChild;

		if (ssValueField.childNodes.length <= 1) {
			slimSelectBlock.classList.add('field--error');
			selectFieldMsg.style.display = 'block';
		} else {
			slimSelectBlock.classList.remove('field--error');
			selectFieldMsg.style.display = 'none';
		}
	};

	function setValidityOptions(element) {

		removeClassFromSlimSelect();

		if (!element.checkValidity()) {
			element.classList.add('field--error');
			element.classList.remove('field--filled', 'field--edit')
		} else {
			element.classList.remove('field--error');
			element.classList.add('field--filled', 'field--edit');
		}
	};

	function checkFocusField(field) {

		field.addEventListener('focus', () => {
			field.addEventListener('change', () => {
				setValidityOptions(field)
			})
		})

		field.addEventListener('blur', () => {
			setValidityOptions(field)
		})
	};

	function formSubmit() {

		removeClassFromSlimSelect();

		const fieldsArray = Array.from(form.querySelectorAll('.validate'));

		if (fieldsArray.every(element => element.checkValidity() === true)) {

			submitForm()

		} else {
			fieldWrappers.forEach(wrapper => {
				const field = wrapper.querySelector('.validate');

				setValidityOptions(field);
			})
		}
	};
	// Bad Practice
	fieldWrappers.forEach(wrapper => {
		const field = wrapper.querySelector('.validate');

		checkFocusField(field);
	});

	submitBtn.addEventListener('click', formSubmit);
}

