import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'gd-app',
  webDir: 'dist/gd-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
