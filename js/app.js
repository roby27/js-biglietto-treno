const tariffa = 0.21
console.log("La tarrifa è di " + tariffa + "€ per Km percorso")

let age = prompt("Quanti anni hai?")
age = parseInt(age)
console.log("Hai " + age + " anni")
let kmPercorsi = prompt("Quanti Km devi percorrere?")
kmPercorsi = parseInt(kmPercorsi)
console.log("Devi percorrere " + kmPercorsi + " km")

let prezzo = kmPercorsi * tariffa

const prezzoUnder18 = prezzo * 0.80
const prezzoOver65 = prezzo * 0.60
const ageElement = document.getElementById('age')
const kmElement = document.getElementById('kmpercorsi')
const prezzoElement = document.getElementById('prezzobiglietto')
const sconto18Element = document.getElementById('sconto18')
const sconto65Element = document.getElementById('sconto65')
const tariffaElement = document.getElementById('tariffa')

const today = new Date()
const todayElement = document.getElementById('today')

ageElement.innerHTML = age + " anni"
kmElement.innerHTML = kmPercorsi + " Km"
sconto18Element.innerHTML = "20%"
sconto65Element.innerHTML = "40%"
tariffaElement.innerHTML = tariffa + "€"
todayElement.innerHTML = today


if (age < 18) {
    prezzoElement.innerHTML = prezzoUnder18.toFixed(2) + "€"
    console.log("Il prezzo del biglietto è di " + prezzoUnder18.toFixed(2) + "€")
}
else if (age > 65) {
    prezzoElement.innerHTML = prezzoOver65.toFixed(2) + "€"
    console.log("Il prezzo del biglietto è di " + prezzoOver65.toFixed(2) + "€")
}
else {
    prezzoElement.innerHTML = prezzo.toFixed(2) + "€"
    console.log("Il prezzo del biglietto è di " + prezzo.toFixed(2) + "€")
}