import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./mainNavigator";

const Navigator = () => {
    return(
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}

export default Navigator;