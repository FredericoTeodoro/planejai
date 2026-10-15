// Responsabilidade: centralizar a definição dos passos e dos dados do formulário.
// Este arquivo atua como fonte de verdade para a sequência de perguntas da simulação:
// cada etapa carrega texto, ícone, atributos do input e regras de UX do fluxo. Ele também
// define o tipo do payload que será mantido em estado e salvo localmente.
// O motivo de separar esses dados do componente visual é permitir que a lógica da simulação
// seja lida em um único lugar, reduzindo duplicação e mantendo coerência entre o formulário,
// o estado e a persistência.
import {
  CalendarClock,
  CreditCard,
  Goal,
  Landmark,
  PiggyBank,
  Wallet,
} from 'lucide-react';

import type { FormStepProps } from '../components/features/Simulation/FormStep';

export const simulationFormSteps = [
  {
    id: 'income',
    icon: PiggyBank,
    title: 'Renda mensal bruta',
    question:
      'Quanto é depositado na sua conta todo mês (somando todas as fontes)?',
    inputProps: {
      placeholder: 'ex: 5.000,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'expenses',
    icon: CreditCard,
    title: 'Custos fixos de vida',
    question:
      'Quanto você gasta mensalmente com custos fixos (aluguel, contas, etc)?',
    inputProps: {
      placeholder: 'ex: 2.000,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'debts',
    icon: Landmark,
    title: 'Dívidas / parcelas',
    question:
      'Você tem algum valor comprometido com parcelas ou empréstimos mensalmente?',
    inputProps: {
      placeholder: 'ex: 500,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'goalName',
    icon: Goal,
    title: 'Nome da meta',
    question: 'Qual o objetivo que você deseja alcançar?',
    inputProps: {
      placeholder: 'ex: Viagem para o Japão',
      maxLength: 50,
    },
  },
  {
    id: 'goalAmount',
    icon: Wallet,
    title: 'Custo da meta',
    question: 'Quanto custa realizar esse sonho?',
    inputProps: {
      placeholder: 'ex: 15.000,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'goalDeadline',
    icon: CalendarClock,
    title: 'Prazo desejado',
    question: 'Em quantos meses você planeja atingir esse objetivo?',
    inputProps: {
      type: 'number',
      placeholder: 'ex: 12',
      suffix: 'meses',
      min: 1,
      max: 120,
    },
    submitButtonProps: {
      label: 'Gerar simulação',
      emojiIcon: '✨',
    },
  },
] satisfies FormStepProps[];

// A estrutura final do payload segue a chave de cada etapa do formulário. Isso permite
// acessar o estado em um objeto por id e usar propriedades computadas como
// `formData[currentStep.id]` sem duplicar nomes manuais para cada etapa.
export type SimulationFormData = Record<
  (typeof simulationFormSteps)[number]['id'],
  string
>;
