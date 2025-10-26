import React from 'react';

type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  variant?: 'solid' | 'dotted';
  centered?: boolean;
  blurBackground?: boolean;
  className?: string;
};

const LoadingSpinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'text-pink-500',
  variant = 'solid',
  centered = false,
  blurBackground = false,
  className = '',
}) => {
  const sizeClasses: Record<string, string> = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-4',
    lg: 'h-12 w-12 border-[6px]',
  };

  const variantClasses =
    variant === 'dotted'
      ? 'border-dotted border-current border-t-transparent'
      : 'border-solid border-current border-t-transparent';

  const spinner = (
    <div
      className={`${sizeClasses[size]} ${variantClasses} ${color} rounded-full animate-spin ${className}`}
      role="status"
    />
  );

  if (centered) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition ${
          blurBackground ? 'bg-white/30 backdrop-blur-sm' : 'bg-white/70'
        }`}
      >
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
