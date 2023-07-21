import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, useColorScheme } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Button, Icon, Screen, Text, TextField } from "app/components"
import { useStores } from "app/models"
import BackgroundImage from "app/components/BackgroundImage"
import RoundedForm from "app/components/RoundedForm"
import * as LocalAuthentication from 'expo-local-authentication';


import { colors, spacing } from "app/theme"
import { TextInput, TouchableHighlight } from "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import { LinearGradient } from "expo-linear-gradient"
import SigninPin from "./components/SigninPin"

interface BiometricAuthenticationScreenProps extends NativeStackScreenProps<AppStackScreenProps<"BiometricAuthentication">> {}

export const BiometricAuthenticationScreen: FC<BiometricAuthenticationScreenProps> = observer(function BiometricAuthenticationScreen(_props,) {
  const isDark = useColorScheme() === "dark"

  const authPinInput = useRef<TextInput>()
  const authOldPinInput = useRef<TextInput>()
  const [isAuthPinHidden, setIsAuthPinHidden] = useState(true)

  const [pin, setPin] = useState("")
  const [oldPin, setOldPin] = useState("")

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: { authPin, setAuthPin, validationPinError: validationPinError },
  } = useStores()
  const {
    authenticationStore: { authOldPin, setAuthOldPin, validationOldPinError: validationOldPinError },
  } = useStores()

  const {
    authenticationStore: { reset },
  } = useStores()

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const {
    authenticationStore: { isPinLenghtAuthenticated: isPinAuthenticated },
  } = useStores()
  const {
    authenticationStore: { isValidated: isValidated },
  } = useStores()


  const error = isSubmitted ? validationPinError : ""
  const errorOldPin = isSubmitted ? validationOldPinError : ""

  const { navigation } = _props

  const palette = useMemo(() => {
    return isDark ? colors.dark : colors.light
  }, [isDark])

  const style = useMemo(() => {
    return getStyle(palette);
  }, [palette])

  // Check if hardware supports biometrics
  useEffect (() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    }) ();
  })

  useEffect(() => {
    const auth = LocalAuthentication.authenticateAsync( {
      promptMessage: "Authenticate",
      fallbackLabel: "Enter Password",
    });
    auth.then(result => {
      console.log(result);
      if (result.success)
        navigation.navigate("Home" as "navigation");
    })  
    }, [])

  function pinLogin() {


    setAuthPin(oldPin)

    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    if (validationOldPinError) return
    //if (validationPinError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    console.log("IsValidated: " + isValidated)
    if (isValidated) {
      navigation.navigate("Home" as "navigation")
    }
  }

  function setPinFunction() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    setAuthOldPin(pin)
  }

  return (
    <Screen
      preset="scroll"
      safeAreaEdges={["bottom"]}
      style = {style.screen}
      backgroundColor={palette.loginForm}>

      <BackgroundImage/>

      <RoundedForm/>

      <View
        style={style.form}>
          { isPinAuthenticated
              ? <View>
                  
                  <Text 
                    testID="login-heading" 
                    tx="aprovedAuthenitcationScreen.title" 
                    preset="heading" 
                    style={style.title} />
                  <TextField
                    ref={authOldPinInput}
                    value={oldPin}
                    onChangeText={setOldPin}
                    containerStyle={style.textField}
                    autoCapitalize="none"
                    autoComplete="password"
                    maxLength={4}
                    autoCorrect={false}
                    secureTextEntry={isAuthPinHidden}
                    helper={errorOldPin}
                    status={errorOldPin ? "error" : undefined}
                    placeholderTx="aprovedAuthenitcationScreen.pinFieldPlaceholder"
                    inputWrapperStyle={style.inputField}
                    keyboardType="decimal-pad"
                    LeftAccessory={
                      (props) => <Icon 
                        style={style.iconLeft}
                        icon="lock" 
                        containerStyle={props.style}
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
                        tx="aprovedAuthenitcationScreen.button"
                        preset="reversed"
                        onPress={pinLogin}
                        style={style.tapButton}
                      />  
                    </LinearGradient>

                    <Text
                    preset="subheading"
                    style={style.resetTitle}
                    onPress={reset}
                    tx="aprovedAuthenitcationScreen.resetPin"

                    />
                </View>
            : <SigninPin/>
          }

          <StatusBar style="auto"/>
          
      </View>
    </Screen>
  )
})

function getStyle(palette) {
  return {
    screen: {
      backgroundColor: palette.loginForm,
    },
    rounded:{
      width: 200,
      height: 200,
      borderRadius: 100,
      backgroundColor: palette.loginForm,
      transform: [{ scaleX: 2.5 }, { scaleY: 1}],
      position: "absolute" as "absolute",
      top: 400,
      left: 100,
    },

    textField: {
      marginBottom: 8,
    },
    form: {
      backgroundColor: palette.loginForm, 
      marginTop: 16,
      paddingLeft: 32, 
      paddingRight: 32, 
      flex: 1,
      width: '100%', 
    },
    title: {
      color: palette.mainText,
      marginBottom: spacing.sm,
      marginTop: 32,
    },
    resetTitle: {
      textAlign: "center" as "center",
      color: palette.mainText,
      marginBottom: spacing.sm,
      marginTop: 32,
    },
    gradientButton: {
      borderRadius: 30,
      marginTop: 32,
    },
    tapButton: {
      borderRadius: 30,
    },
    iconLeft: {
      marginLeft: 8,
    },
    inputField: {
      backgroundColor: palette.background,
      borderRadius: 30,
      marginBottom:8,
      padding: 4,
      borderWidth: 3,
      borderColor: palette.border,
    }
  };
}
