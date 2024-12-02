import clsx from 'clsx';
import { FC } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  weight?: '500' | '600' | '700';
  as?: 'p' | 'span' | 'div' | 'small';
}

export const Text: FC<Props> = ({
  as = 'p',
  children,
  variant = 'md',
  className,
  weight = '500',
}) => {
  const Tag = as;
  return (
    <Tag
      className={clsx(
        ['sui-text-app-modern-gray-700', className],
        {
          'sui-text-xl': variant === 'xl',
          'sui-text-lg': variant === 'lg',
          'sui-text-base': variant === 'md',
          'sui-text-sm': variant === 'sm',
          'sui-text-xs': variant === 'xs',
        },
        {
          'sui-font-medium': weight === '500',
          'sui-font-semibold': weight === '600',
          'sui-font-bold': weight === '700',
        }
      )}
    >
      {children}
    </Tag>
  );
};

export default Text;
