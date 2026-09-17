import React from 'react';
import { createRoot } from 'react-dom/client';
import { Presentation } from './Presentation';
import './styles.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><Presentation /></React.StrictMode>);
