import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] }; // Ensure 'items' is initialized

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload });
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = crudSlice.actions;
export default crudSlice.reducer;
