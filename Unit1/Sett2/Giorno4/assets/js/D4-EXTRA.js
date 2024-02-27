// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log("\nExtra 1");
function checkArray(array) {

    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            console.log(array[i]);
            somma += array[i];
        }
    }
    return somma;
}
let arrayNumeriCasuali = giveMeRandom(10);
console.log(arrayNumeriCasuali);
console.log('La somma dei numuri maggiori di 5 è: ' + checkArray(arrayNumeriCasuali));


/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
    { name: 'Fagioli', price: 10, id: 1245, quantity: 10 },
    { name: 'Lenticchie', price: 12, id: 1345, quantity: 2 },
    { name: 'Patate', price: 14, id: 1255, quantity: 3 },
    { name: 'Pomodori', price: 18, id: 1247, quantity: 3 },
    { name: 'Lattuga', price: 11, id: 1945, quantity: 12 }
];

console.log("\nExtra 2");
function shoppingCartTotal(shoppingCart) {

    let totale = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        totale += parseInt(shoppingCart[i].price * shoppingCart[i].quantity);
    }
    return totale;
}
console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nExtra 3");
function addToShoppingCart(nuovoProdotto) {

    shoppingCart.push(nuovoProdotto);
    return shoppingCart.length;
}
const nuovoProdotto = { name: 'Mele', price: 2, id: 2945, quantity: 12 };
console.log(addToShoppingCart(nuovoProdotto));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nExtra 4");
function maxShoppingCart(shoppingCart) {

    let maxPrice = 0;
    let mostExpensiveProduct = {};
    for (let i = 0; i < shoppingCart.length; i++) {

        if (shoppingCart[i].price > maxPrice) {
            maxPrice = shoppingCart[i].price;
            mostExpensiveProduct = shoppingCart[i];
        };
    }
    return mostExpensiveProduct;
}
console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nExtra 5");
function latestShoppingCart(shoppingCart) {

    return shoppingCart[shoppingCart.length - 1];
}
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nExtra 6");
function loopUntil(x) {

    if (x >= 0 && x <= 9) {
        console.log('Numero in input: ' + x);

        let counter = 0;
        while (true) {

            let numeroCasuale = Math.floor(Math.random() * 10);
            console.log(numeroCasuale);
            if (numeroCasuale > x) {
                counter++;
                if (counter === 3) {
                    console.log('Gli ultimi tre numeri sono maggiori di ' + x);
                    break;
                }
            } else {
                counter = 0;
            }
        }
    } else {
        console.log('Il numero in input deve essere compreso tra 0 e 9!');
    }
}
loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nExtra 7");
function average(array) {

    let somma = 0;
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            somma += array[i];
            counter++;
        }
    }
    return somma / counter;

}
let arr = [3, 4, 6, 'roma', 10, 343, 'Pippo', 3, 3, 'Pluto', false, null, 10.34, 37.9];
console.log(arr);
console.log(average(arr));


/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nExtra 8");
function longest(arr) {

    let maxLength = 0;
    let longestString = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
            longestString = arr[i];
        }
    }
    return longestString;
}
arr = ['roma', 'Pippo', 'Pluto', 'Paperon de Paperoni', 'Paperino'];
console.log(arr);
console.log(longest(arr));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nExtra 9");
function filtroAntiSpam(emailContent) {

    if (emailContent.indexOf('SPAM') >= 0 || emailContent.indexOf('SCAM') >= 0) {
        return true;
    } else {
        return false;
    }
}
let testoEmail = ' Nel mezzo del SCAM cammin SPAM di nostra vita';
console.log(testoEmail);
console.log(filtroAntiSpam(testoEmail));


/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nExtra 10");
function calcolaGiorni(d) {

    let oggi = new Date();
    let dateDiffMillis = oggi.getTime() - d.getTime();

    return Math.floor(dateDiffMillis / (1000 * 60 * 60 * 24));
}
let dataPassata = new Date(2024, 0, 1);
console.log('Giorni trascorsi dal 01/01/2024: ' + calcolaGiorni(dataPassata));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
  "10","11","12"]
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("\nExtra 11");
function matrixGenerator(x, y) {

    let array = [y];
    for (let i = 0; i < y; i++) {
        array[i] = [];
        for (let j = 0; j < x; j++) {
            array[i][j] = i.toString() + j.toString();
        }
    }
    return array
}
console.log(matrixGenerator(5, 3));