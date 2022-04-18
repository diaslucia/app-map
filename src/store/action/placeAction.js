export const ADD_PLACE = "ADD_PLACE";

export default {
    addPlace: (name) => {
        return {
            type: ADD_PLACE,
            place: {
                name
            },
        }
    }
}