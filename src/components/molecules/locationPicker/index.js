import React, { useState, useEffect } from "react";
import { View, Button, Text, ActivityIndicator, Alert } from "react-native";

/* Map */
import * as Location from "expo-location";

/* Components */
import MapPreview from "../mapPreview/index";

/* Style */
import styles from "./styles";
import { colors } from "../../../constants/theme";

const LocationPicker = props => {
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState([]);
    const [checkMap, setCheckMap] = useState(false);

    const { onLocation } = props;

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                Alert.alert(
                    "Permisos insuficientes",
                    "Necesitas darle permisos de localización a la app",
                    [{ text: "Ok" }]
                );
                return;
            }
            onLocation(pickedLocation);
            })
        ();
    }, [pickedLocation]);

    const getLocationHandler = async () => {
        try {
            setIsFetching(true);
            const location = await Location.getCurrentPositionAsync({
                timeout: 5000
            })
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            });
            setCheckMap(true);
            onLocation(pickedLocation);
        } catch (err) {
            Alert.alert(
                "Error",
                "Hubo un error al obtener la localización",
                [{ text: "Ok" }]);
        }
        setIsFetching(false);
    }


    const handlerPickOnMap = () => {
        props.navigation.navigate('Map', {pickedLocation});
    }

    return(
        <View style={styles.container}>
            <MapPreview style={styles.innerContainer} location={pickedLocation} onPress={handlerPickOnMap} check={checkMap}>
                {isFetching ? 
                (<ActivityIndicator size="large" color={colors.strongMain} />)
                : (<Text style={styles.text}>No seleccionaste una locación</Text>)
                }
            </MapPreview>
            <View style={styles.actions}>
                <Button
                    title="Obtener Locación"
                    color={colors.lightSecondary}
                    onPress={getLocationHandler}
                />
                <Button
                    title="Seleccionar Mapa"
                    color={colors.lightSecondary}
                    onPress={handlerPickOnMap}
                />
            </View>
        </View>
    )
}

export default LocationPicker;  