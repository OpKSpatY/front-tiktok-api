import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider defaultColorScheme="light">
      <ColorSchemeScript />
      <Router>
        <AppRoutes />
      </Router>
    </MantineProvider>
  );
}

export default App;
