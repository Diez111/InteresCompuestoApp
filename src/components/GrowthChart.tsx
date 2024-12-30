import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  year: number;
  balance: number;
  invested: number;
}

interface GrowthChartProps {
  data: ChartData[];
}

export function GrowthChart({ data }: GrowthChartProps) {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 sm:p-6">
      <h2 className="text-xl font-bold mb-4 text-yellow-400">Evolución del capital</h2>
      <div className="h-[300px] sm:h-[400px] -mx-4 sm:mx-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis 
              dataKey="year" 
              stroke="#9CA3AF"
              label={{ value: 'Años', position: 'insideBottom', offset: -5 }}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              stroke="#9CA3AF"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#000000', border: '1px solid #1f2937', borderRadius: '8px', fontSize: 12 }}
              formatter={(value: number) => ['$' + value.toLocaleString('es-ES', { minimumFractionDigits: 2 })]}
            />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            <Line 
              type="monotone" 
              dataKey="balance" 
              stroke="#FBBF24" 
              name="Saldo"
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="invested" 
              stroke="#34D399" 
              name="Invertido"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}