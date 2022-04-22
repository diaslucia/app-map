import React from 'react';
import { ScrollView, Image, View, Text } from 'react-native';

/* Redux */
import { useSelector } from 'react-redux';

/* Styles */
import styles from "./styles";

/* Components */
import MapPreview from "../../components/molecules/mapPreview/index";

const PlaceDetail = ({ route }) => {
    const { placeID } = route.params
    const place = useSelector(state => state.places.places.find(place => place.id === placeID))

    console.warn(place);
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: place.image }} style={styles.image}/>
            <View style={styles.location}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{place.name}</Text>
                </View>
                    <Text style={styles.address}>{place.address}</Text>
                <MapPreview
                style={styles.map}
                location={{lat: place.lat, lng: place.lng}}
                check={true}
                />
            </View>
            
        </ScrollView>
    );
}

export default PlaceDetail;