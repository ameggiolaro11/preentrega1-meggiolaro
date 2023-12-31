import React from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ChakraProvider } from "@chakra-ui/react";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
   <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);


