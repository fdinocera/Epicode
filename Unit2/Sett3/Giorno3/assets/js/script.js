let searchUrl = 'https://striveschool-api.herokuapp.com/books';
let books = [];
let shoppingCartList = [];
const cart = document.getElementById('cart');
const cards = document.getElementById('cards');


addEventListener('load', init);

function init() {
    getData();
    if (localStorage.getItem('carrello')) {
        shoppingCartList = JSON.parse(localStorage.getItem('carrello'));
        caricaCarrello();
    }
}

const getData = async () => {

    await fetch(searchUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            books = data;
            stampaDati();
        })
        .catch(err => {
            //messaggio errore            
        });
};

const stampaDati = () => {
    for (let i = 0; i < books.length; i++) {
        let div1 = document.createElement('div');
        div1.classList.add('col');
        div1.innerHTML = `
        <div class="card h-100">
            <img src="${books[i].img}" class="card-img-top img-fluid" />
            <div class="card-body">
                <h5 class="card-title">${books[i].title}</h5> 
                <p class="card-text badge rounded-pill bg-black text-white px-2">${books[i].category}</p>
                <p class="fs-4">${books[i].price} €</p>
                <div>
                    <button class="btn btn-danger" onclick="addToCart('${books[i].asin}')">Compra ora</button>
                    <button class="btn btn-outline-danger" onclick="skipMe()">Scarta</button>
                </div>
            </div>
        </div>        
        `;

        // <div class="card h-100">
        //     <img src="${books[i].img}" class="img-fluid card-img-top" />
        //     <div class="card-body">
        //         <h5 class="card-title">${books[i].title}</h5>
        //         <p class="card-text badge rounded-pill bg-dark mb-2">${books[i].category}</p>
        //         <p class="fs-4">${books[i].price} €</p>
        //         <div>
        //             <button class="btn btn-danger" onclick="addToCart('${books[i].asin}')">Compra ora</button>
        //             <button class="btn btn-outline-danger" onclick="skipMe()">Scarta</button>
        //         </div>
        //     </div>
        // </div>

        cards.appendChild(div1);
        //cards.appendChild(getLibro(libreria[i]));


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

const addToCart = (asin) => {
    const book = books.find(book => book.asin == asin);
    shoppingCartList.push(book);
    localStorage.setItem('carrello', JSON.stringify(shoppingCartList));
    caricaCarrello();
};

function caricaCarrello() {
    cart.innerHTML = '';

    shoppingCartList.forEach(elem => {
        cart.innerHTML += `
        <div>
            <div class="d-flex align-items-start">
                <img src="${elem.img}" class="img-fluid" width="60" />
                <div class="flex-grow-1">
                    <p class="fw-bold">
                        ${elem.price} €
                    </p>
                    <div>
                        <button class="btn btn-danger" onclick="deleteItem('${elem.asin}')"  >Elimina</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
}

function skipMe() {

}

function deleteItem(asin) {

    const index = shoppingCartList.findIndex(libro => libro.asin == asin);
    shoppingCartList.splice(index, 1);
    localStorage.setItem('carrello', JSON.stringify(shoppingCartList));
    caricaCarrello();
}