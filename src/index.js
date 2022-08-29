import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import "@fontsource/noto-sans-kr";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);