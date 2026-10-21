// Responsabilidade: definir a árvore de rotas do app com React Router.
// Cada rota indica qual componente deve renderizar para um caminho específico,
// e o layout raiz centraliza partes da interface que se repetem em todas as páginas,
// como o cabeçalho e a navegação global.
// Esse arquivo é separado para manter as decisões de navegação em um único ponto,
// permitindo que a aplicação cresça sem espalhar caminhos e elementos visuais pelo código.
import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from './components/layout/RootLayout';
import { SimulationFormPage } from './pages/SimulationFormPage';
import { SimulationResultsPage } from './pages/SimulationResultsPage';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <SimulationFormPage />,
      },
      {
        path: '/resultado/:id',
        element: <SimulationResultsPage />,
      },
      {
        path: '/historico',
        element: <h1>Histórico da Simulação</h1>,
      },
    ],
  },
]);
