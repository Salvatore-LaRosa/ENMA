import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { Picker } from "@react-native-picker/picker"
import { Card, Text, TextField } from "app/components"
import SvgRow from "app/components/Svg/SvgRow"
import SvgTranslate from "app/components/Svg/SvgTranslate"
import { useStores } from "app/models"
import { colors, spacing } from "app/theme"
import React, { useMemo, useRef, useState } from "react"
import { Platform, View, useColorScheme } from "react-native"

const Categories = () => {

    const isDark = useColorScheme() === "dark"

    const palette = useMemo(() => {
        return isDark ? colors.dark : colors.light
    }, [isDark])

    const style = useMemo(() => {
        return getStyle(palette);
    }, [palette])

    const bottomSheetModalRef = useRef(null);

    const snapPoints = ["25%", "48%", "75%"];

    const {
        rimborsoStore: { categoria, setCategoria, validationCategoriaError: validationError },
      } = useStores()

    function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
        setIsOpen(true);
    }, 100);
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <View>
            {Platform.OS === "ios" ? (
                <Card
                    style={style.card}
                    headingTx="addRimborsiScreen.categories"
                    headingStyle={style.headingCard}
                    onPress={handlePresentModal}
                    ContentComponent={
                        <View
                            style={style.view}
                        >
                            <Text
                            text={categoria}
                            style={style.textCard}
                            />
                            <Text
                            text="Km Percorsi/Sample"
                            preset="bold"
                            style={style.titleCard}
                            />
                            <TextField
                            keyboardType="decimal-pad"
                            style={style.textField}
                            inputWrapperStyle={style.textField}
                            placeholderTextColor={palette.mainText}
                            placeholderTx="addRimborsiScreen.placeholderCategories"
                            />
                        </View>
                    }
                    RightComponent={
                        <SvgRow
                            style={style.row}
                        />
                    }
                />
            ) : (
                <Card
                    style={style.card}
                    headingTx="addRimborsiScreen.categories"
                    headingStyle={style.headingCard}
                    ContentComponent={
                        <View>
                            <Picker
                                selectedValue={categoria}
                                onValueChange={(itemValue, itemIndex) =>
                                setCategoria(itemValue)
                                }>
                                    <Picker.Item label="Trasporti" value="Trasporti" />
                                    <Picker.Item label="Albergo" value="Albergo" />
                            </Picker>
                            <Text
                            text="Km Percorsi/Sample"
                            preset="bold"
                            style={style.titleCard}
                            />
                            <TextField
                                keyboardType="decimal-pad"
                                style={style.textField}
                                inputWrapperStyle={style.textField}
                                placeholderTextColor={palette.mainText}
                                placeholderTx="addRimborsiScreen.placeholderCategories"
                            />
                        </View>
                    }
                />
            )}


            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                backgroundStyle={style.bottomSheet}
                onDismiss={() => setIsOpen(false)}
            >
                <View style={style.contentContainer}>
                    <Picker
                        itemStyle={style.text}
                        selectedValue={categoria}
                        onValueChange={(itemValue, itemIndex) =>
                        setCategoria(itemValue)
                        }>
                            <Picker.Item label="Trasporti" value="Trasporti" />
                            <Picker.Item label="Albergo" value="Albergo" />
                    </Picker>
                </View>
            </BottomSheetModal>
        </View>
    );
}

export default Categories;

function getStyle(palette) {
    return {
        view: {
            flexDirection: "column" as "column",
            marginTop: spacing.xxs,
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
        titleCard: {
          marginTop: spacing.xs,
          marginStart: spacing.xs,
          color: palette.secondaryText,
        },
        textCard: {
          color: palette.mainText,
        },
        icon: {
          color: palette.mainText,
          marginEnd: spacing.xxs
        },
        row: {
          marginTop: spacing.lg,
          marginEnd: spacing.lg,
        },
        title: {
          fontSize: 24,
          marginStart: spacing.sm,
          marginTop: -spacing.sm,
          color: palette.mainText,
        },
        text: {
          textAlign: 'center' as "center",
          color: palette.mainText
        },
        bottomSheet: {
          backgroundColor: palette.form,
          borderRadius: 50
        },
        contentContainer: {
          flex: 1,
        },
        textField: {
            backgroundColor: palette.form,
            marginStart: spacing.xxs,
            marginTop: 0,
            borderColor: colors.transparent,
            borderRadius: 0,
            color: palette.mainText,
        }
        
    }
}