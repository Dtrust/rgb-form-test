import {loader} from '../modules/loader';
import {modalControl} from '../modules/modal';


export function fetchData(data) {

	fetch("https://getform.io/f/7cf243b9-60b0-4eb9-b2ad-633495f5759f",
		{
			method: "POST",
			body: data,
		})
	.then(response => {
		console.log(response);
		loader.hide()
		modalControl()
	})
	.catch(error => console.log(error))
}
