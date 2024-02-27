/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 1');

let es01_a = 10;
let es01_b = 18;
if (es01_a > es01_b) {
  console.log(es01_a + ' > ' + es01_b);
} else {
  console.log(es01_a + ' < ' + es01_b);
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 2');

let es02_a = 4;
if (es02_a !== 5) {
  console.log(es02_a + ' not equal 5');
} else {
  console.log(es02_a + ' equal 5');
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 3');

let es03_a = 24;
if (es03_a % 5 === 0) {
  console.log(es03_a + ' divisibile per 5');
} else {
  console.log(es03_a + ' non divisibile per 5');
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 4');

let es04_a = 8;
let es04_b = 2;
if (
  es04_a === 8 ||
  es04_b === 8 ||
  (es04_a + es04_b) === 8 ||
  (es04_a - es04_b) === 8
) {
  console.log('condizione verificata');
} else {
  console.log('condizione non verificata');
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 5');

let totalShoppingCart = 58;
if (totalShoppingCart > 50) {
  console.log(totalShoppingCart);
} else {
  console.log(totalShoppingCart + 10);
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 6');

//totale carrello
totalShoppingCart = 70;

//applica sconto 20%
totalShoppingCart *= 0.8;
if (totalShoppingCart > 50) {
  console.log(totalShoppingCart);
} else {
  console.log(totalShoppingCart + 10);
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 7');

let a = 10;
let b = 20;
let c = 30;

if (a < b && a < c) {
  console.log(a);
  if (b < c) {
    console.log(b);
    console.log(c);
  } else {
    console.log(c);
    console.log(b);
  }
}

if (b < a && b < c) {
  console.log(b);
  if (c < a) {
    console.log(c);
    console.log(a);
  } else {
    console.log(a);
    console.log(c);
  }
}

if (c < a && c < b) {
  console.log(c);
  if (a < b) {
    console.log(a);
    console.log(b);
  } else {
    console.log(b);
    console.log(a);
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 8');

let es08 = 'hello world!';
if (typeof es08  === 'number') {
  console.log(es08 + ' è un numero');
} else {
  console.log(es08 + ' non è un numero');
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 9');

let es09 = 24;
if (es09 % 2 === 0) {
  console.log(es09 + ' è pari');
} else {
  console.log(es09 + ' è dispari');
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 10');

let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 11');

me.city = 'Toronto';
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 12');

delete me.lastName;
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 13');

delete me.skills[2];
console.log(me);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 14');

let es14 = [];

es14[0] = 1;
es14[1] = 2;
es14[2] = 3;
es14[3] = 4;
es14[4] = 5;
es14[5] = 6;
es14[6] = 7;
es14[7] = 8;
es14[8] = 9;
es14[9] = 10;
console.log(es14);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('');
console.log('Esercizio 15');

es14[9] = 100;
console.log(es14);