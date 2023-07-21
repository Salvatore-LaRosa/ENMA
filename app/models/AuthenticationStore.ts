import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    authToken: types.maybe(types.string),
    authPin: "",
    authEmail: "",
    authOldPin: "",
  })
  .views((store) => ({
    get isAuthenticated() {
      return store.authToken != undefined
    },
    get isPinLenghtAuthenticated() {
      return store.authOldPin.length === 4
    },
    get validationPinError() {
      if (store.authPin.length !== 4) return "deve contenere 4 numeri"
      return ""
    },
    get isValidated() {
      return store.authPin === store.authOldPin
    },
    get validationOldPinError() {
      if (store.authPin !== store.authOldPin) return "Pin sbagliato, se non lo ricordi clicca su Reimposta il pin"
      return ""
    },
    get validationEmailError() {
      if (store.authEmail.length === 0) return "can't be blank"
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.authEmail))
        return "must be a valid email address"
      return ""
    },
  }))
  .actions((store) => ({
    setAuthToken(value?: string) {
      store.authToken = value
    },
    setAuthEmail(value: string) {
      store.authEmail = value.replace(/ /g, "")
    },
    logout() {
      store.authToken = undefined
      store.authEmail = ""
    },
    reset() {
      store.authOldPin = ""
      store.authToken = undefined
    },
    setAuthPin(value?: string) {
      store.authPin = value
      console.log("AuthPin" + store.authPin)
    },
    setAuthOldPin(value?: string) {
      store.authOldPin = value
      console.log("AuthOldPin" + store.authOldPin)
    }
  }))

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}
