import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { log } from "react-native-reanimated";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

export const RimborsoStoreModel = types
  .model("RimborsoStore")
  .props({
    commessa: types.maybe(types.string),
    categoria: types.maybe(types.string),
    data: new Date(1598051730000),
    orario: types.optional(types.string, ""),
    costo: types.maybe(types.string),
    note: types.maybe(types.string),

    rimborsi: types.array(types.frozen()), // Aggiungi un array 'rimborsi' al tuo store
  })
  .views((store) => ({
    //get
    get validationCommessaError() {
      if (store.commessa == undefined) return "inserire la commessa";
      return "";
    },
    get validationCategoriaError() {
        if (store.categoria == undefined) return "inserire la categoria";
        return "";
    },
    get validationDataError() {
        if (store.data == undefined) return "inserire la data";
        return "";
    },
    get validationCostoError() {
        if (store.costo == undefined) return "inserire il costo";
        return "";
    },
    get getCommessa() {
        return store.commessa;
    },
    get getCategoria() {
        return store.categoria;
    },
    get getData() {
        return store.data;
    },
    get getCosto() {
        return store.costo;
    },
    get getNote() {
        return store.note;
    },
    get getLenght() {
        return store.rimborsi.length;
    }
  }))
  .actions((store) => ({
    //set
    setCommessa(value?: string) {
        store.commessa = value
        console.log("Commessa: ", store.commessa)
    },
    setCategoria(value?: string) {
        store.categoria = value
        console.log("Categoria: ", store.categoria)
    },
    setData(value?: Date) {
        store.data = value
        console.log("Data: ", store.data)
    },
    setCosto(value?: string) {
        store.costo = value
        console.log("Costo: ", store.costo)
    },
    setNote(value?: string) {
        store.note = value
        console.log("Note: ", store.note)
    },
    addRimborso(rimborso: { commessa: string; categoria: string; costo: string; note: string; data: string;}) {
        store.rimborsi.push(rimborso)
        console.log("Rimborso: ", store.rimborsi, ", Lunghezza: ", store.rimborsi.length)
    },
  }))

export interface RimborsoStore extends Instance<typeof RimborsoStoreModel> {}
export interface RimborsoStoreSnapshot extends SnapshotOut<typeof RimborsoStoreModel> {}
