// Responsabilidade: encapsular a persistência do formulário no LocalStorage.
// A aplicação salva cada simulação finalizada em um histórico local, permitindo que os
// dados permaneçam no navegador mesmo após recarregar a página. Em vez de espalhar
// `localStorage` diretamente nos componentes, esse hook centraliza a leitura e gravação
// e deixa a lógica de persistência reutilizável por qualquer parte do fluxo de simulação.
import { type SimulationFormData } from '@/data/simulation';

const LOCAL_STORAGE_KEY = 'simulation-data';

export const useSimulationStorage = () => {
  const saveFormData = (formData: SimulationFormData) => {
    // O hook lê o histórico anterior da chave 'simulation-data'. Quando ela já existe,
    // os dados são convertidos de JSON para um array em memória para preservar registros
    // anteriores e acrescentar o novo formulário da simulação.
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const savedData = storage
      ? (JSON.parse(storage) as SimulationFormData[])
      : [];

    // A estrutura salva é um array de objetos, onde cada item representa uma simulação
    // concluída. Isso permite que diferentes execuções do formulário sejam acumuladas.
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...savedData, formData]),
    );
  };

  return { saveFormData };
};
