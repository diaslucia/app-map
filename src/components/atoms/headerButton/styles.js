import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../../constants//theme";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 100,
        width: 30,
        height: 30,
        elevation: 5,
    },
    text:{
        fontSize: fontSize.button,
        color: colors.strongMain,
        textTransform: "uppercase",
        letterSpacing: 1,
        textAlign: "center",
    }
})

export default styles;