// 1. Dichiariamo le variabili
let totaleGatti = 44;
let gattiInFila = 6;

// 2. Calcoliamo il numero di file intere
let numeroFile = Math.floor(totaleGatti / gattiInFila);

// 3. Calcoliamo l'avanzo (i gatti che restano fuori)
let avanzo = totaleGatti % gattiInFila;

// 4. Calcoliamo quanti gatti mancano usando un costrutto if/else classico
let mancanti;

if (avanzo === 0) {
    mancanti = 0;
} else {
    mancanti = gattiInFila - avanzo;
}

// 5. Stampiamo in console con la concatenazione classica (simbolo +)
console.log("Ci sono " + numeroFile + " file di gatti e ne mancano " + mancanti + " per una nuova fila, con un avanzo di " + avanzo);