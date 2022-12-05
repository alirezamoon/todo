import { createSlice } from "@reduxjs/toolkit"

const initialState: {
  todoList: TodoType[]
  todoListAll: TodoType[]
  activeTodosNumber: number
  currentCategory: string
} = {
  todoListAll: [],
  todoList: [],
  activeTodosNumber: 0,
  currentCategory: "all",
}

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList = [...state.todoList, action.payload]
      state.todoListAll = [...state.todoListAll, action.payload]
      state.activeTodosNumber++
    },
    removeTodo(state, action) {
      let newTodoList = [...state.todoList]
      let newTodoListAll = [...state.todoListAll]
      state.todoList = newTodoList.filter((todo) => todo.id !== action.payload)
      state.todoListAll = newTodoListAll.filter(
        (todo) => todo.id !== action.payload
      )
      state.activeTodosNumber--
    },
    changeStatus(state, action) {
      let newTodoList = [...state.todoList]
      let newTodoListAll = [...state.todoListAll]
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      )
      const indexAll = state.todoListAll.findIndex(
        (todo) => todo.id === action.payload.id
      )

      newTodoList[index].status = action.payload.status
      newTodoListAll[indexAll].status = action.payload.status

      if (state.currentCategory === "active")
        newTodoList = newTodoList.filter((todo) => todo.status === "active")

      state.todoList = newTodoList
      state.todoListAll = newTodoListAll

      if (action.payload.status === "done") state.activeTodosNumber--
      else state.activeTodosNumber++
    },
    categorizeTodos(state, action) {
      let newTodoList = [...state.todoListAll]
      if (action.payload === "active")
        newTodoList = newTodoList.filter((todo) => todo.status === "active")
      state.todoList = newTodoList
      state.currentCategory = action.payload
    },
  },
})
export const { addTodo, removeTodo, changeStatus, categorizeTodos } =
  todoSlice.actions
export default todoSlice.reducer
