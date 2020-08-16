let name = document.querySelector("#name")
let btn = document.querySelector("#btn")


btn.addEventListener("click", () => {
    let qtd = name.value.length
    alert(`O nome tem ${qtd} letras`)
})