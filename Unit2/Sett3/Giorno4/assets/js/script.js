const loadImages = document.getElementById('loadImages');
const loadSecondaryImages = document.getElementById('loadSecondaryImages');
const dataURL = 'https://api.pexels.com/v1/search?query=';
const keyAuthorization = 'TXAl4tsq0AH939vI13rKvpyMo7xSgfkSwtTUiEnLKjjvEI0zqABAVoL5';
let lista = [];

loadImages.addEventListener('click', () => {
    readList('mountains');
});

loadSecondaryImages.addEventListener('click', () => {
    readList('sunsets');
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
    for (let i = 0; i < lista.length; i++) {
        imgs[i].src = lista[i].src.original;
    }
}