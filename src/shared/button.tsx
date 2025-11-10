import type {ComponentType, ButtonHTMLAttributes} from 'react';
import {cn} from '@/utils/style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'fit' | 'full';
  variant?: 'default' | 'outlined' | 'elevated';
  radius?: 'none' | 'md' | 'full';
};

export function Button({
  className,
  children,
  size = 'fit',
  variant = 'default',
  radius = 'md',
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const sizeClasses = {
    fit: 'w-fit px-3 py-2 text-sm',
    full: 'w-full py-2 text-sm',
  }[size];
  const radiusClasses = {
    none: 'rounded-none',
    md: 'rounded-md',
    full: 'rounded-full',
  }[radius];
  const variantClasses = {
    default:
      'bg-transparent text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200',
    outlined:
      'border border-slate-300 text-slate-900 dark:text-white hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:hover:border-slate-500 dark:hover:bg-slate-800 active:border-slate-500',
    elevated:
      'bg-white shadow-sm text-slate-900 dark:bg-slate-800 dark:text-white hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 active:shadow-inner',
  }[variant];
  const disabledClasses =
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none';

  const buttonClasses = cn(
    base,
    sizeClasses,
    radiusClasses,
    variantClasses,
    disabledClasses,
    className
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

Button.Icon = function ButtonIcon({
  icon: Icon,
  size = 18,
  className,
}: {
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number;
  className?: string;
}) {
  return (
    <span className={cn('flex items-center justify-center', className)}>
      <Icon width={size} height={size} aria-hidden="true" />
    </span>
  );
};
