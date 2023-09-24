import { CLEAR_DETAILS } from "../countries/countries-actions";
import { SET_COUNTRY, SET_ERROR, SET_LOADING, SET_NEIGHBORS } from "./details-actions";

const initialState = {
    currCountry: null,
    status: "idle",
    error: null,
    neighbors: [],
};

export const detailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return { ...state, status: "loading", error: null };
        case SET_ERROR:
            return { ...state, status: "rejected", error: payload };
        case SET_COUNTRY:
            return { ...state, currCountry: payload, status: "recreived", error: null };
        case CLEAR_DETAILS:
            return initialState;
        case SET_NEIGHBORS:
            return { ...state, neighbors: payload };
        default:
            return state;
    }
};
