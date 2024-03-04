class User {
    constructor(_firstName, _lastName, _age = 0, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    confrontaEta(nome, cognome, eta = 0) {
        if (this.age > eta) {
            return `${this.firstName} ${this.lastName} (${this.age} anni) è più vecchio di ${nome} ${cognome} (${eta} anni)`;
        } else {
            if (this.age < eta) {
                return `${this.firstName} ${this.lastName} (${this.age} anni) è più giovane di ${nome} ${cognome} (${eta} anni)`;
            } else {
                return `${this.firstName} ${this.lastName} (${this.age} anni) ha la stessa età di ${nome} ${cognome}  (${eta} anni)`;
            }
        }
    }
}

const utente1 = new User('Paolo', 'Rossi', 4);
const utente2 = new User('Giovanni', 'Bianchi', 34);


const msgConfrontoEta = utente1.confrontaEta(utente2.firstName, utente2.lastName, utente2.age);
console.log(msgConfrontoEta);




