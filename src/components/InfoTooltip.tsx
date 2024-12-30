import React from 'react';
import { Info } from 'lucide-react';

interface InfoTooltipProps {
  text: string;
}

export function InfoTooltip({ text }: InfoTooltipProps) {
  return (
    <div className="group relative">
      <Info className="w-5 h-5 text-gray-400 cursor-help" />
      <div className="absolute bottom-full mb-2 hidden group-hover:block w-48 bg-gray-700 text-sm p-2 rounded-lg shadow-lg">
        {text}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-700 rotate-45" />
      </div>
    </div>
  );
}