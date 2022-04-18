import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Styles */
import { colors } from "../constants/theme";

/* Components */
import PlaceList from "../screens/placeList/index";
import PlaceDetail from "../screens/placeDetail/index";
import Map from "../screens/map/index";
import NewPlace from "../screens/newPlace/index";
import HeaderButton from "../components/atoms/headerButton/index";

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
    return(
        <MainStack.Navigator
            initialRouteName="Place"
            screenOptions={{
                headerStyle:{
                    backgroundColor: colors.strongMain,
                },
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <MainStack.Screen
                name="Place"
                component={PlaceList}
                options={({ navigation }) => (
                    {
                        title: "Places",
                        headerRight: () => <HeaderButton navigation={navigation}/>
                    }
                )}/>
            <MainStack.Screen name="PlaceDetail" component={PlaceDetail} options={{ title: "Place Detail" }}/>
            <MainStack.Screen name="NewPlace" component={NewPlace} options={{ title: "New Place" }}/>
            <MainStack.Screen name="Map" component={Map} options={{ title: "Map" }}/>
        </MainStack.Navigator>
    );
}

export default MainNavigator;