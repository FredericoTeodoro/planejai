// Responsabilidade: renderizar uma única pergunta do formulário e capturar a resposta do
// usuário. Esse componente é a representação visual de uma etapa e também encapsula a
// validação básica obrigatória do preenchimento antes de disparar o callback do pai.
// Ele recebe o contexto da etapa a partir de `simulationFormSteps` e mantém uma entrada local
// em estado para controlar o valor digitado antes de confirmar a resposta.
import { ArrowLeft, ArrowRight, type LucideIcon } from 'lucide-react';
import { type SyntheticEvent, useState } from 'react';

import { Button } from '@/components/shared/Button';
import { Input, type InputProps } from '@/components/shared/Input.tsx';
import { formatCurrencyInput } from '@/utils/currency';

export interface FormStepProps {
  id: string;
  icon: LucideIcon;
  title: string;
  question: string;
  inputProps: InputProps;
  submitButtonProps?: {
    label: string;
    emojiIcon?: string;
  };
}

interface ActionsButtonsProps {
  onBack: () => void;
  onNext: (value: string) => void;
  hideBackButton?: boolean;
}

export function FormStep({
  icon: Icon,
  title,
  question,
  inputProps,
  submitButtonProps,
  onBack,
  onNext,
  hideBackButton,
}: FormStepProps & ActionsButtonsProps) {
  // `inputValue` mantém temporariamente, no estado local deste componente, o valor digitado.
  // Enquanto o usuário preenche o campo, esse valor é atualizado pelo `onChange`.
  // Ao enviar o formulário, `handleSubmit` passa a resposta para `onNext`, callback fornecido
  // pelo componente pai. É o `SimulationForm` que incorpora o valor ao objeto `formData`,
  // utilizado para reunir as respostas da simulação.
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    // A validação atual apenas impede o envio quando `inputValue` está vazio.
    // Ela não verifica se o conteúdo digitado é semanticamente válido para o campo,
    // nem cobre todas as regras possíveis de negócio e de cada etapa do formulário.
    if (!inputValue) {
      return;
    }

    onNext(inputValue);
  };

  return (
    <div className="rounded-2xl bg-card p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="mb-4 flex h-15 w-15 items-center justify-center rounded-xl bg-primary">
        <Icon size={32} className="text-primary-foreground" />
      </div>
      <h2 className="mb-1 text-xs font-semibold tracking-widest text-primary uppercase">
        {title}
      </h2>
      <h3 className="mb-6 text-xl leading-snug font-semibold text-foreground sm:text-2xl">
        {question}
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          {...inputProps}
          value={inputValue}
          onChange={(e) =>
            setInputValue(
              inputProps.prefix === 'R$'
                ? formatCurrencyInput(e.target.value)
                : e.target.value,
            )
          }
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          {!hideBackButton && (
            <Button
              type="button"
              onClick={onBack}
              variant="ghost"
              className="order-2 flex-1 justify-center rounded-xl py-3 sm:order-1"
            >
              <ArrowLeft size={16} />
              Voltar
            </Button>
          )}

          <Button
            type="submit"
            variant="primary"
            disabled={!inputValue}
            className="order-1 flex-1 sm:order-2"
          >
            {submitButtonProps?.label ?? 'Próximo'}
            {submitButtonProps?.emojiIcon ?? <ArrowRight size={16} />}
          </Button>
        </div>
      </form>
    </div>
  );
}
