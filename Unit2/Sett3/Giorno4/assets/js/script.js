const loadImages = document.getElementById('loadImages');
const loadSecondaryImages = document.getElementById('loadSecondaryImages');
const dataURL = 'https://api.pexels.com/v1/search?query=';
const keyAuthorization = 'TXAl4tsq0AH939vI13rKvpyMo7xSgfkSwtTUiEnLKjjvEI0zqABAVoL5';
const searchButton = document.getElementById('searchButton');
const searchField = document.getElementById('searchValue');
const fotoDettaglio = document.getElementById('fotoDettaglio');

let lista = [];

loadImages.addEventListener('click', () => {
    readList('mountains');
});

loadSecondaryImages.addEventListener('click', () => {
    readList('sunsets');
});

searchButton.addEventListener('click', () => {
    readList(searchField.value);
});

async function readList(query) {
    try {
        let read = await fetch(dataURL + query, {
            method: 'GET',
            headers: {
                'Authorization': keyAuthorization,
                'Content-Type': 'application/json'
            }
        });
        let response = await read.json();
        lista = response.photos;
        if (lista.length > 0) {
            printData();
        }
    } catch (error) {
        console.log(error);
    }
}

function printData() {
    let imgs = document.querySelectorAll('.bd-placeholder-img');
    let buttons = document.querySelectorAll('.btn-outline-secondary:last-child');
    let tag9mins = document.querySelectorAll('small.text-muted');
    let tagh5 = document.querySelectorAll('h5');

    for (let i = 0; i < lista.length; i++) {
        imgs[i].src = lista[i].src.original;
        imgs[i].setAttribute('onclick', `photoDetail(${i})`);
        tagh5[i].setAttribute('onclick', `photoDetail(${i})`);
        buttons[i].innerText = "Hide";
        buttons[i].setAttribute('onclick', `nascondiFoto('${i}')`);
        tag9mins[i].innerText = `${lista[i].id}`;
    }
}

function nascondiFoto(index) {
    lista.splice(index, 1);
    if (lista.length > 0) {
        printData();
    }
}

function photoDetail(index) {    
    localStorage.setItem('record', JSON.stringify(lista[index]));
    location.href = 'photoDetail.html';
}