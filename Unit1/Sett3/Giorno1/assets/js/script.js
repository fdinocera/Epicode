/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function () {
    document.getElementsByTagName("h1")[0].innerText = "Titolo della pagina modificato!";
};
changeTitle();

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
    document.getElementsByTagName("h1")[0].className = "myHeading";
};
addClassToTitle();

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {

    const arrayElements = document.querySelectorAll('div > p');

    for (let i = 0; i < arrayElements.length; i++) {
        arrayElements[i].innerText += '***';
    }
};
changePcontent();

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {

    const arrayElements = document.querySelectorAll('div > a');
    for (let i = 0; i < arrayElements.length; i++) {
        arrayElements[i].href = 'https://www.google.com';
    }
};
changeUrls();

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {

    const ulElement = document.getElementById('secondList');

    const newElement = document.createElement('li');
    newElement.textContent = 'nuovo elemento';

    ulElement.appendChild(newElement);
};
addToTheSecond();

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {

    const newElement = document.createElement('p');
    newElement.textContent = 'nuovo paragrafo';
    const divElements = document.getElementsByTagName('div')[0].appendChild(newElement);
};
addParagraph();

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
    document.getElementById('firstList').remove();
};
//hideFirstUl();

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {

    const ulElements = document.getElementsByTagName('ul');

    for (let i = 0; i < ulElements.length; i++) {
        ulElements[i].style.backgroundColor = 'green';
    }
};
paintItGreen();

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {

    const el = document.getElementsByTagName("h1")[0];

    el.addEventListener('click', function () {
        //versione con substring
        //el.textContent = el.textContent.substring(0, el.textContent.length - 1);

        //versione con slice()
        //el.innerText = el.innerText.slice(0, -1);

        //versione con array
        let scritta = el.textContent.split('');
        scritta.pop();
        scritta = scritta.join('');
        el.innerText = scritta;
    });
};
makeItClickable();

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () {

    const el = document.getElementsByTagName("footer")[0];
    el.addEventListener('click', function () {

        let msg = document.querySelector('footer a').href;
        alert(msg);
    });
};
revealFooterLink();

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () {

    // ARRAY PER LEGGERE LA BASE DATI E CREARE A CICLO LE RIGHE DELLA TABELLA
    const immagini = [
        'https://m.media-amazon.com/images/I/61ToKShnQvL.__AC_SY445_SX342_QL70_ML2_.jpg',
        'https://m.media-amazon.com/images/I/61CVR4L6IDL._AC_SX679_.jpg',
        'https://m.media-amazon.com/images/I/81WeAqaLe8L.__AC_SX300_SY300_QL70_ML2_.jpg',
        'https://m.media-amazon.com/images/I/61CVR4L6IDL.__AC_SX300_SY300_QL70_ML2_.jpg',
        'https://m.media-amazon.com/images/I/61stmTPwiLL.__AC_SX300_SY300_QL70_ML2_.jpg',
    ];

    //contenitore tabella
    let tableContainer = document.getElementById('tableArea');

    //tabella
    let table = document.createElement('table');

    //riga
    let tr = document.createElement('tr');

    //intestazione
    let thead = document.createElement('thead');

    //celle intestazione
    let idProgressivo = document.createElement('th');
    idProgressivo.innerText = 'progressivo';

    let idImmagineProdotto = document.createElement('th');
    idImmagineProdotto.innerText = 'immagine';

    let idNomeProdotto = document.createElement('th');
    idNomeProdotto.innerText = 'prodotto';

    let idQuantita = document.createElement('th');
    idQuantita.innerText = 'quantità';

    let idPrezzo = document.createElement('th');
    idPrezzo.innerText = 'prezzo';

    //append celle intestazione
    tr.appendChild(idProgressivo);
    tr.appendChild(idImmagineProdotto);
    tr.appendChild(idNomeProdotto);
    tr.appendChild(idQuantita);
    tr.appendChild(idPrezzo);

    //append riga intestazione
    thead.appendChild(tr);

    //append intestazione
    table.appendChild(thead);


    //crea tbody
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for (let i = 0; i < immagini.length; i++) {

        let riga = document.createElement('tr');

        let idProgressivo = document.createElement('td');
        idProgressivo.innerText = i + 1;

        let idImmagineProdotto = document.createElement('td');
        idImmagineProdotto.innerHTML = '<img src="' + immagini[i] + '">';

        let idNomeProdotto = document.createElement('td');
        idNomeProdotto.innerText = 'Tablet';

        let idQuantita = document.createElement('td');
        idQuantita.innerText = Math.floor(Math.random() * 25 + 1);

        let idPrezzo = document.createElement('td');
        idPrezzo.innerText = Math.floor(Math.random() * 250 + 50);

        riga.appendChild(idProgressivo);
        riga.appendChild(idImmagineProdotto);
        riga.appendChild(idNomeProdotto);
        riga.appendChild(idQuantita);
        riga.appendChild(idPrezzo);

        tbody.appendChild(riga);
    }

    table.appendChild(tbody);
    tableContainer.appendChild(table);
};
generateTable();


/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function (imgSrc, nome, quantita, prezzo) {

    //tabella
    let table = document.querySelector('table');

    //crea riga
    let tr = document.createElement('tr');

    //crea celle
    let idProgressivo = document.createElement('td');
    let idImmagineProdotto = document.createElement('td');
    let idNomeProdotto = document.createElement('td');
    let idQuantita = document.createElement('td');
    let idPrezzo = document.createElement('td');

    //imposta valori celle
    idProgressivo.innerText = '';
    idImmagineProdotto.innerHTML = '<img src="' + imgSrc + '">';
    idNomeProdotto.innerText = nome;
    idQuantita.innerText = quantita;
    idPrezzo.innerText = prezzo;

    //append celle
    tr.appendChild(idProgressivo);
    tr.appendChild(idImmagineProdotto);
    tr.appendChild(idNomeProdotto);
    tr.appendChild(idQuantita);
    tr.appendChild(idPrezzo);

    //append riga
    table.appendChild(tr);
};
addRow(
    'https://m.media-amazon.com/images/I/61ToKShnQvL.__AC_SY445_SX342_QL70_ML2_.jpg',
    'nome',
    Math.floor(Math.random() * 26 + 1),
    Math.floor(Math.random() * 249 + 1)
);

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {

    let images = document.querySelectorAll('table img');
    for (let i = 0; i < images.length; i++) {
        images[i].style.visibility = 'hidden';
    }
};
//hideAllImages();

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {

    let h2 = document.getElementById('changeMyColor');

    h2.addEventListener('click', function () {

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        console.log('rgb', r, g, b);
        h2.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
    });

};
changeColorWithRandom();