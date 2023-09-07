import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React, { useMemo } from "react"
import { useColorScheme } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { translate } from "../i18n"
import { colors, spacing } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { Icon } from "../components"

// screens
import { HomeScreen } from "../screens"
import { PresenzeScreen } from "../screens"
import { RimborsiScreen } from "../screens"
import { ImpostazioniScreen } from "../screens"

// SVG components
import SvgHome from "app/components/Svg/SvgHome"
import SvgSettings from "app/components/Svg/SvgSettings"
import SvgRimborsi from "app/components/Svg/SvgRimborsi"
import SvgPresenze from "app/components/Svg/SvgPresenze"

export type HomeTabParamList = {
  Homepage: undefined
  Presenze: undefined
  Rimborsi: undefined
  Impostazioni: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<HomeTabParamList>()

export function Navigator() {
  const { bottom } = useSafeAreaInsets()

  const isDark = useColorScheme() === "dark"

  const palette = useMemo(() => {
    return isDark ? colors.dark : colors.light
  }, [isDark])

  const style = useMemo(() => {
    return getStyle(palette);
  }, [palette])

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [style.tabBar, { marginBottom: bottom + 40 }],
        tabBarActiveTintColor: isDark ? colors.dark.buttonGradientStart : colors.light.buttonGradientStart,
        tabBarInactiveTintColor: colors.palette.neutral500,
        tabBarLabelStyle: style.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="Homepage"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="home"  color={isDark? focused && colors.dark.buttonGradientStart : focused && colors.light.buttonGradientStart} />
          ),
        }}
      />
      <Tab.Screen
        name="Presenze"
        component={PresenzeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="presenze"  color={isDark? focused && colors.dark.buttonGradientStart : focused && colors.light.buttonGradientStart} />
          ),
        }}
      />
      <Tab.Screen
        name="Rimborsi"
        component={RimborsiScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="rimborsi" color={isDark? focused && colors.dark.buttonGradientStart : focused && colors.light.buttonGradientStart}/>
          ),
        }}
      />
      <Tab.Screen
        name="Impostazioni"
        component={ImpostazioniScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="settings"  color={isDark? focused && colors.dark.buttonGradientStart : focused && colors.light.buttonGradientStart}/>
          ),
        }}
      />

    </Tab.Navigator>
  )
}

function getStyle(palette) {
  return {
    tabBar: {
      position: "absolute" as "absolute",
      backgroundColor: palette.form, 
      borderTopColor: colors.transparent,
      borderRadius: 30,
      paddingBottom: 0,
      paddingEnd: spacing.md,
      paddingStart: spacing.md,
      marginEnd: spacing.xl,
      marginStart: spacing.xl,
      height: 60
    },
    tabBarLabel: {
      color: colors.transparent,
      lineHeight: 1,
    },
  };
}
