import { createSlice } from "@reduxjs/toolkit"

const initialState: { todoList: {}[] } = {
  todoList: [],
}

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList = [...state.todoList, action.payload]
    },
  },
})
export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
