export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (name) => {
    return {
        type: ADD_PLACE,
        place: {
            name
        },
    }
}