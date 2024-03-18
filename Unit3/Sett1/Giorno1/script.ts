const utente = document.getElementById("utente");
const credito = document.getElementById("credito");
const aggiungiCredito = document.getElementById("aggiungiCredito");
const chiamata = document.getElementById("chiamata");
const minuti = document.getElementById("minuti");

interface Smartphone {
  nome: string;
  cognome: string;
  creditoDisponibile: number;
  numeroChiamata: number;

  ricarica(nuovoCredito: number): void;
  chiamata(minuti: number): void;
  chiama404(): string;
  getNumeroChiamata(): number;
  azzeraChiamate(): void;
}

class User implements Smartphone {
  nome: string;
  cognome: string;

  //euro
  creditoDisponibile: number = 0;

  //minuti
  numeroChiamata: number = 0;

  constructor(_nome: string, _cognome: string) {
    this.nome = _nome;
    this.cognome = _cognome;
  }

  ricarica(nuovoCredito: number) {
    this.creditoDisponibile += nuovoCredito;
  }

  chiamata(minuti: number): void {
    if (this.creditoDisponibile >= minuti) {
      this.creditoDisponibile -= minuti;
      this.numeroChiamata += minuti;
    } else {
      alert("credito insufficiente");
    }
    this.numeroChiamata += minuti;
  }
  chiama404(): string {
    return this.creditoDisponibile.toString();
  }
  getNumeroChiamata(): number {
    return this.numeroChiamata;
  }
  azzeraChiamate(): void {
    this.numeroChiamata = 0;
  }
}

//myUser.ricarica(100);
//console.log("utente: " + myUser.nome + " " + myUser.cognome);
//console.log("credito attuale: " + myUser.creditoDisponibile);

const myUser = new User("Mario", "Rossi");
myUser.ricarica(25);


//evento load
addEventListener("load", init);
function init() {
  if (utente !== null) {
    utente.innerText = `utente: ${myUser.nome} ${myUser.cognome}`;
    if (credito !== null) {
      credito.innerText = "Credito disponibile: " + myUser.chiama404();
    }
    if (minuti !== null) {
        minuti.innerText = "Credito disponibile: " + myUser.numeroChiamata;
      }
  }
}

//ricarica di 25
if (aggiungiCredito !== null) {
  aggiungiCredito.addEventListener("click", () => {
    //esegue ricarica
    myUser.ricarica(25);

    if (credito !== null) {
      credito.innerText = "Credito disponibile: " + myUser.chiama404();
    }
  });
}

//chiamata di 3 minuti
if (chiamata !== null) {
  chiamata.addEventListener("click", () => {
    //addebita 3 minuti
    myUser.chiamata(3);

    if (credito !== null) {
      credito.innerText = "Credito disponibile: " + myUser.chiama404();

      if (minuti !== null) {
        minuti.innerText =
          "Minuti utilizzati in chiamate:" + myUser.getNumeroChiamata();
      }
    }
  });
}
