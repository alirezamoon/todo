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
        <div className="flex items-center justify-center h-full min-h-[48px] border-b border-gray-300 bg-gray-100 px-2 sm:px-6">
          <p className="w-full sm:max-w-lg  lg:max-w-4xl overflow-x-hidden text-gray-400 italic">
            What needs to be done?
          </p>
        </div>
        {todoList.length === 0 && (
          <div className="flex items-center justify-center h-full min-h-[48px] bg-gray-100">
            <p className="w-full sm:max-w-lg  lg:max-w-4xl overflow-x-hidden text-gray-900 text-center">
              There is no data for show!
            </p>
          </div>
        )}
        {todoList && todoList.map((todoItem) => <TodoItem {...todoItem} />)}
      </div>
      <TodoFooter />
    </div>
  )
}

export default Todo
