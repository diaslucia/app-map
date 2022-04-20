export const ADD_PLACE = "ADD_PLACE";
export const LOAD_PLACE = "LOAD_PLACE";

import RNFS from "react-native-fs";

import { insertPlace, fetchPlaces } from "../../db/index";

export default {
    addPlace: (name, image, address, latitude, longitude) => {
        return async dispatch => {
            const fileName = image.split("/").pop();
            const path = "file://${RNFS.DocumentDirectoryPath}/${fileName}";

            try{
                await RNFS.copyFile(image, path);

                const result = await insertPlace(name, path, address, latitude, longitude);

                dispatch({
                    type: ADD_PLACE,
                    place: {
                        id: result.insertId,
                        name,
                        image: path,
                        address,
                        latitude,
                        longitude,
                    }
                });

            } catch (err) {
                console.log(err);
            }
        }
    },
    loadPlace: () => {
        return async dispatch => {
            try {
                const result = await fetchPlaces();
                dispatch({
                type: LOAD_PLACE,
                place: result,
                });
            } catch (err) {
                console.log(err);
            }
        }
    }
}