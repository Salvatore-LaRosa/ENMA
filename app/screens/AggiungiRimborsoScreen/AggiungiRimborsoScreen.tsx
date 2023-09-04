import React, { FC, useMemo, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, useColorScheme } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Button, Card, Header, Screen, Text, TextField } from "app/components"
import { colors, spacing } from "app/theme"
import { LinearGradient } from 'expo-linear-gradient';

// Svg conponents
import SvgBack from "app/components/Svg/SvgBack"
import LoadPhoto from "./Components/LoadPhoto"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import Commessa from "./Components/Commessa"
import Categories from "./Components/Categories"

interface AggiungiRimborsoScreenProps extends NativeStackScreenProps<AppStackScreenProps<"AggiungiRimborso">> {}

export const AggiungiRimborsoScreen: FC<AggiungiRimborsoScreenProps> = observer(function AggiungiRimborsoScreen(_props) {

  const isDark = useColorScheme() === "dark"

  const palette = useMemo(() => {
      return isDark ? colors.dark : colors.light
  }, [isDark])

  const style = useMemo(() => {
      return getStyle(palette);
  }, [palette])

  const { navigation } = _props

  function goBack() {
    navigation.goBack()
  }

  function add() {

  }

  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Screen 
          style={style.screen}
          preset="scroll">
          <Header
            LeftActionComponent={
              <View
                style={style.view}
              >
                <SvgBack 
                onPress={goBack}/>
                <Text tx="addRimborsiScreen.header" style={style.title}
                preset="heading"/>  
              </View>
            }
          />

          <LoadPhoto/>

          <Commessa/>

          <Categories/>

          <Card
            style={style.card}
            headingTx="addRimborsiScreen.amount"
            headingStyle={style.headingCard}
            ContentComponent={
                <TextField
                  value={amount}
                  onChangeText={setAmount}
                  keyboardType="decimal-pad"
                  style={style.textField}
                  inputWrapperStyle={style.textField}
                  placeholderTextColor={palette.mainText}
                  placeholderTx="addRimborsiScreen.placeholderAmount"
                />
            }
          />

          <Card
            style={style.card}
            headingTx="addRimborsiScreen.note"
            headingStyle={style.headingCard}
            ContentComponent={
                <TextField
                  value={note}
                  onChangeText={setNote}
                  style={style.textField}
                  inputWrapperStyle={style.textField}
                  placeholderTextColor={palette.mainText}
                  placeholderTx="addRimborsiScreen.placeholderNote"
                />
            }
          />

          <LinearGradient
            colors={[palette.buttonGradientStart, palette.buttonGradientEnd]}
            start={ {x: 0, y: 0} }
            end={ {x: 0, y: 1} }
            style={style.gradientButton}
          >
            <Button
              pressedStyle={{backgroundColor: palette.buttonGradientEnd}}
              testID="login-button"
              tx="loginScreen.tapToSignIn"
              preset="reversed"
              onPress={add}
            />
          </LinearGradient>     

          <View
            style={style.container}
          />     
          
        </Screen>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
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
    card: {
      backgroundColor: palette.form,
      borderColor: colors.transparent,
      marginBottom: spacing.md,
    },
    headingCard: {
      color: palette.secondaryText,
      marginStart: spacing.xs,
    },
    textCard: {
      color: palette.mainText,
    },
    textField: {
        backgroundColor: palette.form,
        marginStart: spacing.xxs,
        marginTop: 0,
        borderColor: colors.transparent,
        borderRadius: 0,
        color: palette.mainText,
    },
    gradientButton: {
      borderRadius: 30,
    },
    container: {
      height: 140,
    }
  }
}
