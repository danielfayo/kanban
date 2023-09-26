import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { boards } from "../../../data";
import { boardsType, columnType } from "@/lib/types";

const initialState: { boards: boardsType[] } = {
  boards: boards,
};

export const allBoards = createSlice({
  name: "allLBaards",
  initialState,
  reducers: {
    createBoard: (state, action: PayloadAction<boardsType>) => {
      state.boards = [...state.boards, action.payload];
    },
    //         createColumn: (state, action: PayloadAction<columnType>) => {
    // state.boards =
    //         }
  },
});

export const { createBoard } = allBoards.actions;
export default allBoards.reducer;
