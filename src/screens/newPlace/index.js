import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';

/* Styles */
import styles from "./styles";
import { colors } from "../../constants/theme";

/* Redux */
import { useDispatch } from "react-redux";
import { placeAction } from "../../store/action/index";

const NewPlace = ({ navigation }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleNameChange = text => setName(text);
    
    const handleSavePlace = () => {
        dispatch(placeAction.addPlace(name));
        navigation.navigate("Place");
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.label}>Dirección</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleNameChange}
                    value={name}
                />
                <Button
                    title="Guardar dirección"
                    onPress={() => handleSavePlace()}
                    color={colors.lightMain}
                />
            </View>
        </ScrollView>
    );
}

export default NewPlace;