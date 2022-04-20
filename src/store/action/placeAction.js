export const ADD_PLACE = "ADD_PLACE";

/* Camera */
import * as FileSystem from "expo-file-system";

export const addPlace = ( name, image ) => {
    return async dispatch => {

        const fileName= image.split("/").pop()
        const Path = FileSystem.documentDirectory + fileName

        try{
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (err) {
            console.log(err)
            throw err
        }

        dispatch({type: ADD_PLACE, place: {name, image: Path}})
    }
}