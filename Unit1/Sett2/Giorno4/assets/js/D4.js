/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nEsercizio 1");
function area(l1, l2) {
    return l1 * l2;
}
console.log(area(3, 2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nEsercizio 2");
function crazySum(num1, num2) {

    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}
console.log(crazySum(3, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nEsercizio 3");
function crazyDiff(num1) {

    if (num1 > 19) {
        return Math.abs(19 - num1) * 3;
    } else {
        return Math.abs(19 - num1);
    }
}
console.log(crazyDiff(-15));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nEsercizio 4");
function boundary(num1) {

    if (num1 === 400) return true;
    if (num1 >= 20 && num1 <= 100) return true;
    return false;
}
console.log(boundary(-1));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nEsercizio 5");
function epify(stringa) {

    if (stringa === 'EPICODE') return stringa;
    return 'EPICODE' + stringa;
}
console.log(epify('oggi'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nEsercizio 6");
function check3and7(num1) {
    if (num1 % 3 === 0) return 'il parametro è multiplo di 3';
    if (num1 % 7 === 0) return 'il parametro è multiplo di 7';
    return 'il parametro non è multiplo di 3 e non è multiplo di 7';
}
console.log(check3and7(-44));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nEsercizio 7");
function reverseString(stringa) {

    let valoreRitorno = '';

    let index = stringa.length - 1;
    for (let i = 0; i < stringa.length; i++) {

        valoreRitorno += stringa.substr(index--, 1);
    }

    return valoreRitorno;
}
console.log(reverseString('12345abc'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nEsercizio 8");
function upperFirst(stringa) {

    let array = stringa.split(' ');

    let valoreRitorno = '';

    for (i = 0; i < array.length; i++) {

        let str = array[i];
        let result = str.charAt(0).toUpperCase() + str.slice(1);
        valoreRitorno += result + ' ';
    }
    return valoreRitorno;

}
console.log(upperFirst('Nel mezzo del cammin di nostra vita'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nEsercizio 9");
function cutString(stringa) {

    return stringa.substr(1, stringa.length - 2);
}
console.log(cutString('Windows'));



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nEsercizio 10");
function giveMeRandom(num1) {

    let array = [];
    for (let i = 0; i < num1; i++) {
        let n = Math.floor(Math.random() * 11);
        array.push(n);
    }
    return array;
}
console.log(giveMeRandom(30));