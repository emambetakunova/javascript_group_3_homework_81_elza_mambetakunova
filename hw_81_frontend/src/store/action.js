import axios from '../axios-api';

export const CREATE_LINK_SUCCESS = 'CREATE_LINK_SUCCESS';


export const createLinkSuccess = (data) => {
    return {type: CREATE_LINK_SUCCESS, data};
};


export const createLink = (linkData) => {
    return dispatch => {
        return axios.post('/link', linkData).then(
            (response) => dispatch(createLinkSuccess(response.data))
        );
    };
};