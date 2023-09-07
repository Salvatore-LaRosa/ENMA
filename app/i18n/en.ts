const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },

  loginScreen: {
    title: "ENMA",
    emailFieldPlaceholder: "Username",
    passwordFieldPlaceholder: "Password",
    tapToSignIn: "Login",
  },
  aprovedAuthenitcationScreen: {
    title: "Welcome Back ",
    pinFieldPlaceholder: "Pin",
    button: "Login",
    resetPin: "Reset pin"
  },
  refusedAuthenitcationScreen: {
    title: "Insercisci il pin",
    pinFieldPlaceholder: "Pin",
    button: "Accedi"
  },
  homeScreen: {
    header: "Home",
    statsTitle: "Time (Dec)",
    refoundTitle: "Refound (Dec)",
    boardTitle: "WatchBoard",
    boardSubTitle1: "Welfare regulation 2022",
    boardText1: "The 2022 welfare regulation is attached: Welfare2022.pdf",
    boardSubTitle2: "Covid 19 - Company Provisions",
    boardText2: "Covid AZ Rev 09.pdf\nAttachment 2: Rules to be respected.pdf",
    button: "Look at the calendar"
  },
  impostazioniScreen: {
    header: "Settings",
    title1: "Generals",
    languageTitle: "Language",
    title2: "Sistem",
    logoutTitle: "Logout",
    profileTitle: "Profile picture",
    title3: "Profile",
  },
  rimborsiScreen: {
    header: "Exspences Refound",
    placeHolder: "Search",
    textLeft: "Refounds: ",
    textRight: "Total: ",
  },
  addRimborsiScreen: {
    header: "Add Refound",
    loadPhotoTitle: "Upload Image",
    order: "Order",
    categories: "Categories",
    placeholderCategories: "Add Amount",
    amount: "Amount",
    placeholderAmount: "Add Amount",
    note: "Note",
    placeholderNote: "Add Notes",
    button: "Add",
    date: "Date",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
}

export default en
export type Translations = typeof en
