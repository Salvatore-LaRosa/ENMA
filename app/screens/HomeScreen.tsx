import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Button, Screen, Text } from "app/components"
import { useStores } from "app/models"
import { HomeTabScreenProps } from "app/navigators/Navigator"
// import { useNavigation } from "@react-navigation/native"

export const HomeScreen: FC<HomeTabScreenProps<"Home">> = 
  function HomeScreen(_props) {

  const {
    authenticationStore: { logout },
  } = useStores()


  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="home" />
      <Button
      text="logout"
      onPress={logout}
      />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
