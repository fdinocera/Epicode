


const buttonInserisci = document.getElementById('inserisci');
const buttonRimuovi = document.getElementById('rimuovi');
const labelText = document.getElementById('dati');


buttonInserisci.addEventListener('click', () => {

    let inputValue = document.getElementById('input').value;
    localStorage.setItem('usr', inputValue);

    labelText.innerText = inputValue;    
    document.getElementById('input').value = '';
});

buttonRimuovi.addEventListener('click', () => {
    localStorage.clear();
    labelText.innerText = '';
});