import {customSelect} from './modules/customSelect';
import {textAreaAutoResize} from './modules/textAreaAutoResize';
import {phoneField} from './modules/phoneField';
import {formValidation} from './modules/formValidation';
import {outputConsoleName} from './modules/outputConsoleName';


window.addEventListener('DOMContentLoaded', () => {

	customSelect.render();

	textAreaAutoResize('[data-autoresize]');

	phoneField('#phone');

	formValidation('form');

	outputConsoleName('%c D %c E %c N %c N %c I %c S ');

});
