// Responsabilidade: ponto de entrada da aplicação React. Este componente monta o
// provedor de tema e a árvore de rotas, garantindo que toda a interface tenha acesso
// ao contexto global do tema e à configuração de navegação da aplicação.
// O ThemeProvider disponibiliza o contexto de tema para os componentes descendentes,
// enquanto o RouterProvider conecta a aplicação à configuração de rotas do React Router.
// Essa separação mantém a lógica de apresentação e a lógica de navegação em camadas
// diferentes, sem que um bloco precise conhecer detalhes do outro.
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './context/theme/ThemeProvider';
import { router } from './router';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
