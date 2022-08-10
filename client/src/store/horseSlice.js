import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    horses: [
        {
            name: "Princess Diana",
            distance: 0
        },
        {

            name: "Cricket",
            distance: 0
        },
        {
            name: "Rebel",
            distance: 0
        },
        {
            name: "Lucy",
            distance: 0
        },
        {
            name: "Lacey",
            distance: 0
        },
        {
            name: "Ginger",
            distance: 0
        },
    ],
};
const horses = createSlice({
    name: 'horses',
    initialState,
    reducers: {
        subscribe: (state, action) => {
            state.horses = action.payload;
        }
    }
});
export const { subscribe, winner } = horses.actions;
export default horses.reducer;