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
    replaceBoards: (state, action: PayloadAction<boardsType[]>) => {
      state.boards = action.payload
    }
  },
});

export const { createBoard, replaceBoards } = allBoards.actions;
export default allBoards.reducer;
