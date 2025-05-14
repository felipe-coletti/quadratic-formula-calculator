export const findSolution = (a, b, c) => {
	const discriminant = b ** 2 - 4 * a * c

	let result = `A equação ${a}x² ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}`

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
