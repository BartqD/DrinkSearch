const input = document.querySelector('.search')
const drinks = document.querySelectorAll('li')

const drinkSearch = e => {
	const text = e.target.value.toLowerCase()

	drinks.forEach(drink => {
		const task = drink.textContent.toLowerCase()
		if (task.indexOf(text) !== -1) {
			drink.style.display = 'block'
		} else {
			drink.style.display = 'none'
		}
	})
}

input.addEventListener('keyup', drinkSearch)
