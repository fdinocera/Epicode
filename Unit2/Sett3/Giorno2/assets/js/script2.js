const tempo = document.getElementById('tempo');
let counter;


addEventListener('load', () => {

    let counter = sessionStorage.getItem('session');

    if (counter === null) {
        counter = 0;
    }

    setInterval(() => {
        tempo.innerText = `Tempo trascorso da inizio ${counter} secondi`;
        counter++;
        sessionStorage.setItem('session', `${counter}`);
    }, 1000);
});

