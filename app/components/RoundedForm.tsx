import { colors } from "app/theme"
import React, { useMemo } from "react"
import { View, useColorScheme } from "react-native"

const RoundedForm = () => {

    const isDark = useColorScheme() === "dark"

    const palette = useMemo(() => {
        return isDark ? colors.dark : colors.light
    }, [isDark])

    const style = useMemo(() => {
        return getStyle(palette);
    }, [palette])

    return (
        <View
        style={ style.rounded}
        />  
    );
}

export default RoundedForm;

function getStyle(palette) {
    return {
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
    }
}