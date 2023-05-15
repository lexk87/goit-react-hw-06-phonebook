import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contactsList: [
        { id: 'id-1', name: 'Droid #1', number: '459-12-56' },
        { id: 'id-2', name: 'Droid #2', number: '443-89-12' },
        { id: 'id-3', name: 'Droid #3', number: '645-17-79' },
        { id: 'id-4', name: 'Droid #4', number: '227-91-26' },
        { id: 'id-5', name: 'Droid #5', number: '753-87-15' },
        { id: 'id-6', name: 'Droid #6', number: '138-89-71' },
        { id: 'id-7', name: 'Droid #7', number: '528-91-37' },
        { id: 'id-8', name: 'Droid #8', number: '364-11-86' },
        { id: 'id-9', name: 'Droid #9', number: '859-48-93' },
    ],
};

const contactsSlice = createSlice({
    name: 'contscts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contactsList = [action.payload, ...state.contactsList];
        },
        deleteContact: (state, action) => {
            state.contactsList = state.contactsList.filter(
                contact => contact.id !== action.payload
            );
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
