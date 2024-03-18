var utente = document.getElementById("utente");
var credito = document.getElementById("credito");
var aggiungiCredito = document.getElementById("aggiungiCredito");
var chiamata = document.getElementById("chiamata");
var minuti = document.getElementById("minuti");
var User = /** @class */ (function () {
    function User(_nome, _cognome) {
        //euro
        this.creditoDisponibile = 0;
        //minuti
        this.numeroChiamata = 0;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    User.prototype.ricarica = function (nuovoCredito) {
        this.creditoDisponibile += nuovoCredito;
    };
    User.prototype.chiamata = function (minuti) {
        if (this.creditoDisponibile >= minuti) {
            this.creditoDisponibile -= minuti;
            this.numeroChiamata += minuti;
        }
        else {
            alert("credito insufficiente");
        }
        this.numeroChiamata += minuti;
    };
    User.prototype.chiama404 = function () {
        return this.creditoDisponibile.toString();
    };
    User.prototype.getNumeroChiamata = function () {
        return this.numeroChiamata;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamata = 0;
    };
    return User;
}());
//myUser.ricarica(100);
//console.log("utente: " + myUser.nome + " " + myUser.cognome);
//console.log("credito attuale: " + myUser.creditoDisponibile);
var myUser = new User("Mario", "Rossi");
myUser.ricarica(25);
//evento load
addEventListener("load", init);
function init() {
    if (utente !== null) {
        utente.innerText = "utente: ".concat(myUser.nome, " ").concat(myUser.cognome);
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
    aggiungiCredito.addEventListener("click", function () {
        //esegue ricarica
        myUser.ricarica(25);
        if (credito !== null) {
            credito.innerText = "Credito disponibile: " + myUser.chiama404();
        }
    });
}
//chiamata di 3 minuti
if (chiamata !== null) {
    chiamata.addEventListener("click", function () {
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
