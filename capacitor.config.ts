import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cameraandgeopositiontest.app',
  appName: 'camera-and-geoposition-react-app',
  webDir: 'dist',
  server: {
    url: 'http://10.0.2.2:3000', // 10.0.2.2 — это IP вашего компьютера для эмулятора Android
    cleartext: true
  }
};

export default config;
