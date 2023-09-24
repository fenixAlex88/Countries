import { SET_COUTRIES, SET_ERROR, SET_LOADING } from "./countries-actions";

const initialState = {
    status: "idle", //loading | recreived | error
    error: null,
    list: [],
};

export const countriesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return { ...state, status: "loading" };
        case SET_ERROR:
            return { ...state, status: "error", error: payload };
        case SET_COUTRIES:
            return { ...state, status: "recreived", list: payload };
        default:
            return state;
    }
};
