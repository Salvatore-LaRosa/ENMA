# ENMA

Front-end of a cross-platform (iOS and Android) expense-reimbursement app for employees, built in React Native during my internship at Sirius s.r.l., Turin (07/2023 – 09/2023). I developed it independently, under the supervision of the company tutor.

> 🇮🇹 Front-end di un'app iOS e Android per i rimborsi spese dei dipendenti, sviluppata durante lo stage in Sirius s.r.l. (07–09/2023).

**Status: UI prototype.** The backend was not integrated: login and expense data are mocked locally (see [Limitations](#limitations)).

<!-- TODO: add 3-4 screenshots (login, PIN/biometric screen, expense list, add expense, dark mode) in docs/screenshots/ -->

## What it does

- Login screen with form validation and session persistence across app launches
- Access with a 4-digit PIN or biometrics (`expo-local-authentication`)
- Expense list and "add expense" flow (project, category, date, amount, notes)
- Receipt photo from camera or gallery (`expo-image-picker`)
- Dark and light theme, following the system setting
- Italian / English interface, switchable from Settings
- Bottom-tab navigation: Home, Presenze (attendance, placeholder), Rimborsi, Impostazioni

## Tech stack

React Native 0.71 (Ignite boilerplate, Expo modules) · TypeScript · MobX-State-Tree · React Navigation · i18n-js · AsyncStorage · apisauce · Jest.
UI designed in Figma, user documentation built with Docusaurus.

## Limitations

- The login does not call a backend: it validates the email format and sets a placeholder token.
- Expenses are kept in local state; the receipt photo is shown as a preview but not uploaded.
- The attendance tab is a "work in progress" screen.
- The PIN is part of the persisted app state in AsyncStorage, not in a secure keystore. A production version should use `expo-secure-store`.

## Project structure

```
app/
  components/   reusable UI components and SVG icons
  screens/      Login, BiometricAuthentication, Home, Rimborsi, AggiungiRimborso, Impostazioni
  navigators/   stack and bottom-tab navigation
  models/       MobX-State-Tree stores (authentication, expenses)
  i18n/         Italian and English strings
  theme/        colors, spacing, typography
  services/api/ API client (mocked)
android/  ios/  native projects
```

## Run it locally

```bash
npm install
npm run expo:start      # or: npm run android / npm run ios (native toolchain required)
npm test
```
<!-- TODO: verify these commands on a clean clone before publishing -->

## Documentation

User documentation (Docusaurus): <!-- TODO: link to the GitHub Pages site, or to the docs repo -->

## Author

Salvatore La Rosa · [LinkedIn](https://linkedin.com/in/larosa-salvatore) · [GitHub](https://github.com/Salvatore-LaRosa)
