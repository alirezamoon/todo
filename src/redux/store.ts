import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "./appSlices/todoSlice"

export const store = configureStore({
  reducer: {
    todoList: todoSlice,
  },
  devTools: true,
})
