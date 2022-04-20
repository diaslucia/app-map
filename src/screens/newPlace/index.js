import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

/* Styles */
import styles from "./styles";
import { colors } from "../../constants/theme";

/* Redux */
import { useDispatch } from "react-redux";
import * as placeAction from "../../store/action/placeAction";

/* Components */
import ImageSelector from "../../components/molecules/imageSelector/index";

const NewPlace = ({ navigation }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [selectedImage, setSelectedImage] = useState();

    const handleNameChange = text => setName(text);
    
    const handleSavePlace = () => {
        dispatch(placeAction.addPlace(name, selectedImage));
        navigation.navigate("Place");
    }

    const onHandlerImageTaken = path => {
        setSelectedImage(path);
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <ImageSelector style={styles.image} onImage={onHandlerImageTaken}/>
                <TextInput
                    style={styles.input}
                    onChangeText={handleNameChange}
                    value={name}
                    placeholder="Nombre del lugar"
                    placeholderTextColor={colors.strongSecondary}
                />
            </View>
                <Button
                    title="Guardar dirección"
                    onPress={() => handleSavePlace()}
                    color={colors.lightMain}
                />
        </View>
    );
}

export default NewPlace;