import React from "react"
import { Image, ImageStyle } from "react-native"

const BackgroundImage = () => {
    return (
        <Image 
            source={require("assets/images/background.jpg")}
            resizeMode="contain"
            style={$image}
        />
    );
}

export default BackgroundImage;

const $image: ImageStyle = {
    height: 450,
    width: '100%',
    resizeMode: "cover",
}