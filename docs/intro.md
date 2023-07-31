---
sidebar_position: 1
---

# Introduzione

**ENMA** è un'app mobile gestionale dedicata alla **visualizzazione dello storico gestione spese** dei dipendenti **Sirius s.r.l.**.

L'app è compatibile con tutti i dispositivi **Android** e **IOS** ed è sviluppata tramite **React Native** con **Ignite Boilerplate**.

## Getting Started

### Primo Accesso

L'utente, dopo il caricamento della ***loadingPage***, visualizzerà la ***loginPage*** in cui dovrà inserire le credenziali Sirius (e-mail e password) per poter accedere alla sua area riservata.

Se le credenziali saranno corrette verrà rimandato alla pagina ***BiometricAuthenticationScreen*** dove potrà scegliere se accettare i permessi sul riconoscimento biometrico e di registrare il suo pin composto da 4 numeri.

Una volta correttamente inseriti verrà rimandato alla ***HomePage*** qui vedrà un placeHolder di come la pagina sarà effettuata in futuro, in basso avrà la barra di navigazione composta da:

- HomePage, 
- Gestione delle Presenze (atttualmente vuota e non sarà implementata al rilascio), 
- Gestione dei Rimborsi, 
- Impostazioni.

### Dopo il Primo Accessso

L'utente, **dopo aver effettuato il primo accesso**, non visualizzerà più la loginPage ma verrà riportato direttamente alla pagina ***BiometricAuthenticationScreen*** dove, se accettato in precedenza, potrà inserire le credenziali biometriche oppure inserire il pin precedentemente impostate. 

Nel caso in cui non dovesse più **ricorsarsi il pin** utilizzzato allora potrà ritornare alla loginPage dove potrà, dopo aver reinserito le sue credenziali di accesso, impostare un nuovo pin.


## Design Consideration

L'app è stata creata seguendo le linee guida del suo relativo progetto **Figma**. 

Durante il suo sviluppo ci siamo concentrati sulle seguenti **carattristiche principali**:

- Utilizzo di **forme curve e naturali** per coinvolgere il più possibile l'utente
- **Desgin minimal** per non sconcentrare la vista su elementi superflui
- **Palette di colori** che ricordano il branding della Sirius s.r.l.
- Uso opzionale della **Dark Mode** per poter dare una maggior scelta alle preferenze di visualizzazione per l'utente

In tutte le pagine dell'area riservata è presenta la propria immagine di profilo che si potrà modificare nelle impostazioni,

La **lingua** viene selezionata in base a quella di sistema, lingue supportate italiano e inglese

