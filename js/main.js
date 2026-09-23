import { findSolution } from './solution.js'

const form = document.getElementById('form')
const resultArea = document.getElementById('result-area')
const resultElement = document.getElementById('result')

form.addEventListener('submit', e => {
	e.preventDefault()

	const a = parseFloat(document.getElementById('a-input').value)
	const b = parseFloat(document.getElementById('b-input').value)
	const c = parseFloat(document.getElementById('c-input').value)

	if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
		resultElement.textContent = findSolution(a, b, c)
		resultArea.hidden = false
	} else {
		resultElement.textContent = ''
		resultArea.hidden = true
	}
})
