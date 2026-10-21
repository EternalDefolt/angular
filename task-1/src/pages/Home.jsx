import { useNavigate } from 'react-router-dom'
import { useTasks } from '../TasksContext'

export default function Home() {
  const { tasks } = useTasks()
  const navigate = useNavigate()
  const done = tasks.filter((t) => t.done).length

  return (
    <div>
      <h1>Привет! Это «Мои задачи»</h1>
      <p>Всего задач: {tasks.length}</p>
      <p>Выполнено: {done}</p>
      <p>Активно: {tasks.length - done}</p>
      <button onClick={() => navigate('/tasks')}>Перейти к задачам</button>
    </div>
  )
}
