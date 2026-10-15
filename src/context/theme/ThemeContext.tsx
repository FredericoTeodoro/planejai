// Responsabilidade: declarar o contrato do contexto de tema.
// A aplicação possui um estado global de tema que precisa estar acessível a qualquer
// componente que queira alternar entre layout claro e escuro. O contexto define apenas
// a forma do valor compartilhado: o tema atual e a função que o altera.
// Esse tipo de isolamento separa o provedor e o consumidor do mecanismo específico de
// implementação, mantendo a API simples e previsível para o restante do app.
import { createContext } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);
