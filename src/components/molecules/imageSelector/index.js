import React, {useState} from "react";
import { Text, View, Button, Image, Platform } from "react-native";

/* Camera */
import { launchCamera } from "react-native-image-picker";
import { PERMISSIONS, request, RESULTS } from "react-native-permissions";
/* Styles */
import styles from "./styles";
import { colors } from "../../../constants/theme";

const ImageSelector = ({ onImage }) => {
    const [pickedResponse, setPickedResponse] = useState();
    const IS_IOS = Platform.OS === "ios";

    const handleTakePicture = async () => {
        const options = {
            selectionLimit: 1,
            mediaType: "photo",
            includeBase64: false,
        }

        let granted;

        if(IS_IOS) {
            granted = await request(PERMISSIONS.IOS.CAMERA);
        } else {
            granted = await request(PERMISSIONS.ANDROIS.CAMERA);
        }

        if(granted === RESULTS.GRANTED) {
            launchCamera(options, response => {
                if(!response.didCancel && !response.error) {
                    setPickedResponse(response.assets[0]);
                    onImage && onImage(response.assets[0].uri);
                }
            })
        } else {
            console.warn("Permiso denegado")
        }

    }

    return(
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedResponse ? (
                    <Text style={styles.text}>No has seleccionado una imagen</Text>
                ) : (
                    <Image source={{ uri: pickedResponse.uri }} style={styles.image} />
                )
                }
            </View>
            <Button title="Elegir Imagen" onPress={handleTakePicture} color={colors.strongSecondary}/>
        </View>
    );
}

export default ImageSelector;