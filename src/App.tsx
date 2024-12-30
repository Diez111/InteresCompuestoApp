import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { InputField } from './components/InputField';
import { ResultsCard } from './components/ResultsCard';
import { GrowthChart } from './components/GrowthChart';
import { useCompoundInterest } from './hooks/useCompoundInterest';

function App() {
  const [initialAmount, setInitialAmount] = useState<number>(300);
  const [interestRate, setInterestRate] = useState<number>(16);
  const [years, setYears] = useState<number>(5);
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(300);

  const {
    chartData,
    finalBalance,
    totalInvested,
    totalInterest,
    effectiveRate
  } = useCompoundInterest(initialAmount, interestRate, years, monthlyDeposit);

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-yellow-500/10 rounded-xl">
            <Calculator className="w-8 h-8 text-yellow-400" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Calculadora de Interés Compuesto
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="space-y-6 bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
            <InputField
              label="Valor inicial"
              value={initialAmount}
              onChange={setInitialAmount}
              prefix="$"
              tooltip="Capital inicial a invertir"
              min={0}
            />
            <InputField
              label="Tasa de interés anual (%)"
              value={interestRate}
              onChange={setInterestRate}
              tooltip="Tasa de interés anual en porcentaje"
              min={0}
              max={100}
            />
            <InputField
              label="Años"
              value={years}
              onChange={setYears}
              tooltip="Período de inversión en años"
              min={1}
              max={50}
            />
            <InputField
              label="Depósito mensual"
              value={monthlyDeposit}
              onChange={setMonthlyDeposit}
              prefix="$"
              tooltip="Cantidad a depositar mensualmente"
              min={0}
            />
          </div>

          <ResultsCard
            finalBalance={finalBalance}
            totalInvested={totalInvested}
            totalInterest={totalInterest}
            effectiveRate={effectiveRate}
          />
        </div>

        <GrowthChart data={chartData} />

        <p className="text-gray-500 text-sm mt-6 text-center px-4">
          *Estas son simulaciones. No base sus decisiones financieras únicamente en esta calculadora.
        </p>
      </div>
    </div>
  );
}

export default App;