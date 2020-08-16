const btn = document.querySelector("#btn-soma")

function sum(n1, n2) {
    let sum;
    sum = parseFloat(n1) + parseFloat(n2)
    return sum
}

btn.addEventListener("click", () => {
    let n1 = document.querySelector("#soma1").value
    let n2 = document.querySelector("#soma2").value
    let resultado = document.querySelector("#resultado-soma")

    resultado.value = ""
    resultado.value = sum(n1, n2)

})