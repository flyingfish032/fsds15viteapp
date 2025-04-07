const Navreducer = (state = "Page1", action) => {
    switch (action.type) {
        case "page":
            return action.data; 
        default:
            return state;
    }
};

export default Navreducer;
