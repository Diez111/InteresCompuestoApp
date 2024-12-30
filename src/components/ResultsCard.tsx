import React from 'react';

interface ResultsCardProps {
  finalBalance: number;
  totalInvested: number;
  totalInterest: number;
  effectiveRate: number;
}

export function ResultsCard({ finalBalance, totalInvested, totalInterest, effectiveRate }: ResultsCardProps) {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-bold mb-6 text-yellow-400">Resultados</h2>
      <div className="space-y-6">
        <div>
          <p className="text-gray-400 text-sm mb-1">Saldo final</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            ${finalBalance.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400 text-sm mb-1">Total invertido</p>
            <p className="text-xl font-semibold">
              ${totalInvested.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Intereses ganados</p>
            <p className="text-xl font-semibold text-green-400">
              ${totalInterest.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Tasa efectiva anual</p>
            <p className="text-xl font-semibold text-yellow-400">
              {effectiveRate.toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}