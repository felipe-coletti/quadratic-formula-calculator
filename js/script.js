const form = document.getElementById('form')

const findSolution = (a, b, c) => {
    const discriminant = b ** 2 - 4 * a * c

    result = `A equação ${a}x² ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}`

    if (discriminant > 0) {
        const x1 = (-b + discriminant ** (1 / 2)) / (2 * a)
        const x2 = (-b - discriminant ** (1 / 2)) / (2 * a)

        return result + ` tem duas soluções: x1 = ${x1} e x2 = ${x2}`
    } else if (discriminant === 0) {
        const x = -b / (2 * a)

        return result + ` só tem uma solução: x = ${x}`
    } else {
        return result + ' não apresenta raízes reais.'
    }
}

form.addEventListener('submit', (e) => {
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
