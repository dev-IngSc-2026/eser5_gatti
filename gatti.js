// Dichiariamo le variabili
var totaleGatti = 44;
var gattiInFila = 6;

// Calcoliamo quante file intere ci sono (arrotondando per difetto)
var numeroFile = Math.floor(totaleGatti / gattiInFila);

// Calcoliamo quanti gatti restano fuori
var avanzo = totaleGatti % gattiInFila;

// Variabile nuova per i gatti mancanti
var mancanti;

// Usiamo un costrutto if/else tradizionale
if (avanzo === 0) {
    mancanti = 0;
} else {
    mancanti = gattiInFila - avanzo;
}

// Stampiamo il risultato 
console.log("Ci sono " + numeroFile + " file di gatti e ne mancano " + mancanti + " per una nuova fila, con un avanzo di " + avanzo);