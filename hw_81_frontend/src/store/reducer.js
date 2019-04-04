import {CREATE_LINK_SUCCESS} from "./action";

const initialState = {
    link: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case  CREATE_LINK_SUCCESS:
            return {...state, link: action.data};
        default:
            return state;
    }
};

export default reducer;