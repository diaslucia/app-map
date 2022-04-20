import { StyleSheet } from "react-native";
import { colors, padding, margin, fontSize } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        marginHorizontal: margin.medium,
        marginVertical: margin.medium,
    },
    innerContainer: {
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.lightSecondary,
        marginVertical: margin.large,
        padding: padding.small,
        fontSize: fontSize.text,
    },
})

export default styles;