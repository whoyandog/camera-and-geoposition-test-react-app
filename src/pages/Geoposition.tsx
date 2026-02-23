import { useEffect, useState } from 'react';
import { Geolocation } from '@capacitor/geolocation';

import './Geoposition.css';
import '../styles/variables.css';
import '../styles/global.css';

function Geoposition() {
    const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
    const [watchId, setWatchId] = useState<string | null>(null);
    const currentPositionOptions = {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 0,
    };
    const watchPositionOptions = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
        minimumUpdateInterval: 500,
    };

    const ensureLocationPermission = async (): Promise<boolean> => {
        try {
            const perm = await Geolocation.requestPermissions();
            if ((perm as any).location && (perm as any).location === 'denied') return false;
            return true;
        } catch (e) {
            console.error('Ошибка при запросе разрешений на геопозицию:', e);
            return false;
        }
    }

    const getCurrentPosition = async () => {
        try {
            const ok = await ensureLocationPermission();
            if (!ok) return;
            const position = await Geolocation.getCurrentPosition(currentPositionOptions);
            setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
        } catch (error) {
            console.error('Ошибка при получении текущей геопозиции:', error);
        }
    }

    const startWatchingPosition = async () => {
        try {
            const ok = await ensureLocationPermission();
            if (!ok) return;
            const watchId = await Geolocation.watchPosition(watchPositionOptions, (position, err) => {
                if (err) {
                    console.error('Ошибка при отслеживании геопозиции:', err);
                    return;
                }
                if (position) setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
            });
            setWatchId(watchId);
        } catch (error) {
            console.error('Ошибка при отслеживании геопозиции:', error);
        }
    }

    const stopWatchingPosition = async () => {
        if (watchId !== null) {
            await Geolocation.clearWatch({ id: watchId });
            setWatchId(null);
        }
    }

    useEffect(() => {
        return () => {
            stopWatchingPosition();
        };
    }, []);

    return (
        <div>
            <h1 className="page-title">Геопозиция</h1>

            <div className='position-container'>
                {position && (
                    <div>
                        <p>Широта: {position.lat}</p>
                        <p>Долгота: {position.lng}</p>
                    </div>
                )}
            </div>

            <div className='button-column'>
                <button className='nav-button' onClick={getCurrentPosition}>Получить текущую геопозицию</button>
                <button className='nav-button' onClick={startWatchingPosition} disabled={watchId !== null}>Начать отслеживание</button>
                <button className='nav-button' onClick={stopWatchingPosition} disabled={watchId === null}>Остановить отслеживание</button>
            </div>
        </div>
    )
}

export default Geoposition;
