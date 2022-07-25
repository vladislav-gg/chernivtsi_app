import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "Swan Lake",
	description: "Tickets to Swan Lake",
	quantity: 0,
	price: 10,
	image: "/images/swan_lake.webp",
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (item) => {
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
