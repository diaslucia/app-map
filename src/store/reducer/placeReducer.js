import Place from "../../models/places/index";
import { ADD_PLACE, LOAD_PLACE } from "../action/placeAction";  

const initialState = {
    places: [],
};

const placeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
                action.place.id,
                action.place.name,
                action.place.image,
                action.place.address,
                action.place.latitude,
                action.place.longitude,
                );
            return {
                ...state, 
                places: state.places.concat(newPlace),
            }
        case LOAD_PLACE:
            return {
                ...state,
                places: action.place.map(
                item =>
                    new Place(
                    item.id,
                    item.name,
                    item.image,
                    item.address,
                    item.latitude,
                    item.longitude,
                    ),
                ),
            };
        default:
            return state;
    }
}

export default placeReducer;