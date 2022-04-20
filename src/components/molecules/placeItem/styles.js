import { StyleSheet } from "react-native";
import { colors } from "../../../constants//theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: colors.strongMain,
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
      },
      details: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      name: {
        color: colors.strongMain,
        fontSize: 18,
        marginBottom: 10,
      },
      address: {
        color: colors.strongMain,
        fontSize: 14,
      },
})

export default styles;