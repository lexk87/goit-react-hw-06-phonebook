import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { contactFormReducer } from './contactFormSlice';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsConfig = {
    key: 'contacts',
    storage,
};

const persistedContactsReducer = persistReducer(
    contactsConfig,
    contactsReducer
);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterReducer,
        contactForm: contactFormReducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
