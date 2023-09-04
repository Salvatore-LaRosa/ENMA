import React, { FC, useMemo, Component, useState, useRef } from "react"
import { observer } from "mobx-react-lite"
import { Image, Platform, View, useColorScheme, useWindowDimensions } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Button, Screen, Text, Header, Card, ProfileImage, Icon } from "app/components"
import { useStores } from "app/models"
import { colors, spacing } from "app/theme"

import "react-native-gesture-handler";
import { BottomSheetModal , BottomSheetModalProvider} from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { translate } from "../../i18n"
import it from "../../i18n/it"
import en from "../../i18n/en"

import { Picker } from "@react-native-picker/picker";


// Svg components
import SvgTranslate from "app/components/Svg/SvgTranslate"
import SvgRow from "app/components/Svg/SvgRow"
import SvgLogout from "app/components/Svg/SvgLogout"
import { StatusBar } from "expo-status-bar"
import Language from "./Components/Language"
import I18n from "i18n-js"
import { locale } from "expo-localization"

interface ImpostazioniScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Impostazioni">> {}

export const ImpostazioniScreen: FC<ImpostazioniScreenProps> = observer(function ImpostazioniScreen(_props) {
  I18n.fallbacks = true
  I18n.translations = {it, en}
  I18n.locale = locale

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

  const { navigation } = _props

  function goLanguage() {
    navigation.navigate("Language" as "navigation")
  }

  const {
    authenticationStore: { language, setLanguage},
  } = useStores()

  const {
    authenticationStore : {profileImage, setProfileImage}
  } = useStores()

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
    <Screen style={style.screen} preset="scroll">

      <Header
        leftTx="impostazioniScreen.header"
        RightActionComponent={
          <View>
            {profileImage===""?
            <Icon icon="profilo"/>
            :  profileImage && <Image source={{ uri: profileImage }} style={{ width: 50, height: 50, borderRadius:25 }} />

          }
            
          </View>
        }
      />

      <Text 
        tx="impostazioniScreen.title3"
        preset="bold"
        style={style.title}
      />

      <ProfileImage/>

      <Text 
        tx="impostazioniScreen.title1"
        preset="bold"
        style={style.title}
      />

      <Language/>

      <Text 
        tx="impostazioniScreen.title2"
        preset="bold"
        style={style.title}
      />
      <Card
        style={style.card}
        onPress={logout}
        LeftComponent={
          <View
            style={style.view}
          >
            <Text
              tx="impostazioniScreen.logoutTitle"
              style={style.logoutCard}
              preset="subheading"
            />
          </View>
        }
        RightComponent={
          <SvgLogout
            style={style.logout}
          />
        }
      >
      </Card>
    </Screen>

    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
})

function getStyle(palette) {
  return {
    container: {
      flex: 1,
      backgroundColor: "gray",
      alignItems: "center" as "center",
      justifyContent: "center" as "center",
    },
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
