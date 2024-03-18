interface Smartphone {
    nome: string
    cognome: string
    creditoDisponibile: number

    ricarica(nuovoCredito: number): void
    chiamata(minuti: number): void

}

class User implements Smartphone {
    nome: string
    cognome: string
    creditoDisponibile: number = 0

    constructor(_nome: string, _cognome: string) {
        this.nome = _nome
        this.cognome = _cognome
    }


    ricarica(nuovoCredito: number) {
        this.creditoDisponibile += nuovoCredito
    }
    chiamata(minuti: number): void {
        this.creditoDisponibile = minuti
    }
}

const myUser = new User('Mario', 'Rossi')
myUser.ricarica(25)

console.log('utente: ' + myUser.nome + myUser.cognome)
console.log('credito attuale: '+myUser.creditoDisponibile)
