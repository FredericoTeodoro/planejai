// Responsabilidade: criar um divisor reutilizável para separar blocos visuais sem
// depender de uma estrutura específica de markup. Ele serve tanto para separar itens
// em um cabeçalho quanto para criar a linha vertical dentro de um input com prefixo/sufixo.
// O componente centraliza a lógica do tipo de orientação e o espaçamento para manter o
// visual consistente em diferentes contextos.
interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  spacing?: number;
  className?: string;
}

export function Divider({
  orientation = 'horizontal',
  spacing = 16,
  className,
}: DividerProps) {
  const style =
    orientation === 'horizontal'
      ? { marginTop: spacing, marginBottom: spacing }
      : { marginLeft: spacing, marginRight: spacing };

  const classNamesByOrientation = {
    horizontal: 'w-full h-px',
    vertical: 'self-stretch w-px',
  };

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      style={style}
      className={['bg-border', classNamesByOrientation[orientation], className]
        .filter(Boolean)
        .join(' ')}
    />
  );
}
