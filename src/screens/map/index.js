import React, { useState, useLayoutEffect } from 'react';

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
                    onPress={() => navigation.navigate('NewPlace')}
                />
            )
        })
    }, [navigation])

/*     console.warn(selectedLocation); */

    const selectLocationHandler = event => {
        setSelectedLocation({ 
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        })
    }

    return (
        <MapView
        region={region}
        style={styles.map}
        onPress={selectLocationHandler}
        >
            { selectedLocation && (
                <Marker title="Ubicación seleccionada" coordinate={{
                    latitude: selectedLocation.lat,
                    longitude: selectedLocation.lng,
                }}/>
            )}
        </MapView>
    );
}

export default Map;