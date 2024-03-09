const fotoProdotto = document.getElementById('fotoProdotto');
const titolo = document.getElementById('titolo');
const nome = document.getElementById('nome');
const brand = document.getElementById('brand');
const price = document.getElementById('prezzo');
const url = document.getElementById('url');
const description = document.getElementById('descr');
const resetBtn = document.getElementById('reset');
const saveBtn = document.getElementById('save');
const messaggioErrore = document.getElementById('messaggioErrore');
const divAttivaModale=document.getElementById('divAttivaModale');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTQzOTJkN2IxMTAwMTkwZTZlYmMiLCJpYXQiOjE3MDk4OTI2NjUsImV4cCI6MTcxMTEwMjI2NX0.3ajAG6PjKKhCnDptXTncAYNx9ckeI7sAohoUfeFQUxg';
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
        if (formValidato() == true) {
            updateData(productObject);
        }
    } else {
        if (formValidato() == true) {
            postData(productObject);
        }
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
        messaggioErrore.innerText = 'Qualcosa è andato storto! '+ error;
        divAttivaModale.click();
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
        location.href = 'index.html?modificaOk';
    }
    catch (error) {
        messaggioErrore.innerText = 'Qualcosa è andato storto! '+ error;
        divAttivaModale.click();
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
        location.href = 'index.html?inserimentoOk';
    }
    catch (error) {
        messaggioErrore.innerText = 'Qualcosa è andato storto! '+ error;
        divAttivaModale.click();
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
        location.href = 'index.html?eliminazioneOk';
    }
    catch (error) {
        messaggioErrore.innerText = 'Qualcosa è andato storto! '+ error;
        divAttivaModale.click();
    }
};

const nascondiFoto = () => {
    document.getElementById('fotoProdotto').style.display = 'none';
};

const resetForm = () => {
    document.getElementById('fotoProdotto').style.display = 'none';
    nome.value = "";
    brand.value = "";
    price.value = 0;
    url.value = "";
    description.value = "";
};

const visualizzaFoto = () => {
    document.getElementById('fotoProdotto').src = url.value;
};

const formValidato = () => {

    if (nome.value == '') {
        messaggioErrore.innerText = 'Inserire nome prodotto';
        saveBtn.setAttribute('data-bs-toggle', 'modal');
        return false;
    }
    if (brand.value == '') {
        messaggioErrore.innerText = 'Inserire brand prodotto';
        saveBtn.setAttribute('data-bs-toggle', 'modal');
        return false;
    }
    if (price.value == 0) {
        messaggioErrore.innerText = 'Inserire prezzo prodotto';
        saveBtn.setAttribute('data-bs-toggle', 'modal');
        return false;
    }
    if (url.value == '') {
        messaggioErrore.innerText = 'Inserire url immagine prodotto';
        saveBtn.setAttribute('data-bs-toggle', 'modal');
        return false;
    }
    if (description.value == '') {
        messaggioErrore.innerText = 'Inserire descrizione prodotto';
        saveBtn.setAttribute('data-bs-toggle', 'modal');
        return false;
    }  
    return true;
};