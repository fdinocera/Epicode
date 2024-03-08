const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTQzOTJkN2IxMTAwMTkwZTZlYmMiLCJpYXQiOjE3MDk4OTI2NjUsImV4cCI6MTcxMTEwMjI2NX0.3ajAG6PjKKhCnDptXTncAYNx9ckeI7sAohoUfeFQUxg';
const dataUrl = "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/";
const prodotti = document.getElementById('prodotti');
let lista = [];

addEventListener('load', init);

function init() {
    getData();
}

const getData = async () => {
    try {
        let read = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTQzOTJkN2IxMTAwMTkwZTZlYmMiLCJpYXQiOjE3MDk4OTI2NjUsImV4cCI6MTcxMTEwMjI2NX0.3ajAG6PjKKhCnDptXTncAYNx9ckeI7sAohoUfeFQUxg",
                'Content-Type': 'application/json'
            }
        });
        let response = await read.json();
        lista = response;
        mostraProdotti();
    }
    catch (error) {
        console.log(error);
    }
};

const postData = async (data) => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: "POST",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTQzOTJkN2IxMTAwMTkwZTZlYmMiLCJpYXQiOjE3MDk4OTI2NjUsImV4cCI6MTcxMTEwMjI2NX0.3ajAG6PjKKhCnDptXTncAYNx9ckeI7sAohoUfeFQUxg",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    catch (error) {
        console.log(error);
    }
};


product = {
    "name": "Nokia 3310",
    "description": "cellulare",
    "brand": "Nokia",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/78/Nokia_3310_Blue_R7309170_%28retouch%29.png",
    "price": 99
};

product2 = {
    "name": "Monitor",
    "description": "monitor",
    "brand": "LG",
    "imageUrl": "https://static.comet.it/b2c/public/e-cat/LGE003664/LGE003664-0.jpg",
    "price": 299
};

product4 = {
    "name": "Cuffie2",
    "description": "Trust Roha Cuffie Professionali On-Ear USB con Microfono, Confortevole Morbidi Padiglioni in Similpelle, Cavo di 1,8 Metri, per PC/Computer/Notebook, Skype, Smart Working, Teams, Videoconferenza, Zoom",
    "brand": "Trust",
    "imageUrl": "https://m.media-amazon.com/images/I/61hdRu0GcsL.__AC_SX300_SY300_QL70_ML2_.jpg",
    "price": 20
};

function mostraProdotti() {

    for (let i = 0; i < lista.length; i++) {

        let div = document.createElement('div');
        div.classList.add('card', 'col-3');

        div.innerHTML = `
            <img src="${lista[i].imageUrl}" class="card-img-top" alt="${lista[i].name}">
            <div class="card-body">
                <h5 class="card-title">${lista[i].name}</h5>
                <p class="card-text">${lista[i].description}</p>
                <a href="#" class="btn btn-warning mb-1">Modifica</a>
                <a href="detail.html?id=${lista[i]._id}" class="btn btn-primary">Scopri di più</a>
            </div>
        `;
        prodotti.appendChild(div);
    }
}