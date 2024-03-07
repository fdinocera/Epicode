const fotoDettaglio = document.getElementById('fotoDettaglio');

addEventListener('load', () => {

    let record = JSON.parse(localStorage.getItem('record'));
    fotoDettaglio.src = record.src.original;
    //imgs[i].src = lista[i].src.original;

});