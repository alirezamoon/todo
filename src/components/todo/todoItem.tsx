import { useDispatch } from "react-redux"
import { changeStatus, removeTodo } from "src/redux/appSlices/todoSlice"
import { toast } from "react-toastify"
import { ChangeEvent } from "react"

const TodoItem = ({ id, title, status }: TodoType) => {
  const dispatch = useDispatch()

  const removeTodoHandler = () => {
    dispatch(removeTodo(id))
    toast.success("todo removed successfully.")
  }

  const todoStatusChendedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const status = event.target.checked ? "done" : "active"
    status === "done" && toast.success("todo has been done..")
    dispatch(changeStatus({ id, status }))
  }

  return (
    <div
      className={`flex items-center justify-center h-full min-h-[48px] border-b border-zinc-300 px-6 md:px-10 ${
        status === "active" ? "bg-gray-100" : "bg-gray-300"
      }`}
    >
      <div className="w-full sm:max-w-lg  lg:max-w-4xl flex items-center justify-between ">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={status === "active" ? false : true}
            onChange={todoStatusChendedHandler}
          />
          <p
            className={`ml-2 overflow-x-hidden text-ellipsis max-w-md lg:max-w-3xl ${
              status === "active" ? "" : "line-through"
            }`}
          >
            {title}
          </p>
        </div>
        <button onClick={removeTodoHandler}>
          <img src="/assets/icons/remove.svg" />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
