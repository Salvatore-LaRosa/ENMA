import React, { FC, useMemo, Component, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, useColorScheme } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Button, Screen, Text, Header, Card } from "app/components"
import { useStores } from "app/models"
import { colors, spacing } from "app/theme"
import { Picker } from "@react-native-picker/picker";

// Svg components
import SvgTranslate from "app/components/Svg/SvgTranslate"
import SvgRow from "app/components/Svg/SvgRow"
import SvgLogout from "app/components/Svg/SvgLogout"

interface ImpostazioniScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Impostazioni">> {}

export const ImpostazioniScreen: FC<ImpostazioniScreenProps> = observer(function ImpostazioniScreen(_props) {
  const {
    authenticationStore: { logout },
  } = useStores()

  const isDark = useColorScheme() === "dark"

  const palette = useMemo(() => {
      return isDark ? colors.dark : colors.light
  }, [isDark])

  const style = useMemo(() => {
      return getStyle(palette);
  }, [palette])

  const [selectedLanguage, setSelectedLanguage] = useState();

  const { navigation } = _props

  function goLanguage() {
    navigation.navigate("Language" as "navigation")
  }

  const {
    authenticationStore: { language, setLanguage},
  } = useStores()

  return (
    <Screen style={style.screen} preset="scroll">

      <Header
        leftText="Impostazioni"
        rightIcon="profilo"
      />

      <Text 
        text="Generale"
        preset="bold"
        style={style.title}
      />
      <Card
        style={style.card}
        heading="Lingua"
        headingStyle={style.headingCard}
        ContentComponent={
          <View
            style={style.view}
          >
            <SvgTranslate style={style.icon}/>
            <Text
              text={language}
              style={style.textCard}
            />
          </View>
        }
        RightComponent={
          <SvgRow
            style={style.row}
            onPress={goLanguage}
          />
        }
      >
      </Card>
      
      <Card
        style={style.card}
        heading="Lingua"
        headingStyle={style.headingCard}
        ContentComponent={
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Italiano (Italia)" value="italian" />
            <Picker.Item label="English (UK)" value="English" />
          </Picker>
        }
      >
      </Card>


      <Text 
        text="Sistema"
        preset="bold"
        style={style.title}
      />
      <Card
        style={style.card}
        LeftComponent={
          <View
            style={style.view}
          >
            <Text
              text="Esci"
              style={style.logoutCard}
              preset="subheading"
            />
          </View>
        }
        RightComponent={
          <SvgLogout
            style={style.logout}
            onPress={logout}
          />
        }
      >
      </Card>
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
      marginStart: spacing.xs,
      marginTop: spacing.xxs,
    },
    title: {
      fontSize: 20,
      paddingBottom: spacing.xs,
      paddingTop: spacing.xs,
    },
    card: {
      backgroundColor: palette.form,
      borderColor: colors.transparent,
      marginBottom: spacing.md,
    },
    headingCard: {
      color: palette.secondaryText,
      marginStart: spacing.xs,
    },
    logoutCard: {
      marginTop: spacing.md,
      color: colors.error,
      marginStart: spacing.xs,
    },
    textCard: {
      color: palette.mainText,
    },
    icon: {
      color: palette.mainText,
      marginEnd: spacing.xxs
    },
    row: {
      marginTop: spacing.lg,
      marginEnd: spacing.lg,
    },
    logout: {
      marginTop: spacing.lg,
      marginEnd: spacing.lg,
    },
  };
}
