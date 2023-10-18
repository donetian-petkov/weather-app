import {FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR, CLEAR_WEATHER_ERROR} from '../actions/actionTypes.js';

const initialState = {
    data: null,
    error: null
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_SUCCESS:
            return { ...state, data: action.payload };
        case FETCH_WEATHER_ERROR:
            return { ...state, error: action.payload };
        case CLEAR_WEATHER_ERROR:
            return { ...state, error: null };

        default:
            return state;
    }
};

export default weatherReducer;
