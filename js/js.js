document.addEventListener('DOMContentLoaded', function () {
	updateYearElements();
	colorScheme();
});


function updateYearElements() {
	const currentYear = new Date().getFullYear(); // Get the current year
	const yearElements = document.querySelectorAll('.js-year'); // Find all elements with the class 'js-year'

	yearElements.forEach(element => {
			const year = parseInt(element.textContent.trim(), 10); // Parse the text content of the element as a number
			if (!isNaN(year) && year !== currentYear) {
					element.textContent = currentYear; // Update the year if it differs from the current year
			}
	});
}

function colorScheme() {
	const checkbox = document.querySelector('.footer-them-check .toggle-checkbox');
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.body.classList.add('dark-mode');
		checkbox.checked = true;
	}
	checkbox.addEventListener('change', () => {
		document.body.classList.toggle('dark-mode', checkbox.checked);
	});
}
