import React, { FC, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, useColorScheme } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Header } from "app/components"
import { colors, spacing } from "app/theme"

interface PresenzeScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Presenze">> {}

export const PresenzeScreen: FC<PresenzeScreenProps> = observer(function PresenzeScreen() {
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
        leftText="Presenze"
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