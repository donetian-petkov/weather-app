const initialState = '';

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "COLOR_CHANGE":
            return action.payload;
        default:
            return state;
    }
};

export default colorReducer;
