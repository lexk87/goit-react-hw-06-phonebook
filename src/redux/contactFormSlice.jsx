import { createSlice } from '@reduxjs/toolkit';

const contactFormSlice = createSlice({
    name: 'contactForm',
    initialState: false,
    reducers: {
        isFormOpened: state => !state,
    },
});

export const { isFormOpened } = contactFormSlice.actions;
export const contactFormReducer = contactFormSlice.reducer;
