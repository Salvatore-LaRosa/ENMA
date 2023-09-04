import { Button, TextField, Text, Icon } from "app/components"
import SvgPassword from "app/components/Svg/SvgPassword"
import { useStores } from "app/models"
import { colors, spacing } from "app/theme"
import { LinearGradient } from "expo-linear-gradient"
import React, { useMemo, useRef, useState } from "react"
import { View, useColorScheme } from "react-native"
import { TextInput } from "react-native-gesture-handler"

const SigninPin = () => {

    const isDark = useColorScheme() === "dark"

    const palette = useMemo(() => {
        return isDark ? colors.dark : colors.light
    }, [isDark])

    const style = useMemo(() => {
        return getStyle(palette);
    }, [palette])
    
    const authPinInput = useRef<TextInput>()
    const [isPinHidden, setIsPinHidden] = useState(true)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [attemptsCount, setAttemptsCount] = useState(0)

    const {
        authenticationStore: { signinPin, setSigninPin, validationOldPinError: validationOldPinError },
    } = useStores()

    const error = isSubmitted ? validationOldPinError : ""

    function setPinFunction() {
        setIsSubmitted(true)
        setAttemptsCount(attemptsCount + 1)
    
        setSigninPin(signinPin)
        
        setIsSubmitted(false)
    }
    

    return (
        <View>
            <Text 
                testID="login-heading" 
                tx="refusedAuthenitcationScreen.title" 
                preset="heading" 
                style={style.title} 
            />
            <TextField
                ref={authPinInput}
                value={signinPin}
                onChangeText={setSigninPin}
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect={false}
                keyboardType="decimal-pad"
                maxLength={4}
                helper={error}
                status={error ? "error" : undefined}
                secureTextEntry={isPinHidden}
                placeholderTx="refusedAuthenitcationScreen.pinFieldPlaceholder"
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
                        tx="refusedAuthenitcationScreen.button"
                        preset="reversed"
                        onPress={setPinFunction}
                    />  
            </LinearGradient>
        </View>
    );
}

export default SigninPin;

function getStyle(palette) {
    return {
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
        resetTitle: {
            textAlign: "center" as "center",
            color: palette.mainText,
            marginBottom: spacing.sm,
            marginTop: spacing.xl,
        }, 
        icon: {
          marginTop: spacing.sm,
          marginStart: spacing.sm,
        }
    };
  }
  