import {combineReducers} from 'redux';
import hotGirlReducer from './hotGirlReducer';

export default combineReducers({
    hotgirl: hotGirlReducer,
})