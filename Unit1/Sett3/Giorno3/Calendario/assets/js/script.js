// Generazione della griglia del calendario

// Oggi che giorno è?
const now = new Date();
const getYear = now.getFullYear();
const getMonth = now.getMonth(); // Variabile globale contenente il numero del mese in corso, che sarà usata in più di una funzione

// Adesso sappiamo in che mese siamo, dobbiamo stabilire questo mese quanti giorni ha; inoltre dobbiamo anche creare un array del mese, che conterrà tanti array quanti sono i giorni del mese. Il numero di giorni, quindi, genererà la griglia visiva e l'array

const appointments = [];

// L'oggetto Date() retituisce il numero del mese, da 0 a 11: ho bisogno di un array con i nomi dei mesi
const monthNames = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre'
];

// Scriviamo il nome del mese nell'h1 dell'html
const printCurrentMonthInH1 = () => {
    const title = document.querySelector('h1');
    const currentMonth = monthNames[getMonth]; // Con il numero del mese presente nella variabile globale pesco nel mio array il mese corrispondente
    title.innerText = currentMonth;
};
printCurrentMonthInH1();

// Dobbiamo calcolare il numeri dei giorni del mese trovato, per generare la griglia e l'array
// Mi serve prendere il primo giorno del mese successivo al mese trovato e poi ottenere il giorno prima, che sarà l'ultimo giorno del mese in corso; il numero dell'ultimo giorno del mese in corso corrisponderà al numero di giorno totali

const dayInThisMonth = () => {
    const lastDayInTheMonth = new Date(getYear, getMonth + 1, 0); // In questo momento gli sto chiedendo, ad esempio, lo 0 marzo 2024; il giorno 0 ovviamente non esiste, ed essendo il numero prima di uno, corrisponde al giorno prima, cioè, ad esempio, al 29 febbraio 2024
    const numberOfTheDay = lastDayInTheMonth.getDate();
    return numberOfTheDay;
};
dayInThisMonth();

// Ho bisogno di eliminare la classe selected, se presente, altrimenti quando clicco su un giorno, il giorno precedente rimane selezionato
const unSelectAllDays = () => {
    const previousSelected = document.querySelector('.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }
};

// Funzione per gestire la sezione meetingday
const changeMeetingDaySection = (indexOfTheDay) => {
    const rightSpan = document.getElementById('newMeetingDay');
    rightSpan.classList.add('hasDay');
    rightSpan.innerText = indexOfTheDay + 1;
};

const showAppointments = (indexOfTheDay) => {
    //popola lista impegni
    //1. leggere appointments in array corrispondente
    const appointmensForthisDay = appointments[indexOfTheDay];
    //2. contenitore lista
    const appointmentsList = document.querySelector('#appointments ul');
    //3. ciclare gli appuntamentio del giono e creare gli elementi di lista
    appointmentsList.innerHTML = '';
    appointmensForthisDay.forEach((appointment) => {
        const newLi = document.createElement('li');
        newLi.innerText = appointment;
        appointmentsList.appendChild(newLi);
    });
    //ordina per orario
    ordinaAppuntamentiPerOra(indexOfTheDay);

    //css non ora block
    const appointmentDiv = document.getElementById('appointments');
    appointmentDiv.style.display = 'block';
};

const createDays = (numberOfDays) => {
    const calendarDiv = document.getElementById('calendar');
    // Ciclando il numero di giorni creo e appendo i div corrispondenti al numero di giorni nel contenitore padre calendar
    for (let i = 0; i < numberOfDays; i++) {
        const dayCellDiv = document.createElement('div');
        dayCellDiv.classList.add('day');
        // Rendiamo il div del giorno cliccabile
        dayCellDiv.addEventListener('click', function () {
            unSelectAllDays();
            dayCellDiv.classList.add('selected');
            // adesso deve comparire la sezione meetingday, con gli eventuali impegni del giorno
            changeMeetingDaySection(i);
            //mostrare eventuali impegni giornata
            if (appointments[i].length > 0) {
                showAppointments(i);
            } else {
                const appointmentDiv = document.getElementById('appointments');
                appointmentDiv.style.display = 'none';
            }
        });
        //creo div singoli giorni
        //1. scrivo il numero del gionro
        const cellValue = document.createElement('h3');
        cellValue.innerText = i + 1;
        dayCellDiv.appendChild(cellValue);
        //2 appendo div singolo giorno a  calendar
        calendarDiv.appendChild(dayCellDiv);

        //popolo array con array corrispondente al singo giorno
        appointments.push([]);
    }
    console.log(appointments);
};

createDays(dayInThisMonth());

const handleFormSubmit = (e) => {
    e.preventDefault();
    //leggere il giorno dselezionato
    const selectedDay = document.getElementById('newMeetingDay').innerText;
    // leggere ora
    const meetingTime = document.getElementById('newMeetingTime').value;
    //leggere testo
    const meetingName = document.getElementById('newMeetingName').value;
    // in unica stringa orario e testo impegno
    const meetingString = `${meetingTime} - ${meetingName}`;
    //stringa in array dentro appointment corrispondente al giorno
    const indiceGiorno = parseInt(selectedDay) - 1;
    appointments[indiceGiorno].push(meetingString);

    //indicare con palino giorni con impegni
    const dot = document.createElement('span');
    dot.classList.add('dot');
    // trovo cella gijorno cliccato
    const selectedCell = document.querySelector('.selected');
    // se giorno ha pallino, non lo aggiungo
    if (!selectedCell.querySelector('.dot')) {
        selectedCell.appendChild(dot);
    }
    //mostra impegni giorno    
    showAppointments(indiceGiorno);
};


//avvio creando eventListner su sub mit fomr
const meetingForm = document.querySelector('form');
meetingForm.addEventListener('submit', handleFormSubmit);

const ordinaAppuntamentiPerOra = (indice) => {

    const arrayDaOrdinare = [];
    const orario = [];
    appointments[indice].forEach(element => {
        arrayDaOrdinare.push(element);
        const campi = element.split(' ');
        orario.push(campo[0]);
    });
    console.log(orario);
    console.log(arrayDaOrdinare);

    //riappende elementi ordinati
    const appointmentsList = document.getElementById('appointments');
    appointmentsList.innerHTML = '';
    appointmensForthisDay.forEach((appointment) => {
        const newLi = document.createElement('li');
        newLi.innerText = appointment;
        appointmentsList.appendChild(newLi);
    });
};