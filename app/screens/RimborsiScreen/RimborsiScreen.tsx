import React, { FC, useMemo, useState } from "react"
import { observer } from "mobx-react-lite"
import { Image, View, useColorScheme } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Header, TextField, Text, Card, Button, Icon } from "app/components"
import { colors, spacing } from "app/theme"

import { LinearGradient } from 'expo-linear-gradient';

// Svg Components
import SvgSearch from "app/components/Svg/SvgSearch"
import SvgFilter from "app/components/Svg/SvgFilter"
import SvgPlus from "app/components/Svg/SvgPlus"
import { useStores } from "app/models"

interface RimborsiScreenProps extends NativeStackScreenProps<AppStackScreenProps<"Rimborsi">> {}

export const RimborsiScreen: FC<RimborsiScreenProps> = observer(function RimborsiScreen(_props) {
  const isDark = useColorScheme() === "dark"

  const palette = useMemo(() => {
      return isDark ? colors.dark : colors.light
  }, [isDark])

  const style = useMemo(() => {
      return getStyle(palette);
  }, [palette])

  const [search, setSearch] = useState("")
  const [nRefound, setNRefound] = useState("2")
  const [total, setTotal] = useState("576,94")
  
  function setFilter() {
    console.log("Filtro")
  }

  const { navigation } = _props

  function goAdd() {
    navigation.navigate("AggiungiRimborso" as "navigation")
  }
  const {
    authenticationStore : {profileImage, setProfileImage}
  } = useStores()

  return (
    <Screen style={style.screen} preset="scroll">

      <Header
        leftTx="rimborsiScreen.header"
        RightActionComponent={
          <View>
            {profileImage===""?
            <Icon icon="profilo"/>
            :  profileImage && <Image source={{ uri: profileImage }} style={{ width: 50, height: 50, borderRadius:25 }} />

          }
            
          </View>
        }
      />

      <View
        style={style.inline}
      >
        <TextField
          value={search}
          onChangeText={setSearch}
          autoCapitalize="none"
          autoComplete="name"
          autoCorrect={false}
          placeholderTx="rimborsiScreen.placeHolder"
          inputWrapperStyle={style.inputField}
          RightAccessory={
            (props) => <SvgSearch
              style={style.icon} 
            />
          } 
        />
        <View
          style={style.filter}
        >
          <SvgFilter
          style={style.filterIcon}
          onPress={setFilter}/>
        </View>
      </View>

      <View
        style={style.inline}
      >
        <View style={style.inline}>
          <Text 
            tx="rimborsiScreen.textLeft"
            style={style.subTitle}
          />
          <Text 
            text={nRefound}
            style={style.subText}
          />
        </View>
        <View style={style.inline}>
          <Text 
            tx="rimborsiScreen.textRight"
            style={style.subTitle}
          />
          <Text 
            text={total + " €"}
            style={style.subText}
          />
        </View>

      </View>

      <Card
        style={style.card}
      />

    <View style={{flexDirection: "row-reverse"}}>
      <LinearGradient
        colors={[palette.buttonGradientStart, palette.buttonGradientEnd]}
        start={ {x: 0, y: 0} }
        end={ {x: 0, y: 1} }
        style={style.gradientButton}>
        <Button
          RightAccessory={(props) => <SvgPlus/>}
          pressedStyle={{backgroundColor: palette.buttonGradientEnd}}
              testID="login-button"
              preset="reversed"
              onPress={goAdd}
        />
      </LinearGradient>
    </View>

    </Screen>
  )
})


function getStyle(palette) {
  return {
    inline: {
      flexDirection: "row" as "row",
      justifyContent: "space-between" as "space-between",
      marginBottom: spacing.sm,
    },
    screen: {
      paddingTop: -spacing.xl,
      padding: spacing.xl,
    }, 
    title: {
      fontSize: 20,
      paddingBottom: spacing.xs,
    },
    inputField: {
      backgroundColor: palette.form,
      marginBottom: spacing.xs,
      borderColor: colors.transparent,
      width: 260,
    }, 
    icon: {
      marginTop: spacing.xxs,
      marginEnd: spacing.sm,
    }, 
    filter: {
      alignItems: "center" as "center",
      borderRadius: 16,
      backgroundColor: palette.form,
      height: 55,
      width: 55,
    },
    filterIcon: {
      marginTop: spacing.xs,
    },
    subTitle: {
      fontSize: 16,
      color: palette.secondaryText
    },
    subText: {
      marginStart: spacing.xxs,
      fontSize: 16,
      color: palette.mainText
    },
    card: {
      backgroundColor: palette.form,
      borderColor: colors.transparent,
      marginBottom: spacing.md,
    },
    gradientButton: {
      width: 60,
      heigth: 60,
      borderRadius: 30,
      marginTop: spacing.xl,

    },
  };
}
