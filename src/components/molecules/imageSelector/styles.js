import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../../constants//theme";

const styles = StyleSheet.create({
    preview: {
      width: "100%",
      height: 200,
      marginBottom: 10,
      justifyContent: "center",
      alignItems: 'center',
      borderColor: colors.lightSecondary,
      borderWidth: 1,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    text: {
      color: colors.strongSecondary,
      fontSize: fontSize.text,
    }
})

export default styles;