import React from "react";
import { TouchableOpacity} from "react-native";

/* Icons */
import { AntDesign } from '@expo/vector-icons'; 

const HeaderButton = ({ name, onPress }) => {

    return(
        <TouchableOpacity onPress={() => onPress()}>
                <AntDesign name={name} size={25} color="white" />
        </TouchableOpacity>
    );
}

export default HeaderButton;