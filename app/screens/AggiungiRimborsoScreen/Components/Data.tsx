import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { Button, Card, Text } from "app/components"
import SvgTranslate from "app/components/Svg/SvgTranslate"
import { useStores } from "app/models"
import { colors, spacing } from "app/theme"
import React, { useMemo, useRef, useState } from "react"
import { Platform, View, useColorScheme } from "react-native"
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const Data = () => {
    const isDark = useColorScheme() === "dark"

    const palette = useMemo(() => {
        return isDark ? colors.dark : colors.light
    }, [isDark])

    const style = useMemo(() => {
        return getStyle(palette);
    }, [palette])

    const bottomSheetModalRef = useRef(null);

    const snapPoints = ["25%", "48%", "75%"];

    function handlePresentModal() {
        if(Platform.OS === "ios") {
            showMode('date');
        }
        bottomSheetModalRef.current?.present();
        setTimeout(() => {
            setIsOpen(true);
        }, 100);
    }

    const [isOpen, setIsOpen] = useState(false);

    const {
        rimborsoStore: { data, setData, validationDataError: validationError },
    } = useStores()

    //const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setData(currentDate);
    };
  
    const showMode = (currentMode) => {
        Platform.OS === "ios" ? (
            setShow(true),
            setMode(currentMode)
        ) : (
            DateTimePickerAndroid.open({
                value: data,
                onChange,
                mode: currentMode,
                is24Hour: true,
              })
        )
    };
  
    const showDatepicker = () => {
        showMode('date');
    };
  
    return (
        <View>

          <Card
            style={style.card}
            headingTx="addRimborsiScreen.date"
            headingStyle={style.headingCard}
            onPress={handlePresentModal}
            ContentComponent={
                <Text 
                    style={style.text}>
                     {data ? data.toLocaleDateString() : ''}
                </Text>
            }
          />

            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                backgroundStyle={style.bottomSheet}
                onDismiss={() => setIsOpen(false)}
            >
                <View style={style.contentContainer}>
                    {Platform.OS === "ios" ? (
                        show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={data}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChange}
                                display="spinner"
                            />
                        )
                    ) : (
                        <View>
                            <Button onPress={showDatepicker} />
                        </View>
                    )}
                </View>
            </BottomSheetModal>

        </View>

    );
}

export default Data;

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
        text: {
          color: palette.mainText,
          marginStart: spacing.xs,
          marginTop: spacing.xs,
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
