import SlimSelect from 'slim-select';


export const customSelect = new SlimSelect({
	select: document.querySelector('#skills'),
	placeholder: 'Навыки',
	showSearch: false,
	closeOnSelect: false,
	options: [],
});

export const getMultiSelectValues = function() {
	const multiSelect = document.querySelector('#skills');

	let selected =[];

	for (let i = 0; i < multiSelect.options.length; i++) {
		if (multiSelect.options[i].selected) {
			selected.push(multiSelect.options[i].value);
		}
	}
	return selected.join(', ')
};
