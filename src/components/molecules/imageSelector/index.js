import React, { useState } from "react";
import { View, Button, Image, Text, Alert } from "react-native";

/* Styles */
import styles from "./styles";
import { colors } from "../../../constants/theme";

/* Camera */
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ImageSelector = (props) => {
    const [pickedUrl, setPickedUrl] = useState();

    const verifyPermissions = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if( status !== "granted") {
            Alert.alert(
                "Permisos insuficientes",
                "Necesitas dar permisos de uso de la cámara para usar esta aplicación",
                [{ text: "Ok" }]
            );
            return false;
        }
        return true;
    }

    const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions();
        if(!isCameraOk) return
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8
        })

        setPickedUrl(image.uri)
        props.onImage(image.uri)
    }

    return(
        <View style={styles.container}>
            <View style={styles.preview}>
                {   !pickedUrl
                    ?
                    (<Text>No seleccionaste una foto</Text>)
                    :
                    (<Image
                    style={styles.image}
                    source={{uri: pickedUrl}} 
                    />)
                }
            </View>
            <Button
                title="Tomar Foto"
                color={colors.lightMain}
                onPress={handlerTakeImage}
            />
        </View>
    );
}

export default ImageSelector;