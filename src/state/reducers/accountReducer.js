const reducer = (state = 0, action) => {
    // read action and return appropriate state
    switch (action.type) {
        case "deposit":
            return state + action.payload
        case "withdraw":
            return state - action.payload
        default:
            return state;
    };
};

export default reducer;
