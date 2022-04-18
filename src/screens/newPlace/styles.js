import { StyleSheet } from "react-native";
import { colors, fontSize, margin } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: margin.medium,
        marginVertical: margin.medium,
    },
    label: {
        fontSize: fontSize.text,
        color: colors.text,
        fontWeight: "bold",
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.lightMain,
        marginVertical: margin.medium,
    }
})

export default styles;