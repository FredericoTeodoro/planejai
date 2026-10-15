import PiggyBankImage from '@/assets/images/piggy-bank.png';

// Responsabilidade: introduzir a experiência de simulação e contextualizar o objetivo da tela.
// Esse componente não é parte da regra de negócio em si; ele serve para orientar o usuário,
// explicar o propósito do formulário e reforçar a identidade do Planej.ai antes do início da
// coleta de dados. Sua separação ajuda a manter a página principal mais legível.
export function SimulationHero() {
  return (
    <div className="mb-8 text-center">
      <div className="flex flex-col items-center sm:flex-row">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Vamos planejar seu futuro
        </h1>
        <img
          src={PiggyBankImage}
          alt=""
          aria-hidden="true"
          className="sm: ml-3 h-16 w-16 sm:-mt-2"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Responda algumas questões para ter insights financeiros personalizados.
      </p>
    </div>
  );
}
