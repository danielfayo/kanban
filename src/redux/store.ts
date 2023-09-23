import { configureStore } from '@reduxjs/toolkit'
import allBoardsReducer from './features/boardSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        boards: allBoardsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatc = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;