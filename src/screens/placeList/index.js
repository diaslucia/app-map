import React from 'react';
import { FlatList } from 'react-native';

/* Styles */
import styles from "./styles";

import { useSelector } from "react-redux";

/* Components */
import PlaceItem from "../../components/molecules/placeItem/index";

const PlaceList = ({ navigation }) => {
    const places = useSelector(state => state.places.places);

    const onSelectDetail = () => {
        navigation.navigate("PlaceDetail");
    }

    const renderItem = ({ item }) => {
        <PlaceItem
        name={item.name}
        address="Avenida Siempre Vivas"
        onSelect={() => onSelectDetail()}
        />
    }

    return (
        <FlatList
        style={styles.container}
        data={places}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        />
    );
}

export default PlaceList;