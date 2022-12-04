import { useSelector } from "react-redux"
import { RootState } from "src/redux/store"
import AddTodo from "./addTodol"
import TodoItem from "./todoItem"

const Todo = () => {
  const { todoList } = useSelector((state: RootState) => state.todoList)

  return (
    <div>
      <AddTodo />
      <div>
        {todoList && todoList.map((todoItem) => <TodoItem {...todoItem} />)}
      </div>
    </div>
  )
}

export default Todo
