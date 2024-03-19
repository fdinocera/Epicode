const gestisci = document.getElementById('gestisci') as HTMLElement
const manageUser = document.getElementById('manageUser') as HTMLElement

const ricarica = document.getElementById('ricarica') as HTMLInputElement
const chiamate = document.getElementById('chiamate') as HTMLInputElement



let nome: string
let cognome: string
let charge: number
let calls: number



// const utente = document.getElementById("utente") as HTMLElement;
// const credito = document.getElementById("credito") as HTMLElement;
// const aggiungiCredito = document.getElementById("aggiungiCredito") as HTMLElement;
// const chiamata = document.getElementById("chiamata") as HTMLElement;
// const minuti = document.getElementById("minuti") as HTMLElement;

interface Smartphone {
    nome: string;
    cognome: string;
    credito: number;
    numeroChiamate: number;
}

class User implements Smartphone {
    nome: string;
    cognome: string;

    //euro
    credito: number = 0;

    //minuti
    numeroChiamate: number = 0;

    constructor(_nome: string, _cognome: string) {
        this.nome = _nome;
        this.cognome = _cognome;
    }

    ricarica(nuovoCredito: number) {
        this.credito += nuovoCredito;
    }

    chiamata(minuti: number): void {
        if (this.credito >= minuti) {
            this.credito -= minuti;            
        } else {
            alert("credito insufficiente");
        }
        this.numeroChiamate += minuti;
    }
    chiama404(): string {
        return this.credito.toString();
    }
    getNumeroChiamata(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}



//evento load 
// addEventListener("load", init);
// function init() {
//     utente.innerText = `utente: ${myUser.nome} ${myUser.cognome}`;
//     credito.innerText = "Credito disponibile: " + myUser.chiama404();
//     minuti.innerText = "Credito disponibile: " + myUser.numeroChiamata;
// }

// aggiungiCredito.addEventListener("click", () => {
//     //esegue ricarica
//     myUser.ricarica(25);
//     credito.innerText = "Credito disponibile: " + myUser.chiama404();
// });

// chiamata.addEventListener("click", () => {
//     //addebita 3 minuti
//     myUser.chiamata(3);
//     credito.innerText = "Credito disponibile: " + myUser.chiama404();
//     minuti.innerText = "Minuti utilizzati in chiamate:" + myUser.getNumeroChiamata();
// });

let myUser = new User("Mario", "Rossi");
//myUser.ricarica(25);



//tasto verde "Gestisci utente"
gestisci.addEventListener('click', function (e) {
    e.preventDefault();

    //ricariche
    charge = Number(ricarica.value)
    myUser.ricarica(charge)

    //chiamate
    calls = Number(chiamate.value)
    myUser.chiamata(calls)


    //l'utente Mario Rossi ha effettuato 0 chiamate; il suo credito residuo è di euro 10
    manageUser.innerText = `L'utente ${myUser.nome} ${myUser.cognome} ha effettuato ${myUser.numeroChiamate} chiamate; il suo credito residuo è di euro ${myUser.credito}`
});

