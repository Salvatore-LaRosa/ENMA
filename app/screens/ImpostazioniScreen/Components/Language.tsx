import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { Picker } from "@react-native-picker/picker"
import { Card, Text } from "app/components"
import SvgRow from "app/components/Svg/SvgRow"
import SvgTranslate from "app/components/Svg/SvgTranslate"
import { useStores } from "app/models"
import { colors, spacing } from "app/theme"
import React, { useMemo, useRef, useState } from "react"
import { Platform, View, useColorScheme } from "react-native"

const Language = () => {

    const isDark = useColorScheme() === "dark"

    const palette = useMemo(() => {
        return isDark ? colors.dark : colors.light
    }, [isDark])

    const style = useMemo(() => {
        return getStyle(palette);
    }, [palette])

    const {
        authenticationStore: { language, setLanguage},
    } = useStores()

    const bottomSheetModalRef = useRef(null);

    const snapPoints = ["25%", "48%", "75%"];

    function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
        setIsOpen(true);
    }, 100);
    }

    const [selectedLanguage, setSelectedLanguage] = useState();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View>
            {Platform.OS === "ios" ? (
                <Card
                    style={style.card}
                    headingTx="impostazioniScreen.languageTitle"
                    headingStyle={style.headingCard}
                    onPress={handlePresentModal}
                    ContentComponent={
                        <View
                            style={style.view}
                        >
                            <SvgTranslate style={style.icon}/>
                            <Text
                            text={language}
                            style={style.textCard}
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
                    heading="Lingua"
                    headingStyle={style.headingCard}
                    ContentComponent={
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                        }>
                            <Picker.Item label="Italiano (Italia)" value="italian" />
                            <Picker.Item label="English (UK)" value="English" />
                    </Picker>
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
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                        }>
                            <Picker.Item label="Italiano (Italia)" value="italian" />
                            <Picker.Item label="English (UK)" value="English" />
                    </Picker>
                </View>
            </BottomSheetModal>
        </View>
    );
}

export default Language;

function getStyle(palette) {
    return {
        view: {
            flexDirection: "row" as "row",
            marginStart: spacing.xs,
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
        
    }
}