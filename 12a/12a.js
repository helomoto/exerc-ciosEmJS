let btnGreen = document.querySelector("#btn-green")
let btnRed = document.querySelector("#btn-red")

btnGreen.addEventListener("click", () => {
    document.querySelector("#quadrado")
    .style = "background-color: rgb(11, 236, 60);"
})

btnRed.addEventListener("click", () => {
    let quad = document.querySelector("#quadrado")
    quad.style = "background-color: rgb(250, 25, 25)"
})