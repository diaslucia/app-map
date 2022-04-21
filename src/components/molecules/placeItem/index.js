import React from "react";
import { TouchableOpacity, Text, View, Image, Button } from "react-native";

/* Styles */
import styles from "./styles";
import { colors } from "../../../constants/theme";

/* Icons */
import { AntDesign } from '@expo/vector-icons'; 

const PlaceItem = ({ name, image, address, onSelect, onPress }) => {
    return(
        <TouchableOpacity onPress={() => onSelect()} style={styles.container}>
             <Image source={{uri: image}} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
            <TouchableOpacity onPress={() => onPress()} style={styles.delete}>
                <AntDesign name="delete" size={24} color={colors.white} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

export default PlaceItem;