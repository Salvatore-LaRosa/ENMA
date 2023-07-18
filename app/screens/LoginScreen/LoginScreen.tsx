import React, { FC, useMemo, useState, useEffect, useRef } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, TextStyle, ViewStyle, Image, ImageStyle, View } from "react-native"
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
            color={colors.light.secondaryText}
            containerStyle={props.style}
            size={20}
            style= {$iconRight}
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
      style = {$screen}>

      <BackgroundImage/>

      <View
        style={$rounded}
      />  

      <View
        style={$form}>
          <Text testID="login-heading" tx="loginScreen.signIn" preset="heading" style={$signIn} />
          <TextField
            value={authEmail}
            onChangeText={setAuthEmail}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            placeholderTx="loginScreen.emailFieldPlaceholder"
            //helper={error}
            //status={error ? "error" : undefined}
            onSubmitEditing={() => authPasswordInput.current?.focus()}
            inputWrapperStyle={$inputField}
            LeftAccessory={
              (props) => <Icon 
                style={$iconLeft}
                icon="user" 
                containerStyle={props.style} 
                color={props.editable ? colors.light.secondaryText : colors.light.secondaryText} 
              />
            } 
          />

          <TextField
            ref={authPasswordInput}
            value={authPassword}
            onChangeText={setAuthPassword}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isAuthPasswordHidden}
            placeholderTx="loginScreen.passwordFieldPlaceholder"
            onSubmitEditing={login}
            RightAccessory={PasswordRightAccessory}
            inputWrapperStyle={$inputField}
            LeftAccessory={
              (props) => <Icon 
                style={$iconLeft}
                icon="lock" 
                containerStyle={props.style} 
                color={props.editable ? colors.light.secondaryText : colors.light.secondaryText} 
              />
            }
          />

          <LinearGradient
          colors={[colors.light.buttonGradientStart, colors.light.buttonGradientEnd]}
          start={ {x: 0, y: 0} }
          end={ {x: 0, y: 1} }
          style={$tapButton}>
            <Button
              testID="login-button"
              tx="loginScreen.tapToSignIn"
              preset="reversed"
              onPress={login}
            />
          </LinearGradient>
      </View>
    </Screen>
  )
})

const $screen: ViewStyle = {
  backgroundColor: 'white'

}

const $rounded: ViewStyle = {

  width: 200,
  height: 200,
  borderRadius: 100,
  backgroundColor: colors.light.form,
  transform: [{ scaleX: 2.5 }, { scaleY: 1}],

  position: "absolute",
  top: 400,
  left: 100,
}

const $form: ViewStyle = {
  backgroundColor: colors.light.form, 
  marginTop: 16,
  paddingLeft: 32, 
  paddingRight: 32, 
  flex: 1,
  width: '100%', 
}

const $signIn: TextStyle = {
  marginBottom: spacing.sm,
  marginTop: 32,
}

const $textField: ViewStyle = {
  marginBottom: 8,
}

const $tapButton: ViewStyle = {
  borderRadius: 30,
  marginTop: 32,
}

const $iconLeft: ImageStyle = {
  marginLeft: 8,
}

const $iconRight: ImageStyle = {
  marginRight: 8,
}

const $inputField : ViewStyle = {
  backgroundColor: colors.light.form,
  borderRadius: 30,
  marginBottom:8,
  padding: 4,
  borderWidth: 3,
  borderColor: colors.light.border,
}



