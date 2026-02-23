import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sidebar-container">
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>

            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/camera" onClick={() => setIsOpen(false)}>Камера</Link></li>
                    <li><Link to="/geoposition" onClick={() => setIsOpen(false)}>Геопозиция</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;