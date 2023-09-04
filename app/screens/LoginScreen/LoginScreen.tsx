import React, { FC, useMemo, useState, useEffect, useRef } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, View } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "app/components"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { api } from "app/services/api"
import { useColorScheme } from 'react-native';
import { useStores } from "app/models"
import { colors, spacing } from "app/theme"
import { LinearGradient } from 'expo-linear-gradient';

// Components
import BackgroundImage from "../../components/BackgroundImage"
import BackgroundForm from "../../components/RoundedForm"

// Svg Components
import SvgUser from "app/components/Svg/SvgUser"
import SvgPassword from "app/components/Svg/SvgPassword"

interface LoginScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Login">> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen() {
  // Pull in one of our MST stores
  //const { user } = useStores()
  const isDark = useColorScheme() === "dark"

  const authPasswordInput = useRef<TextInput>()
  const [authPassword, setAuthPassword] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: { authEmail, setAuthEmail, setAuthToken, validationEmailError: validationError },
  } = useStores()

  const palette = useMemo(() => {
    return isDark ? colors.dark : colors.light
  }, [isDark])

  const style = useMemo(() => {
    return getStyle(palette);
  }, [palette])

  useEffect(() => {
    setAuthEmail("ignite@infinite.red")
    setAuthPassword("ign1teIsAwes0m3")
  }, [])

  const error = isSubmitted ? validationError : ""

  function login() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    if (validationError) return
    setIsSubmitted(false)
    setAuthPassword("")
    setAuthEmail("")

    // We'll mock this with a fake token.
    setAuthToken(String(Date.now()))
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
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  useEffect(() => {
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])

  return (
    <Screen
      preset="scroll"
      safeAreaEdges={["bottom"]}
      backgroundColor={palette.loginForm}>

      <BackgroundImage/>

      <BackgroundForm/>

      <View
        style={style.form}>
          <Text testID="login-heading" tx="loginScreen.title" preset="heading" style={style.title} />
          <TextField
            value={authEmail}
            onChangeText={setAuthEmail}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            placeholderTx="loginScreen.emailFieldPlaceholder"
            helper={error}
            status={error ? "error" : undefined}
            onSubmitEditing={() => authPasswordInput.current?.focus()}
            inputWrapperStyle={style.inputField}
            LeftAccessory={
              (props) => <SvgUser
                style={style.icon} 
              />
            } 
          />

          <TextField
            ref={authPasswordInput}
            value={authPassword}
            onChangeText={setAuthPassword}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isAuthPasswordHidden}
            placeholderTx="loginScreen.passwordFieldPlaceholder"
            onSubmitEditing={login}
            RightAccessory={PasswordRightAccessory}
            inputWrapperStyle={style.inputField}
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
              tx="loginScreen.tapToSignIn"
              preset="reversed"
              onPress={login}
            />
          </LinearGradient>
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



