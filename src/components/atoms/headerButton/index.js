import React from "react";
import { TouchableOpacity, Text } from "react-native";

/* Styles */
import styles from "./styles";

const HeaderButton = ({ navigation }) => {
    const onPress = () => {
        navigation.push("NewPlace");
    }

    return(
        <TouchableOpacity onPress={() => onPress()}>
            <Text style={styles.text}>New</Text>
        </TouchableOpacity>
    );
}

export default HeaderButton;