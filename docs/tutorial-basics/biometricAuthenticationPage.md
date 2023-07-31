---
sidebar_position: 2
---

# Pagina di Autenticazione

Pagina dedicata al riconoscimento delle **credenziali biometriche** o al riconoscimento del **pin** per poter accedere alla propria area riservata.

## Primo Accesso

L'utente, **essendo che questa è il suo primo accesso**, sarà incaricato di accettare o disdire l'utilizzo dell'autenticazione biometrica che, se supportato dal proprio dispositivo, potrà accedere tramite **riconoscimento dell'impronta digitale** o **tramite riconoscimento facciale**, e di inserire, nell'apposito TextField, un **pin numerico composto da 4 caratteri**.

Una volta oppurtamente inserito **il sistema memorizzerà il pin inserito** e l'utente sarà indirizzato alla HomePage della sua area riservata.

## Dopo il Primo Accesso

Una volta che avrà già salvato il pin durante il primo accesso, l'utente al momento dell'avvio dell'applicazione sarà indirizzato automaticamente in questa pagina saltando la loginPage.

Qui potra accedere tramite le credenziali biometriche che, se accettate in precedenza, **verranno richieste in automatico**. Nel caso in cui non volesse accedere tramite credenziali biometriche o nel caso in cui non le avesse accettate in precedenza allor potra accedere tramite pin, se il pin inserito corrisponderà a quello precendentemente registrato allora sarà indirizzato alla homePage della sua area riservata altrimenti verrà visualizzato un messaggio di errore.

### Reset del Pin

Nel caso in cui l'utente non si dovesse più ricordare il pin precedentemente salvato allora potrà, tramite apposito pulsante, **richiedere di inserire un nuovo pin** dove però verrà rimandato alla loginPage e **sarà terminata la sua sessione utente**.
