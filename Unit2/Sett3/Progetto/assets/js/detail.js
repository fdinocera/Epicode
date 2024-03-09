const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTQzOTJkN2IxMTAwMTkwZTZlYmMiLCJpYXQiOjE3MDk4OTI2NjUsImV4cCI6MTcxMTEwMjI2NX0.3ajAG6PjKKhCnDptXTncAYNx9ckeI7sAohoUfeFQUxg';
const dataUrl = "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/";
const dettagli = document.getElementById('dettagli');
let record = [];
const id = location.href.split('=')[1];

addEventListener('load', init);

function init() {
    getData();
}

const getData = async () => {
    try {
        let read = await fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTQzOTJkN2IxMTAwMTkwZTZlYmMiLCJpYXQiOjE3MDk4OTI2NjUsImV4cCI6MTcxMTEwMjI2NX0.3ajAG6PjKKhCnDptXTncAYNx9ckeI7sAohoUfeFQUxg",
                'Content-Type': 'application/json'
            }
        });

        let response = await read.json();
        record = response;
        mostraDettagliProdotto();
    }
    catch (error) {
        console.log(error);
    }
};

function mostraDettagliProdotto() {
    document.getElementById('backOffice').href = `back.html?id=${record._id}`;

    let div = document.createElement('div');
    div.innerHTML = `
        <div class="row">
            <div class="col-4 mb-3">
                <img src="${record.imageUrl}" class="" alt="${record.name}" style="max-width: 300px">
            </div>
            <div class="col-8">
                <p class="card-text">${record.brand}</p>
                <h5 class="card-title">${record.name}</h5>
                <p class="badge rounded-pill text-bg-dark text-warning px-3 my-3">${record.price}€</p>
                <p class="card-text">${record.description}</p>
            </div>
        </div>
        `;
    dettagli.appendChild(div);
}