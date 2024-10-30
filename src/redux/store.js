import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import {
    useDispatch as useAppDispatch,
    useSelector as useAppSelector
} from "react-redux";
import { rootPeristConfig, rootReducer } from "./rootReducer";

// Configure the Redux store with persisted reducer
const store = configureStore({
    reducer: persistReducer(rootPeristConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});

const {dispatch} = store;
// Create a persistor for persisting the store
const persistor = persistStore(store);

// Alias hooks for useDispatch and useSelector
const useDispatch = useAppDispatch;
const useSelector = useAppSelector;

export { store, persistor, useDispatch, useSelector, dispatch };
