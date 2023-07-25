import React, { FC, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, useColorScheme } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Button, ListItem, Screen, Header, Text } from "app/components"
import { colors, spacing } from "app/theme"

// Svg Components
import SvgBack from "app/components/Svg/SvgBack"
import { useStores } from "app/models"

interface LanguageScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Language">> {}

export const LanguageScreen: FC<LanguageScreenProps> = observer(function LanguageScreen(_props) {
  const isDark = useColorScheme() === "dark"

  const palette = useMemo(() => {
      return isDark ? colors.dark : colors.light
  }, [isDark])

  const style = useMemo(() => {
      return getStyle(palette);
  }, [palette])

  const {
    authenticationStore: { language, setLanguage},
  } = useStores()

  const { navigation } = _props

  function goBack() {
    navigation.goBack()
  }

  function setIta() {
    setLanguage("Italiano (Italia)", _props);
  }

  function setEn() {
    setLanguage("English (UK)", _props);
  }

  return (
    <Screen style={style.screen} preset="scroll">
      <Header
        LeftActionComponent={
          <View
            style={style.view}
          >
            <SvgBack 
            onPress={goBack}/>
            <Text text={"Lingua"} style={style.title}
            preset="heading"/>  
          </View>
        }

      />

      <ListItem
        bottomSeparator={true}
        text="Italiano (Italia)"
        textStyle={style.text}
        onPress={setIta}/>
        <ListItem
          bottomSeparator={true}
          text="Inglese (UK)"
          textStyle={style.text}
          onPress={setEn}/>
    </Screen>
  )
})

function getStyle(palette) {
  return {
    screen: {
      paddingTop: -spacing.xl,
      padding: spacing.xl,
    },
    view: {
      flexDirection: "row" as "row",
    },
    title: {
      fontSize: 24,
      marginStart: spacing.sm,
      marginTop: -spacing.sm,
      color: palette.mainText,
    },
    text: {
      color: palette.mainText
    }
  };
}
