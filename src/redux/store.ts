import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "./appSlices/todoSlice"

const store = configureStore({
  reducer: {
    todoList: todoSlice,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>

export default store
