import { useState } from 'react';
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
                    <li><a href="#camera">Камера</a></li>
                    <li><a href="#geoposition">Геопозиция</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;