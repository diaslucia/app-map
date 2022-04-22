import React from "react";
import { View, Image } from "react-native";

/* Map */
import MAP from "../../../constants/map";

/* Styles */
 import styles from "./styles";

const MapPreview = (props) => {
    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${props.location.lat},${props.location.lng}&key=${MAP.API_KEY}`

    return(
    <View style={{...styles.container, ...props.style}}>
        {props.check ?
        (<Image style={styles.image} source={{uri: mapPreviewUrl}}/>)
        :
        (props.children)
        }
    </View>
    );
}

export default MapPreview;