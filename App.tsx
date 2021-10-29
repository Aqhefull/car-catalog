import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/config/navigation';
import { ThemeProvider } from './src/context/providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Navigation/>
        <StatusBar/>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;