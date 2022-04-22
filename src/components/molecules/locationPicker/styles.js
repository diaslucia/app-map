import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../../constants/theme";

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
    },
    innerContainer: {
        marginBottom: 10,
        width: "100%",
        height: 200,
        borderColor: colors.lightSecondary,
        borderWidth: 1,
    },
    text: {
        color: colors.strongSecondary,
        fontSize: fontSize.text,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    }
});

export default styles;