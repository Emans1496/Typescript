/* CLASSE STARTUP*/
var Startup = /** @class */ (function () {
    function Startup(nome, settoreFocus, descrizione, prodottiEServizi) {
        this.nome = nome;
        this.settoreFocus = settoreFocus;
        this.descrizione = descrizione;
        this.prodottiEServizi = prodottiEServizi;
    }
    Startup.prototype.riceviIncentivo = function (incentivo) {
        appendOutput("".concat(this.nome, " ha ricevuto l'incentivo: ").concat(incentivo.descrizione, " di ").concat(incentivo.valore, "\u20AC"));
    };
    return Startup;
}());
/* CLASSE INCENTIVO*/
var Incentivo = /** @class */ (function () {
    function Incentivo(codiceIdentificativo, descrizione, valore, criteriDiElegibilita) {
        this.codiceIdentificativo = codiceIdentificativo;
        this.descrizione = descrizione;
        this.valore = valore;
        this.criteriDiElegibilita = criteriDiElegibilita;
    }
    Incentivo.prototype.assegnaAStartup = function (startup) {
        if (this.criteriDiElegibilita.includes(startup.settoreFocus)) {
            startup.riceviIncentivo(this);
            appendOutput("Incentivo ".concat(this.descrizione, " assegnato a ").concat(startup.nome));
        }
        else {
            appendOutput("".concat(startup.nome, " non soddisfa i criteri di eleggibilit\u00E0 per ").concat(this.descrizione));
        }
    };
    return Incentivo;
}());
/* CLASSE CITTADINO*/
var Cittadino = /** @class */ (function () {
    function Cittadino(nome, cognome, eta, interessiSportivi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }
    Cittadino.prototype.partecipaAttività = function (startup) {
        appendOutput("".concat(this.nome, " ").concat(this.cognome, " sta partecipando alle attivit\u00E0 di ").concat(startup.nome));
    };
    return Cittadino;
}());
// Funzione per aggiungere output al DOM
function appendOutput(message) {
    var outputDiv = document.getElementById('output');
    if (outputDiv) {
        var p = document.createElement('p');
        p.textContent = message;
        outputDiv.appendChild(p);
    }
}
// Istanzia gli oggetti Startup
var startup1 = new Startup("SportTech", "tecnologie wearable", "Innovazioni nel settore dei dispositivi indossabili", ["Smartwatch", "Fitness Tracker"]);
var startup2 = new Startup("FitApp", "app per il fitness", "App per monitorare e migliorare la forma fisica", ["App mobile per allenamenti", "Programmi di allenamento personalizzati"]);
// Istanzia gli oggetti Incentivo
var incentivo1 = new Incentivo("INC123", "Incentivo per tecnologie wearable", 10000, ["tecnologie wearable"]);
var incentivo2 = new Incentivo("INC456", "Incentivo per app per il fitness", 15000, ["app per il fitness"]);
// Istanzia gli oggetti Cittadino
var cittadino1 = new Cittadino("Mario", "Rossi", 30, ["Corsa", "Ciclismo"]);
var cittadino2 = new Cittadino("Lucia", "Bianchi", 25, ["Yoga", "Nuoto"]);
// Assegna incentivi alle startup
incentivo1.assegnaAStartup(startup1);
incentivo2.assegnaAStartup(startup2);
// I cittadini partecipano alle attività delle startup
cittadino1.partecipaAttività(startup1);
cittadino2.partecipaAttività(startup2);
