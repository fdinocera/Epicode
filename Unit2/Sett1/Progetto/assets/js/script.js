//globali html
const testata = document.getElementById('testata');
const getStarted = document.getElementById('getStarted');

addEventListener('scroll', (e) => {

    if (window.scrollY >= 420) {
        //TESTATA BIANCA
        testata.style.backgroundColor = 'rgb(255, 255, 255)';

        //PULSANTE VERDE        
        getStarted.style.backgroundColor = 'rgb(21, 109, 18)';

        //animazione testata
        getStarted.style.animation = 'fadeInAnimation';
        getStarted.style.animationDuration = '3s';
    } else {
        //TESTATA GIALLA
        testata.style.backgroundColor = 'rgb(255, 192, 23)';

        //PULSANTE NERO
        getStarted.style.backgroundColor = 'rgb(19, 19, 19)';

        //animazione testata
        getStarted.style.animation = 'fadeInAnimation';
        getStarted.style.animationDuration = '3s';
        getStarted.style.animationDirection = 'reverse';
    }
});

function init() {
    const nEmme = 31;
    const righe = 15;
    const divEmme = document.getElementById('emme');

    for (let j = 0; j < righe; j++) {
        let newDiv = document.createElement('div');
        for (let i = 0; i < nEmme; i++) {

            let newSpan = document.createElement('span');
            newSpan.innerText = 'M';

            const random = Math.floor(Math.random() * 2);
            if (random === 0) {
                newSpan.style.opacity = '0';
            } else {
                newSpan.style.opacity = '1';
            }
            newDiv.appendChild(newSpan);
        }
        divEmme.appendChild(newDiv);
    }
}

function sostituzioneRandom() {

    let emmeElements = document.querySelectorAll('#emme div span');

    const random = Math.floor(Math.random() * emmeElements.length);

    if (emmeElements[random].style.opacity === '1') {
        emmeElements[random].style.opacity = '0';
    } else {
        emmeElements[random].style.opacity = '1';
    }
}

init();
setInterval(sostituzioneRandom, 40);