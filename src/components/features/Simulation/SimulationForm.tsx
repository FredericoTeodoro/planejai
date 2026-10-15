// Responsabilidade: coordenar o formulário multi-etapas da simulação financeira.
// Este componente controla a etapa atual, guarda as respostas cumulativas em estado,
// decide quando avançar ou voltar e persiste os dados ao finalizar. Ele atua como "pai" do
// fluxo da simulação: ele conhece a sequência de passos e delega a renderização e a coleta
// de cada pergunta para o componente `FormStep`.
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  type SimulationFormData,
  simulationFormSteps,
} from '@/data/simulation';
import { useSimulationStorage } from '@/hooks/useSimulationStorage';

import { FormProgress } from './FormProgress';
import { FormStep } from './FormStep';

export const SimulationForm = () => {
  const { saveFormData } = useSimulationStorage();
  const navigate = useNavigate();

  // `currentStepIndex` guarda a etapa em andamento. Como o formulário é sequencial,
  // esse estado controla qual pergunta aparece e também o progresso visual da barra.
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // `formData` acumula todas as respostas já informadas pelo usuário. O objeto cresce em
  // cada avanço, mantendo os valores por chave (`income`, `goalAmount`, etc.) de acordo com
  // o tipo definido em `SimulationFormData`.
  const [formData, setFormData] = useState<SimulationFormData>(
    {} as SimulationFormData,
  );

  const totalSteps = simulationFormSteps.length;
  const currentStep = simulationFormSteps[currentStepIndex];

  const handleNextStep = (value: string) => {
    // Cada resposta é incorporada ao estado do formulário no mesmo formato da etapa atual.
    // A sintaxe `[currentStep.id]` cria uma propriedade dinâmica em um objeto, por exemplo:
    // `{ income: '5000' }`, `goalAmount: '15000'`, etc.
    const updatedFormData = { ...formData, [currentStep.id]: value };
    setFormData(updatedFormData);

    // Quando a última etapa é concluída, o dado é salvo e a navegação leva para a rota de
    // resultado. O `void` antes do `navigate` evita um aviso de Promise no callback.
    if (currentStepIndex + 1 > totalSteps - 1) {
      saveFormData(updatedFormData);
      void navigate('/resultado');
      return;
    }

    setCurrentStepIndex((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    if (currentStepIndex === 0) {
      return;
    }

    setCurrentStepIndex((prev) => prev - 1);
  };

  return (
    <>
      <FormProgress
        currentStep={currentStepIndex + 1}
        totalSteps={totalSteps}
      />
      <FormStep
        key={currentStep.id}
        {...currentStep}
        onBack={handlePreviousStep}
        onNext={handleNextStep}
        hideBackButton={currentStepIndex === 0}
      />
    </>
  );
};
