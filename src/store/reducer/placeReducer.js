import Place from "../../models/place";
import { ADD_PLACE } from "../action/placeAction";  

const initialState = {
    places: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(Date.now(), action.place.name);
            return {
                ...state, 
                places: state.places.concat(newPlace),
            }
        default:
            return state;
    }
}