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
import SvgPassword from "app/components/Svg/SvgPassword"

interface BiometricAuthenticationScreenProps extends NativeStackScreenProps<AppStackScreenProps<"BiometricAuthentication">> {}

export const BiometricAuthenticationScreen: FC<BiometricAuthenticationScreenProps> = observer(function BiometricAuthenticationScreen(_props,) {
  const isDark = useColorScheme() === "dark"

  const authOldPinInput = useRef<TextInput>()
  const [isAuthPinHidden, setIsAuthPinHidden] = useState(true)

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: { loginPin, setLoginPin, validationPinError: validationPinError },
  } = useStores()
  const {
    authenticationStore: { signinPin, setSigninPin, validationOldPinError: validationOldPinError },
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

  const errorOldPin = isSubmitted ? validationOldPinError : ""

  const { navigation } = _props

  const palette = useMemo(() => {
    return isDark ? colors.dark : colors.light
  }, [isDark])

  const style = useMemo(() => {
    return getStyle(palette);
  }, [palette])

  useEffect(() => {
    return () => {
      setLoginPin("")
    }
  }, [])

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
      console.log(result.success);
      if (result.success)
        navigation.navigate("Home" as "navigation");
    })  
    }, [])

  function pinLogin() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    setLoginPin(loginPin)

    if (validationOldPinError) return

    setLoginPin("")

    setIsSubmitted(false)
    console.log("IsValidated: " + isValidated)
    if (isValidated) {
      navigation.navigate("Home" as "navigation")
    }
  }

  return (
    <Screen
      preset="scroll"
      safeAreaEdges={["bottom"]}
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
                    style={style.title} 
                  />
                  <TextField
                    ref={authOldPinInput}
                    value={loginPin}
                    onChangeText={setLoginPin}
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
                      (props) => <SvgPassword
                      style={style.icon}
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
    form: {
      backgroundColor: palette.loginForm, 
      marginTop: spacing.md,
      paddingLeft: spacing.xl, 
      paddingRight: spacing.xl, 
      flex: 1,
      width: '100%', 
    },
    title: {
      color: palette.mainText,
      marginBottom: spacing.sm,
      marginTop: spacing.xl,
    },
    resetTitle: {
      textAlign: "center" as "center",
      color: palette.mainText,
      marginBottom: spacing.sm,
      marginTop: spacing.xl,
    },
    gradientButton: {
      borderRadius: 30,
      marginTop: spacing.xl,
    },
    inputField: {
      marginBottom: spacing.xs,
    }, 
    icon: {
      marginTop: spacing.sm,
      marginStart: spacing.sm,
    }
  };
}
