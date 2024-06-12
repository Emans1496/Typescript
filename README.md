# Bonny Startup Incentives

## Descrizione

Il progetto "Bonny Startup Incentives" è una simulazione che modella la struttura operativa di una startup chiamata "Bonny". Questa startup facilita l'accesso dei cittadini italiani ai bonus statali, concentrandosi sulle interazioni tra startup, incentivi statali e cittadini partecipanti. Il progetto utilizza TypeScript per definire interfacce e classi che rappresentano i vari componenti del sistema: `Startup`, `Incentivo` e `Cittadino`.

## Obiettivo

L'obiettivo è mostrare come la tecnologia possa semplificare l'accesso agli incentivi statali e promuovere la partecipazione dei cittadini alle attività sportive, attraverso la modellazione di un sistema interattivo.

## Link CodePen
https://codepen.io/Emans1496/pen/ZENXggx


## Struttura del Progetto

### Interfacce

#### Scelte di Progettazione

Le interfacce sono state utilizzate per definire contratti chiari e rigidi che ogni classe deve rispettare. Questo approccio garantisce che le classi implementino tutte le proprietà e i metodi necessari, favorendo la coerenza e riducendo gli errori.

1. **`IStartup`**: Rappresenta le startup innovative nel settore dello sport.
    - Proprietà:
        - `nome`
        - `settoreFocus`
        - `descrizione`
        - `prodottiEServizi`
    - Metodo:
        - `riceviIncentivo(incentivo: IIncentivo): void`
    - **Motivazione**: Queste proprietà e metodi sono essenziali per descrivere una startup e per gestire l'interazione con gli incentivi statali.

2. **`IIncentivo`**: Rappresenta gli incentivi statali.
    - Proprietà:
        - `codiceIdentificativo`
        - `descrizione`
        - `valore`
        - `criteriDiElegibilita`
    - Metodo:
        - `assegnaAStartup(startup: IStartup): void`
    - **Motivazione**: Le proprietà e i metodi scelti permettono di definire e gestire un incentivo statale, nonché di verificarne l'idoneità per una specifica startup.

3. **`ICittadino`**: Rappresenta i cittadini che partecipano alle iniziative promosse dalle startup.
    - Proprietà:
        - `nome`
        - `cognome`
        - `eta`
        - `interessiSportivi`
    - Metodo:
        - `partecipaAttività(startup: IStartup): void`
    - **Motivazione**: Le proprietà e i metodi sono necessari per descrivere un cittadino e la sua interazione con le attività promosse dalle startup.

### Classi

#### Scelte di Progettazione

Le classi implementano le interfacce definite, aggiungendo la logica di business necessaria per gestire le operazioni specifiche. Questo approccio separa la definizione dell'interfaccia dalla sua implementazione, migliorando la modularità e la manutenibilità del codice.

1. **Classe `Startup`**: Implementa `IStartup`, gestisce le informazioni della startup e riceve incentivi statali.
    - **Motivazione**: Implementa tutti i dettagli necessari per rappresentare una startup e gestire gli incentivi statali che riceve.

2. **Classe `Incentivo`**: Implementa `IIncentivo`, gestisce le informazioni sugli incentivi e li assegna alle startup qualificate.
    - **Motivazione**: Contiene la logica per verificare l'idoneità di una startup a ricevere un incentivo e per assegnare l'incentivo.

3. **Classe `Cittadino`**: Implementa `ICittadino`, rappresenta i cittadini interessati a migliorare o mantenere uno stile di vita attivo.
    - **Motivazione**: Definisce i cittadini e permette loro di partecipare alle attività delle startup, facilitando l'interazione con il sistema.

### Funzione di Output

Una funzione ausiliaria per aggiungere messaggi di output al DOM.

```typescript
function appendOutput(message: string) {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        const p = document.createElement('p');
        p.textContent = message;
        outputDiv.appendChild(p);
    }
}

