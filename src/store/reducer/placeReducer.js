import { ADD_PLACE, LOAD_PLACE, REMOVE_PLACE } from "../action/placeAction";  

/* Models */
import Place from "../../models/place";

const initialState = {
    places: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(action.place.id.toString(), action.place.name, action.place.image, action.place.address, action.place.coords.lat, action.place.coords.lng);
            return {
                ...state, 
                places: state.places.concat(newPlace),
            }
        case LOAD_PLACE:
            return{
                ...state,
                places: action.places.map(item => new Place(
                    item.id.toString(),
                    item.name,
                    item.image,
                    item.address,
                    item.lat,
                    item.lng
                ))
            }
        case REMOVE_PLACE:
        return{
            ...state,
            places: state.places.filter((item) => item.id !== action.payload.id)
        }
        default:
            return state;
    }
}