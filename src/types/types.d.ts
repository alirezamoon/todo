declare global {
  type TodoListType = { id: number; title: string }[]
  type TodoType = { id: number; title: string }
}
export default global
