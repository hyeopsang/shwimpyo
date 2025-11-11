import {cn} from '@/utils/style';
import type {InputHTMLAttributes} from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: 'fit' | 'md' | 'full';
  radius?: 'none' | 'md' | 'full';
};

export default function Input({
  className,
  inputSize = 'md',
  radius = 'md',
  type = 'text',
  ...props
}: InputProps) {
  const sizeClasses = {
    fit: 'w-fit px-3 py-2 text-sm',
    md: 'w-fit px-5 py-3 text-sm',
    full: 'w-full px-5 py-3 text-sm',
  }[inputSize];

  const radiusClasses = {
    none: 'rounded-none',
    md: 'rounded-md',
    full: 'rounded-full',
  }[radius];

  const inputClasses = cn(
    'outline outline-1 outline-slate-300 focus:outline-slate-900',
    'dark:outline-slate-300/25 dark:focus:outline-slate-300',
    'transition-all duration-200',
    sizeClasses,
    radiusClasses,
    className
  );

  return <input type={type} {...props} className={inputClasses} />;
}
