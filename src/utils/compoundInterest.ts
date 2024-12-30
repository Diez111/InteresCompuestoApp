// Utility functions for compound interest calculations
export function calculateTotalAmount(
  principal: number,
  rate: number,
  compoundingsPerYear: number,
  years: number,
  monthlyDeposit: number = 0
): number {
  const r = rate / 100; // Convert percentage to decimal
  let amount = principal * Math.pow(1 + r / compoundingsPerYear, compoundingsPerYear * years);
  
  // Add monthly deposits with compound interest
  if (monthlyDeposit > 0) {
    const monthlyRate = r / 12;
    const months = years * 12;
    const futureValueOfSeries = monthlyDeposit * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    amount += futureValueOfSeries;
  }
  
  return Number(amount.toFixed(2));
}

export function calculateEffectiveAnnualRate(
  rate: number,
  compoundingsPerYear: number
): number {
  const r = rate / 100;
  const effectiveRate = (Math.pow(1 + r / compoundingsPerYear, compoundingsPerYear) - 1) * 100;
  return Number(effectiveRate.toFixed(2));
}

export function calculateTotalInterest(
  finalAmount: number,
  principal: number,
  totalDeposits: number
): number {
  return Number((finalAmount - principal - totalDeposits).toFixed(2));
}