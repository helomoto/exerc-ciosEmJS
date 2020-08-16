const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    let cpf = pontoCPF()
    alert(`O CPF É ${cpf}`)

})

function pontoCPF() {
    let cpf = document.querySelector("#cpf").value
    let array = cpf.split("")
    //console.log(array)
    array.splice(3, 0, ".")
    array.splice(7, 0, ".")
    array.splice(11, 0, "-")
    //console.log(array)
    let finalcpf = array.join("")
    return finalcpf
}