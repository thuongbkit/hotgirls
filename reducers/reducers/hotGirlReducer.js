import { SET_HOT_GIRLS, 
    IS_LOADING_HOT_GIRLS,
    ADD_FAVORITE_HOTGIRL, 
    REMOVE_FAVORITE_HOTGIRL 
} 
from '../../actions/hotgirl';

const initialState = {
    hotgirls: [],
    isLoading: false,
    favorites: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_HOT_GIRLS:
            return {
                ...state,
                hotgirls: action.hotgirls,
                isLoading: false
            }
        case IS_LOADING_HOT_GIRLS:
            return {
                ...state,
                isLoading: true
            }
        case ADD_FAVORITE_HOTGIRL:
            return {
                ...state,
                favorites: state.favorites.some(item => item.phone === action.hotgirl.phone) ? state.favorites : state.favorites.concat(action.hotgirl)
            }
        case REMOVE_FAVORITE_HOTGIRL:
        return {
            ...state,
            favorites: state.favorites.filter(item => item.phone !== action.hotgirl.phone)
        }
        default:
            return state;
    }
}
