import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { boards } from "../../../data";

const initialState = {
    boards: boards
}

export const allBoards = createSlice ({
    name: "allLBaards",
    initialState,
    reducers: {

    }
})

export default allBoards.reducer