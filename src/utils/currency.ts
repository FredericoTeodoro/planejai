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
