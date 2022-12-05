import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "src/redux/appSlices/todoSlice"
import { toast } from "react-toastify"

const AddTodo = () => {
  const dispatch = useDispatch()

  const [todoValue, setTodoValue] = useState("")
  const [error, setError] = useState(false)

  const addTodoHandler = () => {
    if (todoValue.trim() === "") {
      setError(true)
    } else {
      dispatch(addTodo({ id: Date.now(), title: todoValue, status: "active" }))
      setTodoValue("")
      toast.success("todo added successfully.")
    }
  }

  useEffect(() => {
    if (todoValue.trim().length > 0) setError(false)
  }, [todoValue])

  const changeTodoValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.target.value)
  }

  return (
    <div className="bg-olive-main w-full px-2 sm:px-6 py-10 flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl md:text-4xl text-white my-5 md:my-10">
        To Do List
      </h1>
      <div className="flex flex-nowrap w-full sm:max-w-lg  lg:max-w-4xl justify-center items-center ">
        <input
          className={`w-full outline-none p-2 duration-1000 ${
            error ? "border border-red-500 placeholder:text-red-500" : ""
          }`}
          placeholder="Title..."
          value={todoValue}
          onChange={changeTodoValueHandler}
        />
        <button
          className="bg-zinc-300 p-2 sm:px-10 text-gray-600"
          onClick={addTodoHandler}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default AddTodo
