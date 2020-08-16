
let btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    let name = document.querySelector("#name").value
    let surname = document.querySelector("#surname").value
    alert(`Seja bem vindo ${name} ${surname}`)
})