import { createSlice } from '@reduxjs/toolkit';

const contactFormSlice = createSlice({
    name: 'contactForm',
    initialState: { isFormOpened: false },
    reducers: {
        toggleForm(state) {
            state.isFormOpened = !state.isFormOpened;
        },
    },
});

export const { toggleForm } = contactFormSlice.actions;
export const contactFormReducer = contactFormSlice.reducer;
