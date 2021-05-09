import {getMultiSelectValues} from './customSelect';
import {fetchData} from '../services/fetchData';
import {loader} from './loader';


export function submitForm() {
	const form = document.getElementById("form");
	form.addEventListener("submit", formSubmit);

	function formSubmit(e) {
		e.preventDefault()

		const formData = new FormData();
		formData.append(
			'name',
			document.querySelector('input[name="user-name"]').value
		)
		formData.append(
			'surname',
			document.querySelector('input[name="user-surname"]').value
		)
		formData.append(
			'email',
			document.querySelector('input[name="user-email"]').value
		)
		formData.append(
			'phone',
			document.querySelector('input[name="user-phone"]').value
		)
		formData.append(
			'city',
			document.querySelector('input[name="user-city"]').value
		)
		formData.append(
			'skills',
			getMultiSelectValues()
		)
		formData.append(
			'about',
			document.querySelector('textarea[name="user-about"]').value
		)

		fetchData(formData);
		loader.show()
	}
}
