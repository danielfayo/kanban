import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState : { showSidebar: boolean } = {
    showSidebar: true
}

export const showSidebar = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
      changeShow : (state, action: PayloadAction<boolean>) => {
        state.showSidebar = action.payload
      }
    },
  });

  export const { changeShow } = showSidebar.actions;
export default showSidebar.reducer;