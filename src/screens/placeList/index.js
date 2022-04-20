import React from 'react';
import { FlatList } from 'react-native';

/* Styles */
import styles from "./styles";

/* Redux */
import { useSelector } from "react-redux";

/* Components */
import PlaceItem from "../../components/molecules/placeItem/index";

const PlaceList = ({ navigation }) => {
    const places = useSelector(state => state.places.places);

    const onSelectDetail = () => {
        navigation.navigate("PlaceDetail");
    }

    const renderItem = ({ item }) => (
        <PlaceItem
            name={item.name}
            image={item.image}
            address="Avenida Siempre Vivas"
            onSelect={() => onSelectDetail()}
        />
    )

    console.warn(places);

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    );
}

export default PlaceList;