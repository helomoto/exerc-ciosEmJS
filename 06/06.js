let lamp = document.querySelector("#lamp")
let img = lamp.querySelector("img")
let urlOn = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true"
let urlOff = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true"

    img.addEventListener("click", () => {

        if (img.src == urlOff) {
            img.src = urlOn
        } 
        else if (img.src == urlOn) {
            img.src = urlOff
        }
    })

console.log(urlOn)