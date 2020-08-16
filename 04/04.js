let btn = document.querySelector("#btn")
let name = document.querySelector("#name")

btn.addEventListener("click", () => {
    alert(name.value)
    console.log(name.value)
})