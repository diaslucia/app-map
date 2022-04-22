import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Styles */
import { colors, fontSize } from "../constants/theme";

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
                    fontSize: fontSize.title,
                    color: colors.white
                },
                headerTitleAlign: "center",
                headerTintColor: colors.white,
            }}
        >
            <MainStack.Screen
                name="Place"
                component={PlaceList}
                options={({ navigation }) => (
                    {
                        title: "MIS DIRECCIONES",
                        headerRight: () => <HeaderButton navigation={navigation} name="pluscircle" onPress={() => navigation.push("NewPlace")}/>
                    }
                )}/>
            <MainStack.Screen name="PlaceDetail" component={PlaceDetail} options={{ title: "DETALLE" }}/>
            <MainStack.Screen name="NewPlace" component={NewPlace} options={{ title: "NUEVA DIRECCIÓN" }}/>
            <MainStack.Screen
                name="Map"
                component={Map} options={{ title: "MAPA" }}/>
        </MainStack.Navigator>
    );
}

export default MainNavigator;