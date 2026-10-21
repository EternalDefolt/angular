import { createContext, useContext } from 'react'
import useLocalStorage from './useLocalStorage'

const TasksContext = createContext(null)

const demo = () => [
  { id: crypto.randomUUID(), title: 'Изучить React Router', description: 'Пройти Routes, Outlet, NavLink', done: false, createdAt: new Date().toISOString() },
  { id: crypto.randomUUID(), title: 'Сделать приложение задач', description: '', done: false, createdAt: new Date().toISOString() },
  { id: crypto.randomUUID(), title: 'Установить Vite', description: 'npm create vite', done: true, createdAt: new Date().toISOString() },
]

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks-app:v1', demo)

  const addTask = (title, description) =>
    setTasks((prev) => [
      { id: crypto.randomUUID(), title, description, done: false, createdAt: new Date().toISOString() },
      ...prev,
    ])

  const toggleTask = (id) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

  const removeTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id))

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => useContext(TasksContext)
