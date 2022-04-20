import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

/* Styles */
import styles from "./styles";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { placeAction } from "../../store/action/index";

/* Components */
import PlaceItem from "../../components/molecules/placeItem/index";

const PlaceList = ({ navigation }) => {
    const dispatch = useDispatch();
    const places = useSelector(state => state.places.places);

    useEffect(() => {
        dispatch(placeAction.loadPlace());
      }, []);

    const onSelectDetail = () => {
        navigation.navigate('PlaceDetail');
    };

    const renderItem = ({item}) => (
        <PlaceItem
          name={item.name}
          address={item.address}
          onSelect={() => onSelectDetail()}
          image={item.image}
          latitude={item.latitude}
          longitude={item.longitude}
        />
    );

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    );
}

export default PlaceList;