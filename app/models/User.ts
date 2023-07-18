import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const UserModel = types
  .model("User")
  .props({
    username: types.maybe(types.string),
    password: types.maybe(types.string),
  })
  .actions(withSetPropAction)
  .views((self) => ({
      get fullUser() {
        return self.username + " " + self.password;
      }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    changeUsername(newName: string) {
      if(newName === null) throw Error("New name è vuoto");
      self.username = newName;
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface User extends Instance<typeof UserModel> {}
export interface UserSnapshotOut extends SnapshotOut<typeof UserModel> {}
export interface UserSnapshotIn extends SnapshotIn<typeof UserModel> {}
export const createUserDefaultModel = () => types.optional(UserModel, {})
