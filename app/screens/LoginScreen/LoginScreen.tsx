import React, { FC, useMemo, useState, useEffect, useRef } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, View } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "app/components"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { api } from "app/services/api"
import { useColorScheme } from 'react-native';
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { colors, spacing } from "app/theme"

import { LinearGradient } from 'expo-linear-gradient';

import BackgroundImage from "./components/BackgroundImage"
import { color } from "react-native-reanimated"

interface LoginScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Login">> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen() {
  // Pull in one of our MST stores
  //const { user } = useStores()
  const isDark = useColorScheme() === "dark"

  const authPasswordInput = useRef<TextInput>()
  const [authPassword, setAuthPassword] = useState("")
  const [authEmail, setAuthEmail] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  //const {
  //  authenticationStore: { authEmail, setAuthEmail, setAuthToken, validationError },
  //} = useStores()

  const palette = useMemo(() => {
    return isDark ? colors.dark : colors.light
  }, [isDark])

  const style = useMemo(() => {
    return getStyle(palette);
  }, [palette])

  async function gestisciClick() {
  }

  useEffect(() => {
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])

  //const error = isSubmitted ? validationError : ""

  function login() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    //if (validationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    //setIsSubmitted(false)
    //setAuthPassword("")
    //setAuthEmail("")

    // We'll mock this with a fake token.
    //setAuthToken(String(Date.now()))
  }

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={palette.secondaryText}
            containerStyle={props.style}
            size={20}
            style= {style.iconRight}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen
      preset="scroll"
      safeAreaEdges={["bottom"]}
      style = {style.screen}
      backgroundColor={palette.loginForm}>

      <BackgroundImage/>

      <View
        style={ style.rounded}
      />  

      <View
        style={style.form}>
          <Text testID="login-heading" tx="loginScreen.title" preset="heading" style={style.title} />
          <TextField
            value={authEmail}
            onChangeText={setAuthEmail}
            containerStyle={style.textField}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            placeholderTx="loginScreen.emailFieldPlaceholder"
            //helper={error}
            //status={error ? "error" : undefined}
            onSubmitEditing={() => authPasswordInput.current?.focus()}
            inputWrapperStyle={style.inputField}
            LeftAccessory={
              (props) => <Icon 
                style={style.iconLeft}
                icon="user" 
                containerStyle={props.style} 
              />
            } 
          />

          <TextField
            ref={authPasswordInput}
            value={authPassword}
            onChangeText={setAuthPassword}
            containerStyle={style.textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isAuthPasswordHidden}
            style={style.boh}
            placeholderTx="loginScreen.passwordFieldPlaceholder"
            onSubmitEditing={login}
            RightAccessory={PasswordRightAccessory}
            inputWrapperStyle={style.inputField}
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
          style={style.gradientButton}>
            <Button
            pressedStyle={{backgroundColor: palette.buttonGradientEnd}}
              testID="login-button"
              tx="loginScreen.tapToSignIn"
              preset="reversed"
              onPress={login}
              style={style.tapButton}
            />
          </LinearGradient>
      </View>
    </Screen>
  )
})

function getStyle(palette) {
  return {
    boh: {
      color: palette.secondaryText
    },
    screen: {
      backgroundColor: palette.loginForm,
    },
    rounded:{
      width: 200,
      height: 200,
      borderRadius: 100,
      backgroundColor: palette.loginForm,
      transform: [{ scaleX: 2.5 }, { scaleY: 1}],

      position: "absolute",
      top: 400,
      left: 100,
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
    textField: {
      marginBottom: 8,
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
    iconRight: {
      marginRight: 8,
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



