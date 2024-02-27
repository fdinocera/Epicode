/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
	Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];

function stampaInConsole() {
	for (let i = 0; i < pets.length; i++) {
		console.log(pets[i]);
	}
}
console.log("\nEsercizio n. 1");
stampaInConsole();

/* ESERCIZIO 2
	Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

function ordinaArray() {
	pets.sort();
	return pets;
}
console.log("\nEsercizio n. 2");
console.log(ordinaArray());


/* ESERCIZIO 3
	Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
function invertiArray() {
	pets.reverse();
	return pets;
}
console.log("\nEsercizio n. 3");
console.log(invertiArray());

/* ESERCIZIO 4
	Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
function shiftPushArray() {
	const element = pets.shift();
	pets.push(element);
	return pets;
}
console.log("\nEsercizio n. 4");
console.log(shiftPushArray());

/* ESERCIZIO 5
	Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
	{
		brand: 'Ford',
		model: 'Fiesta',
		color: 'red',
		trims: ['titanium', 'st', 'active'],
	},
	{
		brand: 'Peugeot',
		model: '208',
		color: 'blue',
		trims: ['allure', 'GT'],
	},
	{
		brand: 'Volkswagen',
		model: 'Polo',
		color: 'black',
		trims: ['life', 'style', 'r-line'],
	},
];

function addLicensePlate() {

	for (let i = 0; i < cars.length; i++) {
		cars[i].licensePlate = 'AA000ZZ';
	}
	return cars;
}
console.log("\nEsercizio n. 5");
console.log(addLicensePlate());


/* ESERCIZIO 6
	Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
	Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
function addCars(car) {

	cars.push(car);

	for (let i = 0; i < cars.length; i++) {
		if (cars[i].trims.length > 0) {
			let index = cars[i].trims.length - 1;
			cars[i].trims.splice(index, 1);
		}
	}
	return cars;
}
const car = {
	brand: 'Ferrari',
	model: 'Testarossa',
	color: 'black',
	trims: ['life', 'r-line'],
	licensePlate: 'AA000ZZ'
};

console.log("\nEsercizio n. 6");
console.log(addCars(car));

/* ESERCIZIO 7
	Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
function fillJustTrims() {

	for (let i = 0; i < cars.length; i++) {
		if (cars[i].trims.length > 0) {
			justTrims.push(cars[i].trims[0]);
		}
	}
	return justTrims;
}
console.log("\nEsercizio n. 7");
console.log(fillJustTrims());

/* ESERCIZIO 8
	Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
	"color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
function TestColor() {

	for (let i = 0; i < cars.length; i++) {
		if (cars[i].color.charAt(0) === 'b') {
			console.log('Fizz');
		} else {
			console.log('Buzz');
		}
	}
}
console.log("\nEsercizio n. 8");
console.log(TestColor());

/* ESERCIZIO 9
	Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
	6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

function cercaNumero() {

	let index = 0;

	while (true) {
		if (numericArray[index] !== 32) {
			console.log(numericArray[index]);
		} else {
			break;
		}
		index++;
	}
}
console.log("\nEsercizio n. 9");
console.log(cercaNumero());


/* ESERCIZIO 10
	Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
	dell'alfabeto italiano.
	es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

function posizineCarattere() {

	const alfabeto = 'abcdefghilmnopqrstuvz';	
	let nuovoArray = [];

	for (let i = 0; i < charactersArray.length; i++) {		

		let index = alfabeto.indexOf(charactersArray[i]);

		switch (index) {
			case 0: nuovoArray.push(1); break;
			case 1: nuovoArray.push(2); break;
			case 2: nuovoArray.push(3); break;
			case 3: nuovoArray.push(4); break;
			case 4: nuovoArray.push(5); break;
			case 5: nuovoArray.push(6); break;
			case 6: nuovoArray.push(7); break;
			case 7: nuovoArray.push(8); break;
			case 8: nuovoArray.push(9); break;
			case 9: nuovoArray.push(10); break;
			case 10: nuovoArray.push(11); break;
			case 11: nuovoArray.push(12); break;
			case 12: nuovoArray.push(13); break;
			case 13: nuovoArray.push(14); break;
			case 14: nuovoArray.push(15); break;
			case 15: nuovoArray.push(16); break;
			case 16: nuovoArray.push(17); break;
			case 17: nuovoArray.push(18); break;
			case 18: nuovoArray.push(19); break;
			case 19: nuovoArray.push(20); break;
			case 20: nuovoArray.push(21); break;			
		}
	}
	return nuovoArray;
}

console.log("\nEsercizio n. 10");
console.log(posizineCarattere());