import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import colorReducer from "./colorReducer";

const rootReducer = combineReducers({
    weather: weatherReducer,
    colour: colorReducer
});

export default rootReducer;