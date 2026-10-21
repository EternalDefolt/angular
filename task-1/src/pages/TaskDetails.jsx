import { Link, useNavigate, useParams } from 'react-router-dom'
import { useTasks } from '../TasksContext'

export default function TaskDetails() {
  const { taskId } = useParams()
  const navigate = useNavigate()
  const { tasks, toggleTask, removeTask } = useTasks()
  const task = tasks.find((t) => t.id === taskId)

  if (!task) {
    return (
      <div>
        <p>Задача не найдена</p>
        <Link to="/tasks">К списку задач</Link>
      </div>
    )
  }

  const onRemove = () => {
    removeTask(task.id)
    navigate('/tasks')
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Назад</button>
      <h1>{task.title}</h1>
      <p>{task.description || 'Без описания'}</p>
      <p>Создана: {new Date(task.createdAt).toLocaleString('ru-RU')}</p>
      <p>Статус: {task.done ? 'Выполнена' : 'В работе'}</p>
      <button onClick={() => toggleTask(task.id)}>
        {task.done ? 'Вернуть в работу' : 'Отметить выполненной'}
      </button>
      <button onClick={onRemove}>Удалить</button>
    </div>
  )
}
