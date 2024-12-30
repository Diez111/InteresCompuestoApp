import React from 'react';
import { InfoTooltip } from './InfoTooltip';

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  tooltip?: string;
  min?: number;
  max?: number;
}

export function InputField({ 
  label, 
  value, 
  onChange, 
  prefix, 
  tooltip,
  min = 0,
  max
}: InputFieldProps) {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 mb-2">
        <label className="text-sm font-medium text-gray-300">{label}</label>
        {tooltip && <InfoTooltip text={tooltip} />}
      </div>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{prefix}</span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
          className={`w-full bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg 
            ${prefix ? 'pl-8 pr-4' : 'px-4'} py-3 
            focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500
            outline-none transition-all duration-200`}
        />
      </div>
    </div>
  );
}