// Responsabilidade: oferecer um campo de entrada visualmente padronizado para o app.
// Esse componente abstrai a apresentação do input, incluindo prefixo, sufixo e o estilo
// do container. Ele reutiliza a lógica nativa do HTML input e recebe todas as suas props
// por espalhamento (`...rest`), então os campos do formulário podem ficar consistentes sem
// repetir classes, sombras ou alinhamento em cada vez que um input é criado.
import type { InputHTMLAttributes } from 'react';

import { Divider } from './Divider';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  suffix?: string;
}

export function Input({ prefix, suffix, ...rest }: InputProps) {
  return (
    <div className="flex items-center rounded-2xl bg-input p-4 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">
      {prefix && (
        <>
          <span className="text-sm font-medium text-muted-foreground">
            {prefix}
          </span>
          <Divider orientation="vertical" />
        </>
      )}
      <input
        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        autoFocus
        {...rest}
      />
      {suffix && (
        <>
          <Divider orientation="vertical" />
          <span className="ml-3 text-sm font-medium text-muted-foreground">
            {suffix}
          </span>
        </>
      )}
    </div>
  );
}
