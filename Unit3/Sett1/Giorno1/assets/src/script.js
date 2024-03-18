var User = /** @class */ (function () {
    function User(_nome, _cognome) {
        this.creditoDisponibile = 0;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    User.prototype.ricarica = function (nuovoCredito) {
        this.creditoDisponibile += nuovoCredito;
    };
    User.prototype.chiamata = function (minuti) {
        this.creditoDisponibile = minuti;
    };
    return User;
}());
var myUser = new User('Mario', 'Rossi');
myUser.ricarica(25);
console.log('utente: ' + myUser.nome + myUser.cognome);
console.log('credito attuale: ' + myUser.creditoDisponibile);
