import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import ColorSchemeToggle from './components/ColorSchemeToggle';
function App() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = () => {
    setColorScheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <ColorSchemeScript />
      <Router>
        <ColorSchemeToggle onClick={toggleColorScheme} /> {/* Adicione o componente de alternância */}
        <AppRoutes />
      </Router>
    </MantineProvider>
  );
}

export default App;
