import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { UserModel } from "./User"

import { AuthenticationStoreModel } from "./AuthenticationStore"
import { RimborsoStore, RimborsoStoreModel } from "./RimborsoStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
    authenticationStore: types.optional(AuthenticationStoreModel, {}), 
    rimborsoStore: types.optional(RimborsoStoreModel, {}), 
    //user: UserModel
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
