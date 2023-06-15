// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import { userReducer } from './reducers/userReducer';
import { templateReducer } from './reducers/templateReducer';

// const reducer = combineReducers({
//   user: userReducer,
// })
// const store = configureStore({
//   reducer,
// })
// export default store;



// import { configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose the storage method (e.g., local storage)
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    user: userReducer,
    template: templateReducer,
});

// Create the Redux store with persistence for each reducer
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);
