import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";

/* Styles */
import styles from "./styles";

const PlaceItem = ({ name, address, onSelect, image, latitude, longitude }) => {
    return(
        <TouchableOpacity onPress={() => onSelect()} style={styles.container}>
            <Image source={{ uri: image }} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.latitude}>{latitude}</Text>
                <Text style={styles.longitude}>{longitude}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default PlaceItem;