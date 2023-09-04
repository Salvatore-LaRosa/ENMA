import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    authToken: types.maybe(types.string),
    loginPin: "",
    authEmail: "",
    signinPin: "",
    lang: types.maybe(types.string),
    profileImage: "",
  })
  .views((store) => ({
    get isAuthenticated() {
      return store.authToken != undefined
    },
    get isPinLenghtAuthenticated() {
      return store.signinPin.length === 4
    },
    get validationPinError() {
      if (store.loginPin.length !== 4) return "deve contenere 4 numeri"
      return ""
    },
    get isValidated() {
      return store.loginPin === store.signinPin
    },
    get validationOldPinError() {
      if (store.loginPin.length !== 4) return "deve contenere 4 numeri"
      else if (store.loginPin !== store.signinPin) return "Pin sbagliato, se non lo ricordi clicca su Reimposta il pin"
      return ""
    },
    get validationEmailError() {
      if (store.authEmail.length === 0) return "can't be blank"
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.authEmail))
        return "must be a valid email address"
      return ""
    },
    get language() {
      return store.lang;
    }
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
      store.signinPin = ""
      store.authToken = undefined
    },
    setSigninPin(value?: string) {
      store.signinPin = value
      console.log("SigninPin" + store.signinPin)
    },
    setLoginPin(value?: string) {
      store.loginPin = value
      console.log("LoginPin" + store.loginPin)
    },
    setLanguage(value: string, _props) {
      const { navigation } = _props
      store.lang = value
      console.log("Language: " + store.lang)
    },
    setProfileImage(value: string) {
      store.profileImage = value
      console.log("SetProfileImage")
    }
  }))

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}
