import './Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="home-page">
            <h1 className="page-title">Главная</h1>
            <div className="button-column">
                <button className="nav-button" onClick={() => navigate('/camera')}>Камера</button>
                <button className="nav-button" onClick={() => navigate('/geoposition')}>Геопозиция</button>
            </div>
        </div>
    )
}
