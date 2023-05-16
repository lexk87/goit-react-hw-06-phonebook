import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contactsList: [
        { id: 'id-1', name: 'Luke Skywalker', number: '459-12-56' },
        { id: 'id-2', name: 'Darth Vader', number: '443-89-12' },
        { id: 'id-3', name: 'Obi-Wan Kenobi', number: '645-17-79' },
        { id: 'id-4', name: 'Han Solo', number: '227-91-26' },
        { id: 'id-5', name: 'Leia Organa', number: '753-87-15' },
        { id: 'id-6', name: 'Chewbacca', number: '138-89-71' },
        { id: 'id-7', name: 'Jabba the Hutt', number: '528-91-37' },
        { id: 'id-8', name: 'C-3PO', number: '364-11-86' },
        { id: 'id-9', name: 'R2-D2', number: '859-48-93' },
    ],
};

const contactsSlice = createSlice({
    name: 'contscts',
    initialState,
    reducers: {
        addContact(state, action) {
            state.contactsList.unshift(action.payload);
        },
        deleteContact(state, action) {
            state.contactsList = state.contactsList.filter(
                ({ id }) => id !== action.payload
            );
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
