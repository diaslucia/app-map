export const ADD_PLACE = "ADD_PLACE";
export const LOAD_PLACE = "LOAD_PLACE";

/* Camera */
import * as FileSystem from "expo-file-system";

/* SQLite */
import { insertAddress, fetchAddress } from "../../db/index";

export const addPlace = ( name, image ) => {
    return async dispatch => {

        const fileName= image.split("/").pop()
        const Path = FileSystem.documentDirectory + fileName

        try{
            FileSystem.moveAsync({
                from: image,
                to: Path
            })

            const result = await insertAddress( name, Path, "address", 13.4, 10.5)
            dispatch({ type: ADD_PLACE, place: { id: result.insertId, name, image: Path }})

        } catch (err) {
            console.log(err)
            throw err
        }

        dispatch({type: ADD_PLACE, place: {name, image: Path}})
    }
}

export const loadAddress = () => {
    return async dispatch => {
        try {
            const result = await fetchAddress()
            dispatch({ type: LOAD_PLACE, places: result.rows._array })
        } catch (err) {
            throw err
        }
    }
}