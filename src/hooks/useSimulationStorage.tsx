// Responsabilidade: encapsular a persistência do formulário no LocalStorage.
// A aplicação salva cada simulação finalizada em um histórico local, permitindo que os
// dados permaneçam no navegador mesmo após recarregar a página. Em vez de espalhar
// `localStorage` diretamente nos componentes, esse hook centraliza a leitura e gravação
// e deixa a lógica de persistência reutilizável por qualquer parte do fluxo de simulação.
import {
  type SimulationFormData,
  type SimulationRecord,
} from '@/data/simulation';

const LOCAL_STORAGE_KEY = 'simulation-data';

export const useSimulationStorage = () => {
  // `saveFormData` recebe o payload final do formulário, cria um registro com identificador
  // único e guarda esse conjunto em um array no `localStorage`. O retorno do `id` é usado
  // pela navegação para direcionar o usuário para a tela específica da simulação.
  const saveFormData = (formData: SimulationFormData) => {
    const id = crypto.randomUUID();
    const record: SimulationRecord = { ...formData, id };

    // O hook lê o histórico anterior da chave 'simulation-data'. Quando ela já existe,
    // os dados são convertidos de JSON para um array em memória para preservar registros
    // anteriores e acrescentar o novo formulário da simulação.
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const savedData = storage
      ? (JSON.parse(storage) as SimulationRecord[])
      : [];

    // A estrutura salva é um array de objetos, onde cada item representa uma simulação
    // concluída. Isso permite que diferentes execuções do formulário sejam acumuladas.
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...savedData, record]),
    );
    return id; // Retorna o ID gerado para o registro salvo, útil para redirecionamento ou referência futura.
  };

  // `getFormData` é o complemento do fluxo de persistência: a página de resultado recebe o
  // `id` da rota e busca no histórico o registro que corresponde a esse identificador.
  const getFormData = (id: string): SimulationRecord | null => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storage) {
      return null;
    }

    const savedData = JSON.parse(storage) as SimulationRecord[];
    return savedData.find((record) => record.id === id) || null;
  };

  return { saveFormData, getFormData };
};
