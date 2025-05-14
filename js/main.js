import { findSolution } from './solution.js'

const form = document.getElementById('form')

form.addEventListener('submit', e => {
	e.preventDefault()

	const a = parseFloat(document.getElementById('a-input').value)
	const b = parseFloat(document.getElementById('b-input').value)
	const c = parseFloat(document.getElementById('c-input').value)

	const resultElement = document.getElementById('result')
	const resultArea = document.getElementById('result-area')

	if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
		resultElement.innerHTML = findSolution(a, b, c)
		resultArea.style.display = 'flex'
	} else {
		resultElement.innerHTML = ''
		resultArea.style.display = 'none'
	}
})
