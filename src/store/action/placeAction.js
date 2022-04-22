export const ADD_PLACE = "ADD_PLACE";
export const LOAD_PLACE = "LOAD_PLACE";
export const REMOVE_PLACE = "REMOVE_PLACE";

/* Camera */
import * as FileSystem from "expo-file-system";

/* SQLite */
import { insertAddress, fetchAddress, removeAddress } from "../../db/index";

/* Map */
import MAP from "../../constants/map";

export const addPlace = ( name, image, location ) => {
    return async dispatch => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${MAP.API_KEY}`,);

        if(!response.ok) throw new Error("[RESPONSE] Something went wrong!");
        
        const resData = await response.json();
        if(!resData.results) throw new Error("[GEOCODE] Something went wrong!");

        const address = resData.results[0].formatted_address;

        const fileName= image.split("/").pop()
        const Path = FileSystem.documentDirectory + fileName

        try{
            FileSystem.moveAsync({
                from: image,
                to: Path
            })

            const result = await insertAddress( name, Path, address, location.lat, location.lng)
            dispatch({ type: ADD_PLACE, place: { id: result.insertId, name, image: Path, address: address, coords: { lat: location.lat, lng: location.lng}}})

        } catch (err) {
            console.log(err)
            throw err
        }

        dispatch({type: ADD_PLACE, place: { id: result.insertId, name, image: Path, address: address, coords: { lat: location.lat, lng: location.lng} }})
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

export const removePlace = (id) => {
    return async dispatch => {
        try {
            const result = await removeAddress(id)
            dispatch({ type: REMOVE_PLACE, payload: { id: result.insertId } })
        } catch (err) {
            throw err
        }
    }
}