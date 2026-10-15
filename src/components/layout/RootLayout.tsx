// Responsabilidade: layout base compartilhado por todas as rotas sob `RouterProvider`.
// Como todas as páginas do app ficam dentro de `children` da rota raiz, esse componente
// garante que elementos como o `Header` e a estrutura visual principal apareçam em todo o
// fluxo sem repetir código nas páginas. Isso reduz acoplamento entre páginas e mantém a
// navegação consistente.
import { Outlet } from 'react-router-dom';

import { Header } from '../shared/Header';

export function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
