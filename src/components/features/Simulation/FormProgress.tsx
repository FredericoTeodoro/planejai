// Responsabilidade: indicar visualmente em que ponto do processo a simulação está.
// A barra de progresso recebe o número da etapa atual e o total de etapas e transforma
// isso em uma porcentagem que orienta o usuário sobre o restante do fluxo. Ela é um
// componente de apoio: não coleta dados, mas facilita a compreensão da sequência e o estado
// do formulário em tempo real.
interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function FormProgress({ currentStep, totalSteps }: FormProgressProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-4">
      <p className="mb-2 text-sm text-muted-foreground">
        Passo {currentStep} de {totalSteps}
      </p>
      <div className="h-1 w-full overflow-hidden rounded-full bg-border">
        <div
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-label={`Passo ${currentStep} de ${totalSteps}`}
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
