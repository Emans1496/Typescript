/*---------------------------INTERFACCIA STARTUP*/
interface IStartup {
    nome: string;
    settoreFocus: string;
    descrizione: string;
    prodottiEServizi: string[];
    riceviIncentivo(incentivo: IIncentivo): void;
}

/* CLASSE STARTUP*/
class Startup implements IStartup {
    nome: string;
    settoreFocus: string;
    descrizione: string;
    prodottiEServizi: string[];

    constructor(nome: string, settoreFocus: string, descrizione: string, prodottiEServizi: string[]) {
        this.nome = nome;
        this.settoreFocus = settoreFocus;
        this.descrizione = descrizione;
        this.prodottiEServizi = prodottiEServizi;
    }

    riceviIncentivo(incentivo: IIncentivo): void {
        appendOutput(`${this.nome} ha ricevuto l'incentivo: ${incentivo.descrizione} di ${incentivo.valore}€`);
    }
}

/*---------------------------INTERFACCIA INCENTIVO*/
interface IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    valore: number;
    criteriDiElegibilita: string[];
    assegnaAStartup(startup: IStartup): void;
}

/* CLASSE INCENTIVO*/
class Incentivo implements IIncentivo {
    constructor(
        public codiceIdentificativo: string,
        public descrizione: string,
        public valore: number,
        public criteriDiElegibilita: string[]
    ) {}

    assegnaAStartup(startup: IStartup): void {
        if (this.criteriDiElegibilita.includes(startup.settoreFocus)) {
            startup.riceviIncentivo(this);
            appendOutput(`Incentivo ${this.descrizione} assegnato a ${startup.nome}`);
        } else {
            appendOutput(`${startup.nome} non soddisfa i criteri di eleggibilità per ${this.descrizione}`);
        }
    }
}

/*---------------------------INTERFACCIA CITTADINO*/
interface ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];
    partecipaAttività(startup: IStartup): void;
}

/* CLASSE CITTADINO*/
class Cittadino implements ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];
    
    constructor(nome: string, cognome: string, eta: number, interessiSportivi: string[]) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }

    partecipaAttività(startup: IStartup): void {
        appendOutput(`${this.nome} ${this.cognome} sta partecipando alle attività di ${startup.nome}`);
    }
}

// Funzione per aggiungere output al DOM
function appendOutput(message: string) {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        const p = document.createElement('p');
        p.textContent = message;
        outputDiv.appendChild(p);
    }
}

// Istanzia gli oggetti Startup
const startup1 = new Startup("SportTech", "tecnologie wearable", "Innovazioni nel settore dei dispositivi indossabili", ["Smartwatch", "Fitness Tracker"]);
const startup2 = new Startup("FitApp", "app per il fitness", "App per monitorare e migliorare la forma fisica", ["App mobile per allenamenti", "Programmi di allenamento personalizzati"]);

// Istanzia gli oggetti Incentivo
const incentivo1 = new Incentivo("INC123", "Incentivo per tecnologie wearable", 10000, ["tecnologie wearable"]);
const incentivo2 = new Incentivo("INC456", "Incentivo per app per il fitness", 15000, ["app per il fitness"]);

// Istanzia gli oggetti Cittadino
const cittadino1 = new Cittadino("Mario", "Rossi", 30, ["Corsa", "Ciclismo"]);
const cittadino2 = new Cittadino("Lucia", "Bianchi", 25, ["Yoga", "Nuoto"]);

// Assegna incentivi alle startup
incentivo1.assegnaAStartup(startup1);
incentivo2.assegnaAStartup(startup2);

// I cittadini partecipano alle attività delle startup
cittadino1.partecipaAttività(startup1);
cittadino2.partecipaAttività(startup2);
