var gestisci = document.getElementById('gestisci');
var manageUser = document.getElementById('manageUser');
var ricarica = document.getElementById('ricarica');
var chiamate = document.getElementById('chiamate');
var nome;
var cognome;
var charge;
var calls;
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
var myUser = new User("Mario", "Rossi");
//myUser.ricarica(25);
//tasto verde
gestisci.addEventListener('click', function (e) {
    e.preventDefault();
    //ricariche
    charge = Number(ricarica.value);
    myUser.ricarica(charge);
    //chiamate
    calls = Number(chiamate.value);
    myUser.chiamata(calls);
    //l'utente Mario Rossi ha effettuato 0 chiamate; il suo credito residuo è di euro 10
    manageUser.innerText = "L'utente ".concat(myUser.nome, " ").concat(myUser.cognome, " ha effettuato ").concat(myUser.numeroChiamata, " chiamate; il suo credito residuo \u00E8 di euro ").concat(myUser.creditoDisponibile);
});
