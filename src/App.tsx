import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar.tsx'
import Camera from './pages/Camera.tsx'
import Geoposition from './pages/Geoposition.tsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/camera" element={<Camera />} />
            <Route path="/geoposition" element={<Geoposition />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
