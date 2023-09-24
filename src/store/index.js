import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from "../config";
import { loadState, saveState } from "./local-storage";
import throttle from 'lodash.throttle';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
    const presistedStore = loadState();

    const store = createStore(
        rootReducer,
        presistedStore,
        composeEnhancers(
            applyMiddleware(
                thunk.withExtraArgument({
                    client: axios,
                    api,
                }),
            ),
        ),
    );

    store.subscribe(throttle(() => {
        saveState({
            theme: store.getState().theme,
        });
    }, 1000));

    return store;
};
