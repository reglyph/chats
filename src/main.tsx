import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Playground from './playground/playground.tsx';
import './normalize.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Playground />
  </StrictMode>,
);
