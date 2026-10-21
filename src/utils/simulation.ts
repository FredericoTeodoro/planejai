import type { SimulationFormData } from '../data/simulation';
import { parseCurrency } from './currency';

// Responsabilidade: calcular o saldo mensal estimado após despesas fixas e dívidas.
// A página de resultados passa os dados da simulação para esta função, que converte
// os valores monetários formatados em números e calcula renda - despesas - dívidas.
// O resultado estima quanto pode sobrar por mês para poupar. Ele não representa,
// necessariamente, o valor mensal necessário para atingir a meta no prazo desejado.
export function calcMonthlySavings(data: SimulationFormData) {
  return (
    parseCurrency(data.income) -
    parseCurrency(data.expenses) -
    parseCurrency(data.debts)
  );
}
