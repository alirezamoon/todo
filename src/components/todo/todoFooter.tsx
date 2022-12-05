import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { categorizeTodos, removeDoneTodos } from "src/redux/appSlices/todoSlice"
import { RootState } from "src/redux/store"
import { toast } from "react-toastify"

const TodoFooter = () => {
  const dispatch = useDispatch()

  const { activeTodosNumber } = useSelector(
    (state: RootState) => state.todoList
  )

  const [filter, setFilter] = useState("all")

  const changeFilterHandler = (text: string) => {
    dispatch(categorizeTodos(text))
    setFilter(text)
  }

  const removeAllTodosHandler = () => {
    dispatch(removeDoneTodos())
    toast.success("all done todos has been removed.")
  }

  return (
    <div className="transition-all px-2 sm:px-6 bg-gray-200 border border-gray-700 flex items-center justify-center min-h-[36px]">
      <div className="flex items-center justify-between  w-full sm:max-w-lg  lg:max-w-4xl text-xs text-gray-500 [&_.active]:font-bold [&_.active]:text-gray-700">
        <p>
          <span className="font-bold text-gray-700">
            {activeTodosNumber}&nbsp;
          </span>
          item left
        </p>
        <div>
          <button
            onClick={() => changeFilterHandler("all")}
            className={`mr-2 duration-100 ${
              filter === "all" ? "active" : "inactive"
            }`}
          >
            All
          </button>
          <button
            onClick={() => changeFilterHandler("active")}
            className={`duration-100 ${
              filter === "active" ? "active" : "inactive"
            }`}
          >
            Active
          </button>
        </div>
        <button
          className="border border-gray-400 rounded px-1"
          onClick={removeAllTodosHandler}
        >
          Clear completed
        </button>
      </div>
    </div>
  )
}

export default TodoFooter
