import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import reactLogo from './assets/react.svg';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p>Check spell checker</p>
    <img src={reactLogo} className="logo react" alt="React logo" />
  </StrictMode>
);
