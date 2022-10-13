import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	categoryId: 0,
	currentPage: 1,
};

const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
	},
});

export const { setCategoryId, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;