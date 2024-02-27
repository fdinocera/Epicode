/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* 
number: comprende numeri interi, numeri con decimali, sia positivi che negativi, ed anche lo zero
esempio: let variabile1 = 10; -> variabile1 è di tipo numerico

string: comprende del testo, cioè lettere, numeri e altri caratteri
esempio: let variabile2 = 'esercizio n. 01 settimana n. 02'; -> variabile2 è di tipo stringa

boolean: ha solo due valori, vero o falso
esempio: let variabile3 = false; -> variabile3 è di tipo booleano

null: è un valore nullo intenzionale
esempio: let variabile4 = null; -> variabile4 ha valore null

undefined: la variabile ha un valore non ancora definito
esempio: let variabile5; -> variabile5 non è stata ancora definita
*/

////////////////////////////////
//visualizza in html
////////////////////////////////

//number
document.getElementById("esercizio-1a").innerHTML =
  "<strong>number</strong>: comprende numeri interi, numeri con decimali, sia positivi che negativi, ed anche lo zero<br>";
document.getElementById("esercizio-1a").innerHTML +=
  "esempio: <code>let variabile1 = 10;</code> -> variabile1 è di tipo numerico";

//string
document.getElementById("esercizio-1b").innerHTML =
  "<strong>string</strong>: comprende del testo, cioè lettere, numeri e altri caratteri<br>";
document.getElementById("esercizio-1b").innerHTML +=
  "esempio: <code>let variabile2 = 'esercizio n. 01 settimana n. 02';</code> -> variabile2 è di tipo stringa";

//boolean
document.getElementById("esercizio-1c").innerHTML =
  "<strong>boolean</strong>: ha solo due valori, vero o falso<br>";
document.getElementById("esercizio-1c").innerHTML +=
  "esempio: <code>let variabile3 = false;</code> -> variabile3 è di tipo booleano";

//null
document.getElementById("esercizio-1d").innerHTML =
  "<strong>null</strong>: è un valore nullo intenzionale<br>";
document.getElementById("esercizio-1d").innerHTML +=
  "esempio: <code>let variabile4 = null;</code> -> variabile4 ha valore nullo";

//undefined
document.getElementById("esercizio-1e").innerHTML =
  "<strong>undefined</strong>: la variabile ha un valore non ancora definito<br>";
document.getElementById("esercizio-1e").innerHTML +=
  "esempio: <code>let variabile5;</code> -> variabile5 non è stata ancora definita";

//visualizza in console------------------------------------------------------------------
console.log("Esercizio 1");
let variabile1 = 10;
console.log("let variabile1 = " + variabile1 + ";");
console.log("variabile1 è di tipo " + typeof variabile1);
console.log("");

let variabile2 = "studente";
console.log("let variabile2 = '" + variabile2 + "';");
console.log("variabile2 è di tipo " + typeof variabile2);
console.log("");

let variabile3 = false;
console.log("let variabile3 = " + variabile3 + ";");
console.log("variabile3 è di tipo " + typeof variabile3);
console.log("");

let variabile4 = null;
console.log("let variabile4 = " + variabile4 + ";");
console.log("variabile4 ha valore " + null);
console.log("");

let variabile5;
console.log("let variabile5;");
console.log("variabile5 ha valore " + typeof variabile5);
console.log("");
//-------------------------------------------------------------------------------------------------------

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Ferdinando";

//visualizza in html
document.getElementById("esercizio-2").innerHTML =
  "<code>let myName = 'Ferdinando';</code>";

//visualizza in console
console.log("Esercizio 2");
console.log("let myName = " + myName + ";");
console.log("");
//-------------------------------------------------------------------------------------------------------

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let somma = 12 + 20;

//visualizza in html
document.getElementById("esercizio-3").innerHTML =
  "<code>let somma = 12 + 20;</code>";

//visualizza in console
console.log("Esercizio 3");
console.log("12 + 20 = " + somma);
console.log("");
//-------------------------------------------------------------------------------------------------------

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

//visualizza in html
document.getElementById("esercizio-4").innerHTML = "<code>let x = 12;</code>";

//visualizza in console
console.log("Esercizio 4");
console.log("x = " + x);
console.log("");
//-------------------------------------------------------------------------------------------------------

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Di Nocera";

const personaggio = "Pippo";

//errore bloccante: impossibile riassegnare un valore a una costante
//personaggio = 'Paperino';

//visualizza in html
document.getElementById("esercizio-5").innerHTML =
  "<code>myName = 'Di Nocera';</code>";

//visualizza in console
console.log("Esercizio 5");
console.log("myName = " + myName);
console.log("");
//-------------------------------------------------------------------------------------------------------

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione = 4 - x;

//visualizza in html
document.getElementById("esercizio-6").innerHTML =
  "<code>let sottrazione = 4 - x;</code>";

//visualizza in console
console.log("Esercizio 6");
console.log("4 - x = " + sottrazione);
console.log("");
//-------------------------------------------------------------------------------------------------------

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

let confronto =
  name1 === name2
    ? 'name1 = "john" e name2 = "John" sono uguali'
    : 'name1 = "john" e name2 = "John" sono diversi';

//visualizza in html
document.getElementById(
  "esercizio-7"
).innerHTML = `<code>let confronto = name1 === name2 ? 'name1 = "john" e name2 = "John" sono uguali' : 'name1 = "john" e name2 = "John" sono diversi'</code>`;

//visualizza in console
console.log("Esercizio 7");
console.log("Valore variabile confronto1: " + confronto);
console.log("");
//-------------------------------------------------------------------------------------------------------

/* esercizio extra 
EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name1 = name1.toLowerCase();
name2 = name2.toLowerCase();
let confronto2 =
  name1 === name2 ? "name1 e name2 sono uguali" : "name1 e name2 sono diversi";

//visualizza in html
document.getElementById("esercizio-extra").innerHTML = `<code>
name1 = name1.toLowerCase();<br>
name2 = name2.toLowerCase();<br>
let confronto2 = name1 === name2 ? 'name1 e name2 sono uguali' : 'name1 e name2 sono diversi';
</code>`;

//visualizza in console
console.log("Esercizio extra");
console.log("Valore variabile contronto2: " + confronto2);
console.log("");
//-------------------------------------------------------------------------------------------------------
