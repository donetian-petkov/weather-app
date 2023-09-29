const initialState = '';

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "COLOR_CHANGE":
            console.log("payload is: " + action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default colorReducer;
