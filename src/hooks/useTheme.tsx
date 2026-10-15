// Responsabilidade: expor o contexto de tema de maneira segura para os componentes.
// O objetivo é evitar que os componentes importem diretamente o contexto e precisem
// saber como ele foi criado. Esse wrapper valida que o hook está sendo usado dentro do
// ThemeProvider e lança erro cedo caso haja uso indevido.
import { useContext } from 'react';

import { ThemeContext } from '../context/theme/ThemeContext';

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }

  return context;
}
