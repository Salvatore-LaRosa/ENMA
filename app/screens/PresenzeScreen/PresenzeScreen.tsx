import React, { FC, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, useColorScheme, Image } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Header, Text, ProfileImage, Icon } from "app/components"
import { colors, spacing } from "app/theme"

// Svg Components
import SvgImageLight from "app/components/Svg/SvgImageLight"
import SvgImageDark from "app/components/Svg/SvgImageDark"
import { useStores } from "app/models"

interface PresenzeScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Presenze">> {}

export const PresenzeScreen: FC<PresenzeScreenProps> = observer(function PresenzeScreen() {
  const isDark = useColorScheme() === "dark"

  const palette = useMemo(() => {
      return isDark ? colors.dark : colors.light
  }, [isDark])

  const style = useMemo(() => {
      return getStyle(palette);
  }, [palette])

  const {
    authenticationStore : {profileImage, setProfileImage}
  } = useStores()


  return (
    <Screen style={style.screen} preset="scroll">

      <Header
        leftText="Presenze"
        RightActionComponent={
          <View>
            {profileImage===""?
            <Icon icon="profilo"/>
            :  profileImage && <Image source={{ uri: profileImage }} style={{ width: 50, height: 50, borderRadius:25 }} />

          }
            
          </View>
        }
      />

      <Text text="Work in Progress" preset="heading" style={style.title} />

      {isDark? <SvgImageDark/> : <SvgImageLight/>}

      

      
    </Screen>
    )
})

function getStyle(palette) {
  return {
    screen: {
      paddingTop: -spacing.xl,
      padding: spacing.xl,
    }, 
    title: {
      color: palette.mainText,
      fontSize: 40,
      paddingBottom: spacing.xs,
      marginTop: spacing.xxxl,
      marginBottom: spacing.xxl
    }
  };
}