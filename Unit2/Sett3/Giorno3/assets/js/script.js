let endpoint = 'https://striveschool-api.herokuapp.com/books';
let libreria = [];
let carrello = [];
const colonna1 = document.getElementById('colonna1');
const colonna2 = document.getElementById('colonna2');
const colonna3 = document.getElementById('colonna3');
const colonna4 = document.getElementById('colonna4');
const colonna5 = document.getElementById('colonna5');


addEventListener('load', init);

function init() {
    getData();
    stampaDati();
}

const getData = async () => {

    await fetch(endpoint)
        .then(response => {
            return response.json();
        })
        .then(data => {
            libreria = data;
            stampaDati();
        })
        .catch(err => {
            //messaggio errore            
        });
};

const stampaDati = () => {
    for (let i = 0; i < libreria.length; i += 5) {
        colonna1.appendChild(getLibro(libreria[i]));
        colonna2.appendChild(getLibro(libreria[i + 1]));
        colonna3.appendChild(getLibro(libreria[i + 2]));
        colonna4.appendChild(getLibro(libreria[i + 3]));
        colonna5.appendChild(getLibro(libreria[i + 4]));
    }
};

const getLibro = (libro) => {

    // <div class="card" style="width: 18rem;">
    //     <img src="..." class="card-img-top" alt="...">
    //     <div class="card-body">
    //         <h5 class="card-title">Card title</h5>
    //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
    //             card's content.</p>
    //         <a href="#" class="btn btn-primary bg-danger">Compra ora</a>
    //         <a href="#" class="btn btn-primary">Scarta</a>
    //     </div>
    // </div>

    //card
    let div1 = document.createElement('div');
    div1.classList.add('card');
    div1.setAttribute('style', 'width: 18rem; heigth: 54rem;');

    //img
    let img = document.createElement('img');
    img.src = libro.img;
    img.classList.add('card-img-top');
    //img.classList.add('w-100');
    div1.appendChild(img);

    //div2
    let div2 = document.createElement('div');
    div2.classList.add('card-body');

    //h5
    let h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.innerText = libro.title;
    div2.appendChild(h5);


    //pulsante1
    let link1 = document.createElement('a');
    link1.classList.add('btn');
    link1.classList.add('btn-primary');
    link1.classList.add('bg-danger');
    link1.innerText = 'Compra ora';


    //link1.setAttribute("onclick","aggiungiCarrello('blah');");
    link1.setAttribute("onclick", `aggiungiCarrello(${libro.asin})`);


    link1.href = '#';
    div2.appendChild(link1);

    //pulsante2
    let link2 = document.createElement('a');
    link2.classList.add('btn');
    link2.classList.add('btn-primary');
    link2.classList.add('bg-white');
    link2.classList.add('text-danger');
    link2.innerText = 'Scarta';
    link2.href = '#';
    div2.appendChild(link2);
    div1.appendChild(div2);
    return div1;
};

const aggiungiCarrello = (asin) => {

    //alert('asin libro' + asin);
    libreria.forEach((element) => {
        if (element.asin == asin) {
            carrello.push(element);
        }
    });
};