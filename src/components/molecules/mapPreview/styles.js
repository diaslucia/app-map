import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../../constants/theme";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    innerContainer: {
        marginBottom: 10,
        width: "100%",
        height: 200,
        borderColor: colors.lightSecondary,
        borderWidth: 1,
    },
});

export default styles;