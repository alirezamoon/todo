const TodoItem = ({ id, title }: TodoType) => {
  return (
    <div className="flex items-center justify-center bg-zinc-100 h-full min-h-[48px] border-b border-zinc-300 px-6 md:px-10">
      <div className="w-full sm:max-w-lg  lg:max-w-4xl flex items-center justify-between ">
        <div className="flex items-center">
          <input type="checkbox" />
          <p className="ml-2 overflow-x-hidden text-ellipsis max-w-md  lg:max-w-3xl">
            {title}
          </p>
        </div>
        <img src="/assets/icons/remove.svg" />
      </div>
    </div>
  )
}

export default TodoItem
