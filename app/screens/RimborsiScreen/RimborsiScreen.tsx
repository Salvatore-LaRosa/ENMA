import React, { FC, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, useColorScheme } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Header } from "app/components"
import { colors, spacing } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface RimborsiScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Rimborsi">> {}

export const RimborsiScreen: FC<RimborsiScreenProps> = observer(function RimborsiScreen() {
  const isDark = useColorScheme() === "dark"

  const palette = useMemo(() => {
      return isDark ? colors.dark : colors.light
  }, [isDark])

  const style = useMemo(() => {
      return getStyle(palette);
  }, [palette])

  return (
    <Screen style={style.screen} preset="scroll">

      <Header
        leftText="Rimborsi"
        rightIcon="profilo"
      />

      
    </Screen>
  )
})


function getStyle(palette) {
  return {
    screen: {
      paddingTop: -spacing.xl,
      padding: spacing.xl,
    }, 
    title: {
      fontSize: 20,
      paddingBottom: spacing.xs,
    }
  };
}
