/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
    {
        Title: 'The Lord of the Rings: The Fellowship of the Ring',
        Year: '2001',
        imdbID: 'tt0120737',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },

    {
        Title: 'The Lord of the Rings: The Return of the King',
        Year: '2003',
        imdbID: 'tt0167260',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings: The Two Towers',
        Year: '2002',
        imdbID: 'tt0167261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of War',
        Year: '2005',
        imdbID: 'tt0399295',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'Lords of Dogtown',
        Year: '2005',
        imdbID: 'tt0355702',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings',
        Year: '1978',
        imdbID: 'tt0077869',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1990',
        imdbID: 'tt0100054',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
        Title: 'The Lords of Salem',
        Year: '2012',
        imdbID: 'tt1731697',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
        Year: '1984',
        imdbID: 'tt0087365',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1963',
        imdbID: 'tt0057261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Infinity War',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Age of Ultron',
        Year: '2015',
        imdbID: 'tt2395427',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Endgame',
        Year: '2019',
        imdbID: 'tt4154796',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
];

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('\nEsercizio A');
const somma = () => {

    const sum = 10 + 20;
    console.log('sum = ' + sum);
};
somma();

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('\nEsercizio B');
const randomFunc = () => {
    const random = Math.floor(Math.random() * 21);
    console.log('random = ' + random);
};
randomFunc();

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log('\nEsercizio C');
const meFunction = () => {
    const me = {
        name: 'ferdinando',
        surname: 'di nocera',
        age: '56'
    };
    console.log('me.name = ' + me.name);
    console.log('me.surname = ' + me.surname);
    console.log('me.age = ' + me.age);
};
meFunction();

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('\nEsercizio D');
const removeProperty = () => {
    const me = {
        name: 'ferdinando',
        surname: 'di nocera',
        age: '56'
    };
    delete me.age;

    console.log('me.name = ' + me.name);
    console.log('me.surname = ' + me.surname);
    console.log('me.age = ' + me.age);
};
removeProperty();

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('\nEsercizio E');
const addArray = () => {
    const me = {
        name: 'ferdinando',
        surname: 'di nocera',
        age: '56'
    };
    me.skills = ['javascript', 'Visual Basic'];

    console.log('me.name = ' + me.name);
    console.log('me.surname = ' + me.surname);
    console.log('me.age = ' + me.age);
    console.log('me.skills = ' + me.skills);
};
addArray();

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('\nEsercizio F');
const addArrayElement = () => {
    const me = {
        name: 'ferdinando',
        surname: 'di nocera',
        age: '56'
    };
    me.skills = ['javascript', 'Visual Basic'];

    me.skills.push('Java');

    console.log('me.name = ' + me.name);
    console.log('me.surname = ' + me.surname);
    console.log('me.age = ' + me.age);
    console.log('me.skills = ' + me.skills);
};
addArrayElement();


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('\nEsercizio G');
const removeArrayElement = () => {

    const me = {
        name: 'ferdinando',
        surname: 'di nocera',
        age: '56'
    };
    me.skills = ['javascript', 'Visual Basic', 'Java'];

    me.skills.pop();

    console.log('me.name = ' + me.name);
    console.log('me.surname = ' + me.surname);
    console.log('me.age = ' + me.age);
    console.log('me.skills = ' + me.skills);
};
removeArrayElement();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('\nEsercizio 1');
const dice = () => {
    return Math.floor(Math.random() * 6 + 1);
};
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log('\nEsercizio 2');
const whoIsBigger = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};
console.log(whoIsBigger(4, 8));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('\nEsercizio 3');
const splitMe = (string) => {

    return string.split(' ');

};
console.log(splitMe('Nel mezzo del cammin di nostra vita'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log('\nEsercizio 4');
const deleteOne = (string = '', bool) => {

    if (bool == true) {
        return string.substring(1);
    } else {
        return string.substring(0, string.length - 1);
    }
};
console.log(deleteOne('Caltanissetta', true));
console.log(deleteOne('Caltanissetta', false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log('\nEsercizio 5');
const isNumber = (carattere) => {

    const numeri = '0123456789';
    if (numeri.includes(carattere)) {
        return true;
    } else {
        return false;
    }
};
const onlyLetters = (string) => {

    let valoreRitorno = '';

    for (let i = 0; i < string.length; i++) {
        if (!isNumber(string[i])) {
            valoreRitorno += string[i];
        }
    }
    return valoreRitorno;
};
console.log(onlyLetters('Io ho 3 gatti e 4 cani'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('\nEsercizio 6');
const isThisAnEmail = (string = '') => {

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const result = string.match(emailRegex);
    if (result === null) {
        return false;
    } else {
        return true;
    }
};
console.log(isThisAnEmail('pippo@pippo.it'));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log('\nEsercizio 7');
const whatDayIsIt = () => {

    const giorniSettimana = [
        'domenica',
        'lunedì',
        'martedì',
        'mercoledì',
        'giovedì',
        'venerdì',
        'sabato'
    ];

    const oggi = new Date();
    return giorniSettimana[oggi.getDay()];
};
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('\nEsercizio 8');
const rollTheDices = (numero) => {

    const tiriDado = {
        sum: 0,
        values: []
    };

    for (i = 0; i < numero; i++) {
        const tiro = dice();

        tiriDado.sum += tiro;
        tiriDado.values.push(tiro);
    }
    return tiriDado;
};
const giocoDadi = rollTheDices(10);
console.log(giocoDadi.sum);
console.log(giocoDadi.values);


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log('\nEsercizio 9');
const howManyDays = (data) => {

    const giorno = parseInt(data.substr(0, 2));
    const mese = parseInt(data.substr(3, 2)) - 1;
    const anno = parseInt(data.substr(6));
    const dataIniziale = new Date(anno, mese, giorno);

    const oggi = new Date();

    return Math.floor((oggi - dataIniziale) / (1000 * 60 * 60 * 24));
};
console.log(howManyDays('08/02/2024'));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log('\nEsercizio 10');
const isTodayMyBirthday = () => {

    const oggi = new Date();

    //compleanno = 14 settembre
    if (oggi.getMonth() === 8 && oggi.getDate() === 14) {
        return true;
    } else {
        return false;
    }
};
console.log(isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log('\nEsercizio 11');
const deleteProp = (obj = {}, proprietaDaRimuovere) => {

    delete obj[proprietaDaRimuovere];
    return obj;

};
console.log(deleteProp({ nome: 'Paperon', cognome: 'De Paperoni', eta: 100 }, 'eta'));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log('\nEsercizio 12');
const newestMovie = () => {

    let anno = 0;
    let index = 0;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].Year > anno) {
            anno = (movies[i].Year);
            index = i;
        }
    }
    return movies[index];
};
const oggetto = newestMovie();
console.log(oggetto.Title);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log('\nEsercizio 13');
const countMovies = () => {
    return movies.length;
};
console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log('\nEsercizio 14');
const onlyTheYears = () => {

    let risulato = [];
    movies.forEach(element => {
        risulato.push(element.Year);
    });
    return risulato;
};
console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log('\nEsercizio 15');
const onlyInLastMillennium = () => {

    let valoreRitorno = [];
    movies.forEach(element => {
        if (element.Year < 2001) {
            valoreRitorno.push(element);
        }
    });
    return valoreRitorno;
};
console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log('\nEsercizio 16');
const sumAllTheYears = () => {

    let valoreRitorno = 0;
    movies.forEach(element => {

        valoreRitorno += parseInt(element.Year);

    });
    return valoreRitorno;
};
console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log('\nEsercizio 17');
const searchByTitle = (searchString) => {

    let valoreRitorno = [];
    movies.forEach(element => {
        if (element.Title.toLowerCase().search(searchString.toLowerCase()) > -1) {
            valoreRitorno.push(element);
        }
    });
    return valoreRitorno;
};
console.log(searchByTitle('lord'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log('\nEsercizio 18');
const searchAndDivide = (searchString) => {

    const valoreRitorno = {
        match: [],
        unmatch: []
    };

    movies.forEach(element => {
        if (element.Title.toLowerCase().search(searchString.toLowerCase()) > -1) {
            valoreRitorno.match.push(element);
        } else {
            valoreRitorno.unmatch.push(element);
        }
    });

    return valoreRitorno;
};
const retVal = searchAndDivide('lord');
console.log(retVal.match);
console.log(retVal.unmatch);


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log('\nEsercizio 19');
const removeIndex = (num) => {

    let valoreRitorno = [];
    movies.forEach((element, index) => {
        if (index != num) {
            valoreRitorno.push(element);
        }
    });
    return valoreRitorno;
};
console.log(removeIndex(0));


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log('\nEsercizio 20');
const selectHtmlElement = () => {

    const el = document.getElementById('container');
    return el;

};
selectHtmlElement();
console.log(selectHtmlElement());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log('\nEsercizio 21');
const selectTagTd = () => {

    return document.getElementsByTagName('td');
};
console.log(selectTagTd());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log('\nEsercizio 22');
const stampaTd = () => {

    const tds = document.getElementsByTagName('td');



    for (let i = 0; i < tds.length; i++) {
        console.log(tds[i].textContent);

    };
};
stampaTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log('\nEsercizio 23');
const bkRed = () => {

    const link = document.getElementsByTagName('a');

    for (let i = 0; i < link.length; i++) {
        link[i].style.background = 'red';
    }
};
bkRed();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log('\nEsercizio 24');
const addItem = () => {

    const ul = document.getElementById('myList');

    const li = document.createElement('li');
    li.innerText = "nuovo item";
    ul.appendChild(li);
};
addItem();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log('\nEsercizio 25');
const svuotaLista = () => {
    document.getElementById('myList2').innerHTML = '';
};
svuotaLista();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log('\nEsercizio 26');
const addClasseTest = () => {

    const tr = document.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        tr[i].className += 'test';
    }
};
addClasseTest();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log('\nEsercizio 27');
const halfTree = (num) => {

    let tree = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < i + 1; j++) {
            tree += '*';
        }
        tree += '\n';
    }
    console.log(tree);
};
halfTree(10);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

  *  
 *** 
*****

*/

const nDispari = (n) => {

    let counter = 0;
    const limite = n * n + 1;
    for (i = 1; i < limite; i++) {
        if ((i % 2) !== 0) {
            counter++;
            if (counter == n) {
                return i;
            }
        }
    }
};
nDispari(1);


console.log('\nEsercizio 28');
const tree = (num) => {
    //1 righe -> base 1
    //2 righe -> base 3
    //3 righe -> base 5
    //4 righe -> base 7
    //5 righe -> base 9


    // progettino
    //num = 3
    //1 riga -> 2sp + 1* +2sp
    //2 riga -> 1sp + 3* +1sp
    //3 riga -> 0sp + 5* +0sp

    //riga -> 0 1 2    
    //composizione di ogni riga
    //spazi (2 1 0) + asterischi(1 3 5)  + spazi (2 1 0)

    //spazi (2) + asterischi(dispari n. 1)  + spazi (2)
    //spazi (1) + asterischi(dispari n. 3)  + spazi (1)
    //spazi (0) + asterischi(dispari n. 5)  + spazi (0) 




    let albero = '';

    let indiceDispari = 0;
    let spazi = num;
    for (let riga = 0; riga < num; riga++) {

        spazi--;
        for (let j = 0; j < spazi; j++) {
            albero += ' ';
        }

        indiceDispari++;
        let dispari = nDispari(indiceDispari);
        for (let j = 0; j < dispari; j++) {
            albero += '*';
        }

        for (let j = 0; j < spazi; j++) {
            albero += ' ';
        }
        albero += '\n';
    }
    console.log(albero);
};
tree(30);


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log('\nEsercizio 29');
const isItPrime = (num) => {

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;

};
console.log(isItPrime(37));