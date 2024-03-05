//esercizio 1
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



class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }
    sameOwner(owner) {
        if (this.ownerName === owner) {
            return true;
        } else {
            return false;
        }
    }
}
const pet1 = new Pet('Fuffy', 'Francesco', 'Gatto', 'Soriano');
const pet2 = new Pet('Blackie', 'Gaetano', 'Cane', 'Pastore Tedesco');
const pet3 = new Pet('Rosie', 'Gaetano', 'Gatto', 'Siamese');
console.log(pet3.sameOwner(pet2.ownerName));
console.log(pet3.sameOwner(pet1.ownerName));



//esercizio 2
const btnAdd = document.getElementById('aggiungi');
const records = document.getElementById('records');
elencoAnimali = [];

window.addEventListener('load', e => {
    e.preventDefault;
    const records = localStorage.getItem('records').split(';');

    // records.forEach(el => {
    //     const campo = el.split(',');
    //     const animale = new Pet(campo[0], campo[1], campo[2], campo[3]);
    //     elencoAnimali.push(animale);
    // });

    for (let i = 0; i < records.length - 1; i++) {
        const campo = records[i].split(',');
        const animale = new Pet(campo[0], campo[1], campo[2], campo[3]);
        elencoAnimali.push(animale);
    }
    stampaRecords();




    // elencoAnimali = record.split(',');
    // stampaRecords();

});

btnAdd.addEventListener('click', e => {
    e.preventDefault;

    const nome = document.getElementById('nomeAnimale').value;
    const proprietario = document.getElementById('proprietario').value;
    const specie = document.getElementById('specie').value;
    const razza = document.getElementById('razza').value;

    const animale = new Pet(nome, proprietario, specie, razza);
    elencoAnimali.push(animale);
    document.getElementById('form1').reset();
    stampaRecords();
    salvaDati();
});

const stampaRecords = () => {

    records.innerHTML = '';
    elencoAnimali.forEach(animale => {
        const tdNome = document.createElement('td');
        tdNome.innerText = animale.petName;

        const tdProp = document.createElement('td');
        tdProp.innerText = animale.ownerName;

        const tdSpecie = document.createElement('td');
        tdSpecie.innerText = animale.species;

        const tdRazza = document.createElement('td');
        tdRazza.innerText = animale.breed;

        const newTr = document.createElement('tr');
        newTr.append(tdNome, tdProp, tdSpecie, tdRazza);

        records.appendChild(newTr);
    });
};

const salvaDati = () => {
    let recordsStorage = '';
    elencoAnimali.forEach(animale => {
        recordsStorage += `${animale.petName},${animale.ownerName},${animale.species},${animale.breed};`;
    });
    localStorage.setItem('records', recordsStorage);
};