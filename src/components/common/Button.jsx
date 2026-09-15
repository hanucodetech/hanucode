import Link from 'next/link';
import AnimatedArrow from './AnimatedArrow';

const variants = {
  primary: 'bg-navy-900 text-white hover:bg-navy-800 shadow-sm',
  secondary: 'bg-white text-navy-900 border border-border-light hover:bg-surface hover:border-slate-300',
  gradient: 'bg-brand-gradient text-white hover:opacity-90 shadow-md',
  outline: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
  ghost: 'text-navy-900 hover:bg-surface-alt',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  showArrow = false,
  type = 'button',
  onClick,
  disabled = false,
  ariaLabel,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
        {showArrow && <AnimatedArrow />}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
      {showArrow && <AnimatedArrow />}
    </button>
  );
}
