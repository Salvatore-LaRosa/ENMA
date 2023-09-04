import { Button, Text, Icon, Card } from "app/components"
import { useStores } from "app/models"
import { colors, spacing } from "app/theme"
import { LinearGradient } from "expo-linear-gradient"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { View, useColorScheme, PermissionsAndroid, Image } from "react-native"

import * as ImagePicker from 'expo-image-picker';

// Svg Components
import SvgPhoto from "app/components/Svg/SvgPhoto"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import SvgCamera from "app/components/Svg/SvgCamera"
import SvgGallery from "app/components/Svg/SvgGallery"
import SvgDelete from "app/components/Svg/SvgDelete"

const LoadPhoto = () => {

    const isDark = useColorScheme() === "dark"

    const palette = useMemo(() => {
        return isDark ? colors.dark : colors.light
    }, [isDark])

    const style = useMemo(() => {
        return getStyle(palette);
    }, [palette])

    const [image, setImage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const bottomSheetModalRef = useRef(null);

    const snapPoints = ["25%", "48%", "75%"];

    function handlePresentModal() {
        bottomSheetModalRef.current?.present();
        setTimeout(() => {
          setIsOpen(true);
        }, 100);
    }

    const pickGallery = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
        setImage(result.assets[0].uri);
        }
    };

    const pickCamera = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
        setImage(result.assets[0].uri);
        }
    };
    function deletePhoto () {
        setImage(null)
    }

    return (
        <View>

        <Card
            style={style.card}
            onPress={handlePresentModal}
            ContentComponent={
            <View
                style={style.iconPhoto}
            >
            {image===null?
                <SvgPhoto/> :
                image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />

            }
            </View>
            }
        />



        
        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            backgroundStyle={style.bottomSheet}
            onDismiss={() => setIsOpen(false)}
          >
            <View>
                <Text 
                    tx="addRimborsiScreen.loadPhotoTitle"
                    preset="subheading"
                    style={style.title}
                />
                <View 
                    style={style.contentContainer}
                >
                    <SvgCamera
                        onPress={pickCamera}
                    />
                    <SvgGallery
                        onPress={pickGallery}
                    />
                    <SvgDelete
                        onPress={deletePhoto}
                    />
                </View>
            </View>
          </BottomSheetModal>
        </View>
    )

}

export default LoadPhoto;

function getStyle(palette) {
    return {
        card: {
            backgroundColor: palette.form,
            borderColor: colors.transparent,
            marginBottom: spacing.md,
            justifyContent: "center" as "center",
            alignItems: "center" as "center",
        },
        iconPhoto: {
            margin: spacing.md,
            justifyContent: "center" as "center",
            alignItems: "center" as "center",
        },
        contentContainer: {
          flexDirection: "row" as "row",
          alignItems: "center" as "center",
          justifyContent: "space-between" as "space-between",
          paddingStart: spacing.xxl,
          paddingEnd: spacing.xxl,
        },
        bottomSheet: {
          backgroundColor: palette.form,
          borderRadius: 50
        },
        title: {
            color: palette.mainText,
            textAlign: "center" as "center",
            paddingTop: spacing.lg,
            paddingBottom: spacing.xl
        },
    };
  }