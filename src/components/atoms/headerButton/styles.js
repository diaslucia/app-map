import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../../constants//theme";

const styles = StyleSheet.create({
    text:{
        fontSize: fontSize.title,
        color: colors.white,
        textTransform: "uppercase",
        letterSpacing: 1,
    }
})

export default styles;