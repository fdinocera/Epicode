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
        document.getElementById('spinner').style.visibility = 'hidden';
        lista = response;
        mostraProdotti();
    }
    catch (error) {
        console.log(error);
    }
};

function mostraProdotti() {
    for (let i = 0; i < lista.length; i++) {
        let div = document.createElement('div');
        div.classList.add('col', 'mb-3');
        div.innerHTML = `
        <div class="card h-100 mb-2">
            <img src="${lista[i].imageUrl}" class="card-img-top" alt="${lista[i].name}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${lista[i].name}</h5>
                <p class="card-text">${lista[i].description}</p>
                <div class="d-flex align-items-center mt-auto">
                    <a href="back.html?id=${lista[i]._id}" class="btn btn-warning me-1">Modifica</a>
                    <a href="detail.html?id=${lista[i]._id}" class="btn btn-primary">Scopri di più</a>
                </div>
            </div>                
        </div>            
        `;
        prodotti.appendChild(div);
    }
}