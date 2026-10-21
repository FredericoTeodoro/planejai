// Responsabilidade: normalizar valores monetários para a entrada do formulário.
// O campo de valor precisa aceitar texto formatado em moeda brasileira, mas o estado do
// formulário trabalha com strings. A função recebe o valor bruto do input, remove
// caracteres não numéricos, divide o resultado por 100 e formata o número para exibição.
// Por exemplo, a sequência de dígitos "150000" é convertida para "1.500,00".
// O uso do `Intl.NumberFormat` está focado na apresentação do valor em tela, não em
// cálculos financeiros: a função transforma a entrada em uma representação legível
// para o usuário, mantendo o comportamento consistente com o restante do formulário.
export function formatCurrencyInput(value: string | number): string {
  const sanitizedValue = String(value ?? '').replace(/\D/g, '');

  if (!sanitizedValue) {
    return '';
  }

  const numericValue = Number(sanitizedValue) / 100;

  if (Number.isNaN(numericValue)) return '';

  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericValue);
}

export function parseCurrency(value: string): number {
  return (
    parseFloat(
      value.replace(/\./g, '').replace(',', '.').replace('R$', ''),
    ) || 0
  )
}