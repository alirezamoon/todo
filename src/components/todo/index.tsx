import { useSelector } from "react-redux"
import { RootState } from "src/redux/store"
import AddTodo from "./addTodol"
import TodoFooter from "./todoFooter"
import TodoItem from "./todoItem"

const Todo = () => {
  const { todoList } = useSelector((state: RootState) => state.todoList)

  return (
    <div>
      <AddTodo />
      <div>
        {todoList && todoList.map((todoItem) => <TodoItem {...todoItem} />)}
      </div>
      <TodoFooter />
    </div>
  )
}

export default Todo
