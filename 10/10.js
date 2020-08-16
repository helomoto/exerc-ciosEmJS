let btn = document.querySelector("#btn-soma")

btn.addEventListener("click", () => {
    let n1 = document.querySelector("#soma1").value 
    let n2 = document.querySelector("#soma2").value 
    let resultado = document.querySelector("#resultado-soma")
    resultado.value = ""

    resultado.value += parseFloat(n1) + parseFloat(n2)
})

let clean = document.querySelector("#clean")

clean.addEventListener("click", () => {
    let resultado = document.querySelector("#resultado-soma")
    resultado.value = ""
})