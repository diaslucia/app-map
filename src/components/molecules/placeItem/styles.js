import { StyleSheet } from "react-native";
import { colors, fontSize, margin } from "../../../constants//theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightSecondary,
        borderBottomColor: colors.strongSecondary,
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
      },
      image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: colors.strongMain,
        borderColor: colors.strongSecondary,
        borderWidth: 2,
      },
      details: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      name: {
        color: colors.white,
        fontSize: fontSize.title,
        marginBottom: margin.small,
        textTransform: "uppercase",
      },
      address: {
        color: colors.white,
        fontSize: fontSize.text,
      },
})

export default styles;