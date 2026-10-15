// Responsabilidade: centralizar a lógica do tema global da aplicação.
// O provider decide qual tema será usado na inicialização, persiste a escolha no navegador,
// e disponibiliza essa informação para todos os componentes filhos via Context API.
// Ele é separado porque o tema afeta a aparência de vários elementos que não têm uma
// relação direta entre si; por isso, a fonte de verdade deve ficar em um único lugar.
import { type PropsWithChildren, useEffect, useState } from 'react';

import { type Theme, ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }: PropsWithChildren) {
  // O estado inicial usa uma função lazy para ler o tema salvo no navegador antes do
  // primeiro render. Se não existir valor, a aplicação considera a preferência do sistema.
  const [theme, setTheme] = useState<Theme>(() => {
    const localStorageTheme = localStorage.getItem('theme') as Theme | null;

    if (localStorageTheme) {
      return localStorageTheme;
    }

    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    return systemPrefersDark ? 'dark' : 'light';
  });

  // O efeito sincroniza duas coisas sempre que o tema muda: o atributo `data-theme` do
  // documento e o valor persistido em localStorage. Dessa forma, a UI e a preferência do
  // navegador ficam alinhadas sem depender de manipulações diretas em componentes filhos.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
