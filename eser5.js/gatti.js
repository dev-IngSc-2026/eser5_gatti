let totaleGatti = 44; // Puoi cambiare questo numero per fare delle prove
let gattiInFila = 6;  // Puoi cambiare anche questo

// 1. Troviamo quanti gatti rimangono fuori usando l'operatore modulo (%)
// Il modulo ci restituisce il resto della divisione
let avanzo = totaleGatti % gattiInFila;
// 2. Calcoliamo il numero di file
// Sottraendo l'avanzo dal totale, otteniamo un numero perfettamente divisibile.
// In questo modo non abbiamo bisogno di usare Math.floor() per arrotondare.
let numeroFile = (totaleGatti - avanzo) / gattiInFila;

// 3. Calcoliamo quanti gatti mancano per una nuova fila
let gattiMancanti = gattiInFila - avanzo;

// Gestiamo il caso in cui i gatti formino file perfette senza avanzi
if (avanzo === 0) {
    gattiMancanti = 0;
}

// 4. Stampiamo in console usando la concatenazione classica con il +
console.log("Ci sono " + numeroFile + " file di gatti e ne mancano " + gattiMancanti + " per una nuova fila, con un avanzo di " + avanzo);