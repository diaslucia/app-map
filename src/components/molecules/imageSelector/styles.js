import { StyleSheet } from "react-native";
import { colors } from "../../../constants//theme";

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    preview: {
      width: "100%",
      height: 200,
      marginBottom: 10,
      justifyContent: "center",
      alignItems: 'center',
      borderColor: colors.lightMain,
      borderWidth: 1,
    },
    image: {
      width: "100%",
      height: "100%",
    }
})

export default styles;