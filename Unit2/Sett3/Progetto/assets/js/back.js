const fotoProdotto = document.getElementById('fotoProdotto');
const titolo = document.getElementById('titolo');
const nome = document.getElementById('nome');
const brand = document.getElementById('brand');
const price = document.getElementById('prezzo');
const url = document.getElementById('url');
const description = document.getElementById('descr');
const resetBtn = document.getElementById('reset');
const saveBtn = document.getElementById('save');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTQzOTJkN2IxMTAwMTkwZTZlYmMiLCJpYXQiOjE3MDk4OTI2NjUsImV4cCI6MTcxMTEwMjI2NX0.3ajAG6PjKKhCnDptXTncAYNx9ckeI7sAohoUfeFQUxg';
const dataUrl = "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/";
const id = location.href.split('=')[1];
let product;

addEventListener('load', init);

saveBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let productObject = {
        "name": nome.value,
        "description": description.value,
        "brand": brand.value,
        "imageUrl": url.value,
        "price": price.value
    };

    if (id) {
        updateData(productObject);
    } else {
        postData(productObject);
    }
});

function init() {
    backOffice();
}

function backOffice() {
    if (id) {
        titolo.innerText = "Modifica prodotto";
        readData();
    } else {
        document.getElementById('spinner').style.display = 'none';
        titolo.innerText = "Aggiungi prodotto";
        deleteBtn.style.display = 'none';
    }
}

const readData = async () => {
    try {
        let read = await fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTQzOTJkN2IxMTAwMTkwZTZlYmMiLCJpYXQiOjE3MDk4OTI2NjUsImV4cCI6MTcxMTEwMjI2NX0.3ajAG6PjKKhCnDptXTncAYNx9ckeI7sAohoUfeFQUxg",
                'Content-Type': 'application/json'
            }
        });
        response = await read.json();
        document.getElementById('spinner').style.display = 'none';
        product = response;
        popolaForm();
    }
    catch (error) {
        console.log(error);
    }
};

function popolaForm() {
    fotoProdotto.src = product.imageUrl;
    nome.value = product.name;
    brand.value = product.brand;
    price.value = product.price;
    url.value = product.imageUrl;
    description.value = product.description;
}

const updateData = async (data) => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTQzOTJkN2IxMTAwMTkwZTZlYmMiLCJpYXQiOjE3MDk4OTI2NjUsImV4cCI6MTcxMTEwMjI2NX0.3ajAG6PjKKhCnDptXTncAYNx9ckeI7sAohoUfeFQUxg",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        alert('Prodotto modificato correttamente');
        location.href = 'index.html';
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
        alert('Prodotto inserito correttamente');
        location.href = 'index.html';
    }
    catch (error) {
        console.log(error);
    }
};

function eliminaProdotto() {
    deleteData();
}

const deleteData = async () => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTQzOTJkN2IxMTAwMTkwZTZlYmMiLCJpYXQiOjE3MDk4OTI2NjUsImV4cCI6MTcxMTEwMjI2NX0.3ajAG6PjKKhCnDptXTncAYNx9ckeI7sAohoUfeFQUxg",
                'Content-Type': 'application/json'
            }
        });
        alert('Prodotto eliminato correttamente');
        location.href = 'index.html';
    }
    catch (error) {
        console.log(error);
    }
};

const nascondiFoto = () => {
    document.getElementById('fotoProdotto').style.display = 'none';
};

const visualizzaFoto = () => {
    document.getElementById('fotoProdotto').src = url.value;
};