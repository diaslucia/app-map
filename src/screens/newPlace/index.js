import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

/* Styles */
import styles from "./styles";
import { colors } from "../../constants/theme";

/* Redux */
import { useDispatch } from "react-redux";
import * as placeAction from "../../store/action/placeAction";

/* Components */
import ImageSelector from "../../components/molecules/imageSelector/index";
import LocationPicker from "../../components/molecules/locationPicker/index";

const NewPlace = ({ navigation }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [selectedImage, setSelectedImage] = useState();
    const [location, setLocation] = useState([]);
    const handleNameChange = text => setName(text);

    const handleSavePlace = () => {
        dispatch(placeAction.addPlace(name, selectedImage, location));
        navigation.navigate("Place");
    }

    const handleOnLocation = location => {
        setLocation(location);
    };

    const onHandlerImageTaken = path => {
        setSelectedImage(path);
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <ImageSelector style={styles.image} onImage={onHandlerImageTaken}/>
                <LocationPicker navigation={navigation} onLocation={handleOnLocation}/>
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