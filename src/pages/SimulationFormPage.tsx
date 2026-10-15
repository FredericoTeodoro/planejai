// Responsabilidade: página principal da simulação financeira.
// Ela organiza o bloco visual inicial do fluxo, montando a seção de apresentação e
// o formulário de coleta de dados. A separação em uma página é útil porque esta tela é
// uma unidade de navegação: ela define a estrutura da rota `/` e concentra a composição
// dos elementos que aparecem juntos na experiência inicial.
import { SimulationHero } from '@/components/features/Simulation/SimulationHero';

import { SimulationForm } from '../components/features/Simulation/SimulationForm';

export function SimulationFormPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-10 sm:py-14">
      <SimulationHero />
      <SimulationForm />
    </main>
  );
}
