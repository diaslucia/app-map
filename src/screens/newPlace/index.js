import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

/* Styles */
import styles from "./styles";
import { colors } from "../../constants/theme";

/* Redux */
import { useDispatch } from "react-redux";
import { placeAction } from "../../store/action/index";

/* Image */
import ImageSelector from "../../components/molecules/imageSelector/index";

const NewPlace = ({ navigation }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const handleNameChange = text => setName(text);
    
    const handleSavePlace = () => {
        dispatch(placeAction.addPlace(
            name,
            image,
            "Street",
            14.44, 20.00));
        navigation.navigate("Place");
    }

    const handleOnImage = (uri) => {
       setImage(uri);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Dirección</Text>
            <ImageSelector onImage={handleOnImage}/>
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
    );
}

export default NewPlace;