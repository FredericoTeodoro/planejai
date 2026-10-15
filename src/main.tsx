// Responsabilidade: criar a raiz do React DOM e montar a aplicação no elemento #root.
// Este arquivo é o ponto de entrada do navegador. Ele importa o CSS global, o componente
// principal da aplicação e o renderiza dentro do StrictMode para detectar potenciais
// problemas de renderização durante o desenvolvimento.
// Como ele fica fora da lógica de negócio, a aplicação pode ser rodada em diferentes
// ambientes sem depender diretamente da implementação dos componentes internos.
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
