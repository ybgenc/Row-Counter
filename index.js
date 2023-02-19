
let counter = document.getElementById("counting")
let saver = document.getElementById("prevEnter")

let count = 0

function increment(){

    count = count + 1

    document.getElementById("counting").innerText = count
}

function save(){

    let saveData = count + " - "

    document.getElementById("prevEnter").textContent += saveData

    document.getElementById("counting").innerText = 0

    count = 0

}