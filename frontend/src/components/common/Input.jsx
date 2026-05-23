import React from 'react';
import { cn } from '../../utils/helpers';

const Input = ({ label, error, className, ...props }) => (
  <div className="w-full mb-4">
    {label && <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>}
    <input
      className={cn(
        'w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200',
        error && 'border-red-500',
        className
      )}
      {...props}
    />
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

export default Input;

