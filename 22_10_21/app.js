/* let secondi = parseInt(prompt("Inserisci il tuo numero e facciamo il conto alla rovescia")); */

let t = window.setInterval(function () {
    document.writeln(secondi + '<br/>');
    secondi--;
    if (secondi < 0) clearTimeout(t) + alert("Addio mondo");
}, 1000);

console.log(secondi)


/* Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
FALSE altrimenti.
Esempi:
  Input: n = 2, m = 3
  Output: FALSE
  Input: n = 2, m = '2'
  Output: FALSE
  Input: n = 2, m = 2
  Output: TRUE */


/*

// PRIMO ATTEMPT

    function input() {
    let dato = prompt("Inserisci due elementi");
    let num = dato.split(",");
    console.log(num)

    function equal(n, m) {
        if (n === m) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
    
    
    equal(num [0], num [1]);

}

input()*/

// versione finale

function input(){
    let dati = prompt ("inserisci i toui dati separati da ,")
    let arr = dati.split (',');
    equal(arr [0], arr [1]);
}
input()

function equal(n, m){

    if (n === m) {
        console.log ("true")
    } else {
        console.log ("false")
    }
}

