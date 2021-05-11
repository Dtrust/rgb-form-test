import intlTelInput from 'intl-tel-input';


export function phoneField(phoneFieldSelector) {
	const input = document.querySelector(phoneFieldSelector);

	const errorMsg = document.querySelector('.field-phone--error');
	const validMsg = document.querySelector('.field-phone--valid');

	const errorMap = ["Неверный формат номера", "Неправльный код оператора", "Слишком короткий номер", "Слишком длинный номер", "Неверный номер"]

	const init = intlTelInput(input, {
		separateDialCode: true,
		initialCountry: 'ua',
		utilsScript: 'js/utils.js',
	});

	input.addEventListener('keyup', () => input.value = input.value.replace(/[^\d]/g, ''));

	const reset = function() {
		input.classList.remove('phone--error', 'field--error');
		input.classList.add('field--filled');
		errorMsg.innerHTML = '';
		errorMsg.classList.add('visually-hidden');
		validMsg.classList.add('visually-hidden');
	};

	// on blur: validate
	input.addEventListener('blur', function() {
		reset();
		if (input.value.trim()) {
			if (init.isValidNumber()) {
				validMsg.classList.remove('visually-hidden');
			} else {
				input.classList.add('phone--error');
				input.classList.remove('field--filled');
				const errorCode = init.getValidationError();
				errorMsg.innerHTML = errorMap[errorCode];
				errorMsg.classList.remove('visually-hidden');
			}
		}
	});

// on keyup / change flag: reset
	input.addEventListener('change', reset);
	input.addEventListener('keyup', reset);
}
