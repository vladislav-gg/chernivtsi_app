import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "Swan Lake",
	description: "Tickets to Swan Lake",
	quantity: 0,
	price: 10,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (item) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			item.quantity += 1;
		},
		decrement: (item) => {
			item.quantity -= 1;
		},
		incrementByAmount: (item, action) => {
			item.quantity += action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter;

export default counterSlice.reducer;
