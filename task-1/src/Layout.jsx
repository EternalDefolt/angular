import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header className="header">
        <nav>
          <NavLink to="/" end>Главная</NavLink>
          <NavLink to="/tasks">Задачи</NavLink>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  )
}
