export function textAreaAutoResize(textAreaData) {

	const textArea = document.querySelector(textAreaData);
	const offset = textArea.offsetHeight - textArea.clientHeight;

	textArea.addEventListener('input', function (event) {
		event.target.style.height = 'auto';
		event.target.style.height = event.target.scrollHeight + offset + 'px';
	});

	textArea.removeAttribute('data-autoresize');
}
