import { useState, useEffect } from 'react';
import { 
  calculateTotalAmount, 
  calculateEffectiveAnnualRate,
  calculateTotalInterest 
} from '../utils/compoundInterest';

interface ChartData {
  year: number;
  balance: number;
  invested: number;
}

interface CompoundInterestResult {
  chartData: ChartData[];
  finalBalance: number;
  totalInvested: number;
  totalInterest: number;
  effectiveRate: number;
}

export function useCompoundInterest(
  initialAmount: number,
  interestRate: number,
  years: number,
  monthlyDeposit: number,
  compoundingsPerYear: number = 12 // Monthly compounding by default
): CompoundInterestResult {
  const [result, setResult] = useState<CompoundInterestResult>({
    chartData: [],
    finalBalance: 0,
    totalInvested: 0,
    totalInterest: 0,
    effectiveRate: 0
  });

  useEffect(() => {
    const chartData: ChartData[] = [];
    const yearlyDeposits = monthlyDeposit * 12;

    // Calculate data points for each year
    for (let year = 0; year <= years; year++) {
      const balance = calculateTotalAmount(
        initialAmount,
        interestRate,
        compoundingsPerYear,
        year,
        monthlyDeposit
      );
      
      const invested = initialAmount + (yearlyDeposits * year);
      
      chartData.push({
        year,
        balance: Number(balance.toFixed(2)),
        invested: Number(invested.toFixed(2))
      });
    }

    const finalBalance = chartData[chartData.length - 1]?.balance || 0;
    const totalInvested = chartData[chartData.length - 1]?.invested || 0;
    const totalInterest = calculateTotalInterest(finalBalance, initialAmount, totalInvested - initialAmount);
    const effectiveRate = calculateEffectiveAnnualRate(interestRate, compoundingsPerYear);

    setResult({
      chartData,
      finalBalance,
      totalInvested,
      totalInterest,
      effectiveRate
    });
  }, [initialAmount, interestRate, years, monthlyDeposit, compoundingsPerYear]);

  return result;
}