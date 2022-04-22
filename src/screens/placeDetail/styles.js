import { StyleSheet } from "react-native";
import { colors, fontSize, padding, margin } from "../../constants/theme";

const styles = StyleSheet.create({
    image: {
        height: "35%",
        minHeight: 300,
        width: "100%",
        backgroundColor: colors.white,
    },
    location: {
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        backgroundColor: colors.white,
    },
    address: {
        color: colors.strongSecondary,
        fontSize: fontSize.text,
        paddingVertical: padding.large,
        paddingHorizontal: padding.medium,
        textAlign: "center",
    },
    title: {
        color: colors.white,
        fontSize: fontSize.title,
        textTransform: "uppercase",
        textAlign: "center",
        paddingVertical: margin.large,
    },
    titleContainer: {
        width: "100%",
        backgroundColor: colors.strongSecondary,
    },
    map: {
        height: 300,
        width: "100%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
})

export default styles;