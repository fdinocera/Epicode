


const buttonInserisci = document.getElementById('inserisci');
const buttonRimuovi = document.getElementById('rimuovi');


buttonInserisci.addEventListener('click', () => {
    const inputValue= document.getElementById('input').value;
    localStorage.setItem('usr', inputValue);
});

buttonRimuovi.addEventListener('click', () => {

    //const dati = localStorage.getItem('usr');
    localStorage.clear();
});