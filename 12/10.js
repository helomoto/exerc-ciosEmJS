// Seleciona o botão da soma
let btn = document.querySelector("#btn-soma")

btn.addEventListener("click", () => {
    // Pega o valor dos inputs da soma
    let n1 = document.querySelector("#soma1").value 
    let n2 = document.querySelector("#soma2").value 
    // Pega o input onde vai ser colocado o resultado
    let resultado = document.querySelector("#resultado-soma")
    // Limpa o campo antes da soma
    resultado.value = ""
    // Efetua a soma e coloca no campo resultado
    resultado.value += parseFloat(n1) + parseFloat(n2)
})

// Limpar o campo resultado quando quiser

let clean = document.querySelector("#clean")

clean.addEventListener("click", () => {
    let resultado = document.querySelector("#resultado-soma")
    resultado.value = ""
})