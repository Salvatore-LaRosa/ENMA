import { Card, Text, TextField } from "app/components"
import SvgRow from "app/components/Svg/SvgRow"
import SvgTranslate from "app/components/Svg/SvgTranslate"
import { useStores } from "app/models"
import { RimborsoStoreModel } from "app/models/RimborsoStore"
import { colors, spacing } from "app/theme"
import { observable } from "mobx"
import React, { useMemo, useRef, useState } from "react"
import { View, useColorScheme } from "react-native"

const ViewCards = observer(() => {

    const {rimborsoStore: {rimborsi, getLenght}} = useStores();

    const isDark = useColorScheme() === "dark"

    const palette = useMemo(() => {
        return isDark ? colors.dark : colors.light
    }, [isDark])

    const style = useMemo(() => {
        return getStyle(palette);
    }, [palette])

    function printCard() {
        const cardComponent = [];
        for (let index = 0; index < getLenght; index++) {
            cardComponent.push(
            <Card
                key={index}
                heading={rimborsi[index].commessa}
                headingStyle={style.headingCard}
                ContentComponent={
                    <View
                        style={style.view}
                    >
                        <Text
                            text={rimborsi[index].costo + " €"}
                            style={style.textCostoCard}
                        />
                        <Text
                            text={rimborsi[index].categoria}
                            style={style.textCard}
                        />
                    </View>
                }
                style={style.card}

            />)
        }

        return cardComponent;
    }

    return (
        <View>

            <Text text={`${rimborsi.length}`}></Text>

            {rimborsi.map((el, index) => (
            <Card
                key={index}
                heading={el.commessa}
                headingStyle={style.headingCard}
                ContentComponent={
                    <View
                        style={style.view}
                    >
                        <Text
                            text={rimborsi[index].costo + " €"}
                            style={style.textCostoCard}
                        />
                        <Text
                            text={rimborsi[index].categoria}
                        />
                    </View>
                }
                style={style.card}

            />))} 
            
            
        </View>
    );
})

export default ViewCards;

function getStyle(palette) {
    return {
        card: {
          backgroundColor: palette.form,
          borderColor: colors.transparent,
          marginBottom: spacing.md,
        },
        headingCard: {
          color: palette.mainText,
          marginStart: spacing.xs,
        },
        view: {
          flexDirection: "column" as "column",
          marginStart: spacing.xs,
          marginTop: spacing.xxs,
        },
        textCostoCard: {
          color: colors.palette.success500,
        },
    }
}