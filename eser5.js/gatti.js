// 1. Dichiariamo le variabili (usiamo i famosi 44 gatti in fila per 6!)
let totaleGatti = 44;
let gattiInFila = 6;

// 2. Calcoliamo il numero di file intere.
// Math.floor() arrotonda per difetto il risultato della divisione, eliminando i decimali.
let numeroFile = Math.floor(totaleGatti / gattiInFila);

// 3. Calcoliamo l'avanzo (i gatti che restano fuori) usando l'operatore modulo (%)
// Il modulo ci restituisce esattamente il "resto" di una divisione.
let avanzo = totaleGatti % gattiInFila;

// 4. Calcoliamo quanti gatti mancano per completare una nuova fila.
// Se l'avanzo è 0, significa che non mancano gatti, altrimenti sottraiamo l'avanzo alla dimensione della fila.
let mancanti = avanzo === 0 ? 0 : gattiInFila - avanzo;

// 5. Stampiamo in console la frase richiesta con i template literal
console.log(`Ci sono ${numeroFile} file di gatti e ne mancano ${mancanti} per una nuova fila, con un avanzo di ${avanzo}`);