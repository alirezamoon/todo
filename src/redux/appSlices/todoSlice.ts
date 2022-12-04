import { createSlice } from "@reduxjs/toolkit"

const initialState: { todoList: TodoType[] } = {
  todoList: [],
}

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList = [...state.todoList, action.payload]
    },
    removeTodo(state, action) {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      )
    },
  },
})
export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
