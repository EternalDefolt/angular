import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import TaskDetails from './pages/TaskDetails'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
