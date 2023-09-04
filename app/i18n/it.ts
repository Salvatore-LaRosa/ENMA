const it = {
  common: {
    ok: "OK!",
    cancel: "Cancella",
    back: "Indietro",
  },
  loginScreen: {
    title: "ENMA",
    emailFieldPlaceholder: "Username",
    passwordFieldPlaceholder: "Password",
    tapToSignIn: "Accedi",
  },
  aprovedAuthenitcationScreen: {
    title: "Bentornato ",
    pinFieldPlaceholder: "Pin",
    button: "Accedi",
    resetPin: "Reimposta il pin"
  },
  refusedAuthenitcationScreen: {
    title: "Insercisci il pin",
    pinFieldPlaceholder: "Pin",
    button: "Accedi"
  },
  homeScreen: {
    header: "Home",
    statsTitle: "Ore (Dec)",
    refoundTitle: "Rimborso Spese (Dec)",
    boardTitle: "Bacheca",
    boardSubTitle1: "Regolamento Walfare 2022",
    boardText1: "In allegato regolamento walfare 2022: Welfare2022.pdf",
    boardSubTitle2: "Covid 19 -  Disposizioni Aziendali",
    boardText2: "Covid AZ Rev 09.pdf\nAllegato 2: Regole da rispettare.pdf",
    button: "Guarda il calendario"
  },
  impostazioniScreen: {
    header: "Impostazioni",
    title1: "Generale",
    languageTitle: "Lingua",
    title2: "Sistema",
    logoutTitle: "Esci",
    profileTitle: "Immagine del Profilo",
    title3: "Profilo",
  },
  rimborsiScreen: {
    header: "Rimborsi Spese",
    placeHolder: "Cerca",
    textLeft: "Rimborsi: ",
    textRight: "Totale: ",
  },
  addRimborsiScreen: {
    header: "Aggiungi Rimborso",
    loadPhotoTitle: "Inserisci l'immagine",
    order: "Commessa",
    categories: "Categoria",
    placeholderCategories: "443,45",
    amount: "Importo",
    placeholderAmount: "500 €",
    note: "Note",
    placeholderNote: "Aggiungi Note",
  },
  errorScreen: {
    title: "Qualcosa è andato storto!",
    friendlySubtitle:
      "Questa è la schermata che i tuoi utenti vedranno in produzione quando viene generato un errore. Ti consigliamo di personalizzare questo messaggio (che si trova in `app/i18n/en.ts`) e probabilmente anche il layout (`app/screens/ErrorScreen`). Se vuoi rimuoverlo completamente, controlla `app/app.tsx` per il componente <ErrorBoundary>.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "Così vuoto... così triste",
      content: "Nessun dato ancora trovato. Prova a fare clic sul pulsante per aggiornare o ricaricare l'app.",
      button: "Proviamo di nuovo",
    },
  }
}

export default it
export type Translations = typeof it
