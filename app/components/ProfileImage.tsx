import React, { useEffect, useMemo, useRef, useState } from "react"
import { StyleProp, TextStyle, View, ViewStyle, useColorScheme } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { Card } from "./Card"
import * as ImagePicker from 'expo-image-picker';
import SvgCamera from "./Svg/SvgCamera"
import SvgGallery from "./Svg/SvgGallery"
import SvgDelete from "./Svg/SvgDelete"
import { useStores } from "app/models"
import SvgRow from "./Svg/SvgRow"

export interface ProfileImageProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ProfileImage = observer(function ProfileImage(props: ProfileImageProps) {

  const {
    authenticationStore : {profileImage, setProfileImage}
  } = useStores()
    const isDark = useColorScheme() === "dark"

    const palette = useMemo(() => {
        return isDark ? colors.dark : colors.light
    }, [isDark])

    const style = useMemo(() => {
        return getStyle(palette);
    }, [palette])

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
        setProfileImage(result.assets[0].uri);
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
        setProfileImage(result.assets[0].uri);
        }
    };
    function deletePhoto () {
        setProfileImage("")
    }

    return (
        <View>

            <Card
                style={style.card}
                onPress={handlePresentModal}
                LeftComponent={
                <View
                    style={style.view}
                >
                    <Text
                        tx="impostazioniScreen.profileTitle"
                        style={style.headingCard}
                        preset="subheading"
                    />
                </View>
                }
                RightComponent={
                    <SvgRow
                        style={style.row}
                    />
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

})

function getStyle(palette) {
  return {
      card: {
          backgroundColor: palette.form,
          borderColor: colors.transparent,
          marginBottom: spacing.md,
          justifyContent: "center" as "center",
          alignItems: "center" as "center",
      },
      view: {
        flexDirection: "row" as "row",
        marginStart: spacing.xs,
        marginTop: spacing.xxs,
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
      headingCard: {
        color: palette.secondaryText,
        marginStart: spacing.xs,
      },
      row: {
        marginTop: spacing.lg,
        marginEnd: spacing.lg,
      },
  };
}
