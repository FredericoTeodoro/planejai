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
