import '@/styles/global.css';

import { AuthProvider } from '@/contexts/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  offlineAccess: true,
  iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
