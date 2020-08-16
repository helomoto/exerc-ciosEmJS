const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    let cpf = document.querySelector("#cpf").value
    
    let cpf2 = cpf.replace(".","")
    let cpf3 = cpf2.replace(".", "")
    let cpf4 = cpf3.replace("-","")
    
    alert(`O CPF só com numeros é ${cpf4}`)

    console.log(cpf4)
})
