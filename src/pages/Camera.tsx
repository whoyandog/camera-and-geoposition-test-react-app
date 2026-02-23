import { useState } from 'react';
import { Camera as CapacitorCamera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';

import './Camera.css';
import '../styles/variables.css';
import '../styles/global.css';


function Camera() {
    const [photo, setPhoto] = useState<Photo | null>(null);

    const takePhoto = async () => {
        try {
            const permissions = await CapacitorCamera.checkPermissions();
            if (permissions.camera !== 'granted') {
                await CapacitorCamera.requestPermissions({ permissions: ['camera'] });
            }


            const image = await CapacitorCamera.getPhoto({
                resultType: CameraResultType.Uri,
                source: CameraSource.Camera,
                quality: 100
            });
            setPhoto(image);
        } catch (error) {
            console.error('Ошибка при съемке фото:', error);
        }
    };

    return (
        <div>
            <h1 className="page-title">Камера</h1>

            <div className='photo-container'>
                {photo && <img src={photo.webPath} alt="Captured" />}
            </div>
            <div className='button-column'>
                <button className='nav-button' onClick={takePhoto}>Сделать фото</button>
            </div>
        </div>
    )
}

export default Camera;