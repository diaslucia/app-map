import React from "react";
import { TouchableOpacity, Text, View, /* Image */ } from "react-native";

/* Styles */
import styles from "./styles";

const PlaceItem = ({ name, image, address, onSelect }) => {
    return(
        <TouchableOpacity onPress={() => onSelect()} style={styles.container}>
            {/* <Image source={{uri: image}} style={styles.image} /> */}
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default PlaceItem;