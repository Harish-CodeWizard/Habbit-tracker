import React from 'react';
import { cn } from '../../utils/helpers';

const Button = ({
  children,
  className,
  variant = 'primary',
  loading = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400',
        variant === 'primary' && 'bg-violet-600 text-white shadow-md hover:bg-violet-700',
        variant === 'secondary' && 'bg-fuchsia-100 text-violet-700 hover:bg-fuchsia-200',
        variant === 'outline' && 'border border-violet-400 text-violet-700 bg-white hover:bg-violet-50',
        variant === 'ghost' && 'bg-transparent text-violet-700 hover:bg-violet-50',
        loading && 'opacity-60 pointer-events-none',
        className
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <span className="loader mr-2"></span> : null}
      {children}
    </button>
  );
};

export default Button;

