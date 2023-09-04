import React, { FC, useMemo } from "react"
import { Image, View, useColorScheme } from "react-native"
import { Button, Card, Header, Icon, Screen, Text } from "app/components"
import { HomeTabScreenProps } from "app/navigators/Navigator"
import { colors, spacing } from "app/theme"
import { LinearGradient } from "expo-linear-gradient"

// SVG Components
import SvgCreditCard from "app/components/Svg/SvgCreditCard"
import SvgAirplane from "app/components/Svg/SvgAirplane"
import SvgSun from "app/components/Svg/SvgSun"
import SvgTimer from "app/components/Svg/SvgTimer"
import SvgUserSmall from "app/components/Svg/SvgUserSmall"
import SvgHealthcare from "app/components/Svg/SvgHealthcare"
import SvgWallet from "app/components/Svg/SvgWallet"
import { useStores } from "app/models"

export const HomeScreen: FC<HomeTabScreenProps<"Home">> = 
  function HomeScreen(_props) {
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
        leftTx="homeScreen.header"
        RightActionComponent={
          <View>
            {profileImage===""?
            <Icon icon="profilo"/>
            :  profileImage && <Image source={{ uri: profileImage }} style={{ width: 50, height: 50, borderRadius:25 }} />

          }
            
          </View>
        }
      />

      <Card
        style={style.card}
        headingTx="homeScreen.statsTitle"
        headingStyle={style.headingCard}
        ContentComponent={
          <View
            style={style.viewColumn}
          >
            <View 
              style={style.viewRow}
            >
              <SvgCreditCard/>
              <Text 
                text="123,50"
                style={style.text}
                preset="bold"
              />              
              <SvgAirplane/>
              <Text 
                text="02,00"
                style={style.text}
                preset="bold"
              />              
              <SvgSun/>
              <Text 
                text="00,00"
                style={style.text}
                preset="bold"
              />
            </View>
            <View
              style={style.viewRow}
            >
              <SvgTimer/>
              <Text 
                text="140,00"
                style={style.text}
                preset="bold"
              />              
              <SvgUserSmall/>
              <Text 
                text="00,00"
                style={style.text}
                preset="bold"
              />              
              <SvgHealthcare/>
              <Text 
                text="00,00"
                style={style.text}
                preset="bold"
              />
            </View>
          </View>
        }
      />

      <Card
        style={style.card}
        headingTx="homeScreen.refoundTitle"
        headingStyle={style.headingCard}
        ContentComponent={
          <View
            style={style.viewRow}
          >
            <SvgWallet/>
            <Text 
              text="541,80 €"
              style={style.text}
              preset="bold"
            /> 
          </View>
        }
      />

      <Card
        style={style.card}
        headingTx="homeScreen.boardTitle"
        headingStyle={style.headingCard}
        ContentComponent={
          <View>
            <Text 
              tx="homeScreen.boardSubTitle1"
              style={style.text}
              preset="bold"
            /> 
            <Text 
              tx="homeScreen.boardText1"
              style={style.subText}
            /> 
            <Text 
              tx="homeScreen.boardSubTitle2"
              style={style.text}
              preset="bold"
            /> 
            <Text 
              tx="homeScreen.boardText2"
              style={style.subText}
            /> 
          </View>
        }
      /> 
      
      <LinearGradient
        colors={[palette.buttonGradientStart, palette.buttonGradientEnd]}
        start={ {x: 0, y: 0} }
        end={ {x: 0, y: 1} }
        style={style.gradientButton}>
          <Button
            pressedStyle={{backgroundColor: palette.buttonGradientStart}}
            pressedTextStyle={{color: palette.background}}
            tx="homeScreen.button"
            preset="reversed"
            textStyle={style.textButton}
            style={{backgroundColor: palette.background,
            borderRadius: 30,
            marginTop: 2,
            marginBottom: 2,
            marginStart: 2,
            marginEnd: 2,}}
          />
      </LinearGradient>
    </Screen>
  )
}

function getStyle(palette) {
  return {
    screen: {
      paddingTop: -spacing.xl,
      padding: spacing.xl,
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
    text: {
      color: palette.mainText,
      marginTop: spacing.xxs,
      marginStart: spacing.xxs,
      marginEnd: spacing.xs,
      flex:1,
    },
    subText: {
      color: palette.mainText,
      marginTop: spacing.xxs,
      marginStart: spacing.xxs,
      marginEnd: spacing.xs,
      fontSize: 13,
      flex:1,
    },
    viewRow: {
      flexDirection: "row" as "row",
      paddingStart: spacing.md,
      paddingEnd: spacing.md,
    }, 
    viewColumn: {
      flexDirection: "column" as "column",
      paddingTop: spacing.sm,
      paddingBottom: spacing.lg,
    },
    gradientButton: {
      borderRadius: 30,
      marginTop: spacing.xxs,
    },
    textButton:
    {
      color: palette.buttonGradientStart,
    },
  };
}
