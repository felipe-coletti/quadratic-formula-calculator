const findSolution = () => {
    discriminant = b**2 - 4 * a * c

    result = `A equação ${a}x² ${b >= 0 ? "+ " + b : b.toString().replace("-", "- ")}x ${c >= 0 ? "+ " + c : c.toString().replace("-", "- ")}`
    
    if (discriminant > 0) {
        x1 = (-b + (discriminant**(1/2))) / (2 * a)
        x2 = (-b - (discriminant**(1/2))) / (2 * a)

        return result + ` tem duas soluções: x1 = ${x1} e x2 = ${x2}`
    } else if (discriminant == 0) {
        x = -b / (2 * a)

        return result + ` só tem uma solução: x = ${x}`
    } else {
        return result + " não apresenta raízes reais."
    }
}

const getSolution = () => {
    a = document.getElementById("a-input").value
    b = document.getElementById("b-input").value
    c = document.getElementById("c-input").value


    if (a != '' && b != '' && c != ''){
        document.getElementById("result").innerHTML = findSolution()
        document.getElementById("result-area").style.display = "flex"
    } else {
        document.getElementById("result-area").style.display = "none"
    }
}
