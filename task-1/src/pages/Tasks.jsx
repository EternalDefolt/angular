import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useTasks } from '../TasksContext'

export default function Tasks() {
  const { tasks, addTask, toggleTask, removeTask } = useTasks()
  const [searchParams, setSearchParams] = useSearchParams()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const filter = searchParams.get('filter') || 'all'

  const visible = tasks.filter((t) =>
    filter === 'active' ? !t.done : filter === 'done' ? t.done : true
  )

  const setFilter = (value) => {
    if (value === 'all') setSearchParams({})
    else setSearchParams({ filter: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    addTask(trimmed, description.trim())
    setTitle('')
    setDescription('')
  }

  const onRemove = (task) => {
    if (confirm(`Удалить «${task.title}»?`)) removeTask(task.id)
  }

  return (
    <div>
      <h1>Задачи</h1>

      <form onSubmit={onSubmit} className="form">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название (обязательно)"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Описание"
        />
        <button type="submit">Добавить</button>
      </form>

      <div className="filters">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>Все</button>
        <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Активные</button>
        <button className={filter === 'done' ? 'active' : ''} onClick={() => setFilter('done')}>Выполненные</button>
      </div>

      {visible.length === 0 ? (
        <p>Пусто</p>
      ) : (
        <ul className="list">
          {visible.map((task) => (
            <li key={task.id}>
              <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
              <Link to={`/tasks/${task.id}`} className={task.done ? 'done' : ''}>
                {task.title}
              </Link>
              <button onClick={() => onRemove(task)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
