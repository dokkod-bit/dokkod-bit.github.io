const $selects = document.querySelectorAll('[data-select]')
const $selectsReal = document.querySelectorAll('[data-select-real]')

$selects.forEach(($select, i) => {
	const $selectReal = $selectsReal[i]

	$select.addEventListener('click', function () {
		const title = event.target.getAttribute('data-select-item')

		if (title) {
			event.target
				.closest('[data-select]')
				.querySelector('[data-select-title]')
				.textContent = title

			$selectReal.value = title.toLowerCase()
		}

		this.querySelector('.header-select__dropdown')
			.classList.toggle('hidden')
	})
})