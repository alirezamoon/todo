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
    changeStatus(state, action) {
      let newTodoList = [...state.todoList]
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      )
      newTodoList[index].status = action.payload.status
      state.todoList = newTodoList
    },
  },
})
export const { addTodo, removeTodo, changeStatus } = todoSlice.actions
export default todoSlice.reducer
