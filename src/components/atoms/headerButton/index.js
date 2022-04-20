import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

/* Styles */
import styles from "./styles";

const HeaderButton = ({ navigation }) => {
    const onPress = () => {
        navigation.push("NewPlace");
    }

    return(
        <TouchableOpacity onPress={() => onPress()}>
            <View style={styles.container}>
                <Text style={styles.text}>+</Text>
            </View>
        </TouchableOpacity>
    );
}

export default HeaderButton;