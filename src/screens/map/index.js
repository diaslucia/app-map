import React, { useState, useCallback, useLayoutEffect } from 'react';

/* Components */
import HeaderButton from "../../components/atoms/headerButton/index";

/* Styles */
import styles from "./styles";

/* Map */
import MapView, { Marker } from "react-native-maps";

const Map = props => {
    const [selectedLocation, setSelectedLocation] = useState();

    const region = {
        latitude: props.route.params.pickedLocation.lat,
        longitude: props.route.params.pickedLocation.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const { navigation } = props;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButton
                    name="save"
                    onPress={() => savePickedLocationHandler()}
                />
            )
        })
    }, [navigation])

    const savePickedLocationHandler = useCallback(() => {
        if(!selectedLocation) {
            return;
        }
        navigation.navigate("NewPlace", { picked: selectedLocation })
    }, [selectedLocation]);

    const selectLocationHandler = event => {
        setSelectedLocation({ 
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        })
    }

    let markerCoordinates;
    if(selectedLocation) {
        markerCoordinates = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
        }
    }

    return (
        <MapView
        region={region}
        style={styles.map}
        onPress={selectLocationHandler}
        >
            { markerCoordinates && (
                <Marker title="Ubicación seleccionada" coordinate={markerCoordinates}/>
            )}
        </MapView>
    );
}

export default Map;