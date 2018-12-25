import { HOST } from '../constants';
import normalizeHotGirls from '../utils';

export const SET_HOT_GIRLS = 'SET_HOT_GIRLS';

export const IS_LOADING_HOT_GIRLS = 'IS_LOADING_HOT_GIRLS';

export const ADD_FAVORITE_HOTGIRL = 'ADD_FAVORITE_HOTGIRL';

export const REMOVE_FAVORITE_HOTGIRL = 'REMOVE_FAVORITE_HOTGIRL';

export function setHotGirls(hotgirls) {
    return {
        type: SET_HOT_GIRLS,
        hotgirls
    }
}

export function isLoadingHotGirls() {
    return {
        type: IS_LOADING_HOT_GIRLS
    }
}

export function addFavorite(hotgirl) {
    return {
        type: ADD_FAVORITE_HOTGIRL,
        hotgirl
    }
}

export function removeFavorite(hotgirl) {
    return {
        type: REMOVE_FAVORITE_HOTGIRL,
        hotgirl
    }
}



export function getHotGirls() {
    return (dispatch) => {
        dispatch(isLoadingHotGirls());
        return fetch(`${HOST}hotgirls`)
        .then(response => response.json())
        .then(json => {
            if (json) {
                dispatch(setHotGirls(normalizeHotGirls(json)))
            } else {
                alert('Error')
            }
        })
        .catch(e => alert(e))
    }
}