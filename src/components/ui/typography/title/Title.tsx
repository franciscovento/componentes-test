import clsx from 'clsx';
import { FC } from 'react';

type TitleVariants = 'xl' | 'lg' | 'md' | 'sm';
type TitleTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface Props {
  as?: TitleTypes;
  children: React.ReactNode;
  variant?: TitleVariants;
  className?: string;
  weight?: '600' | '700';
}

export const Title: FC<Props> = ({
  as = 'h3',
  className,
  children,
  variant = 'lg',
  weight = '700',
}) => {
  const Tag = as;

  return (
    <Tag
      className={clsx(
        className,
        {
          'sui-text-4xl': variant === 'xl',
          'sui-text-3xl': variant === 'lg',
          'sui-text-[26px] leading-8': variant === 'md',
          'sui-text-2xl': variant === 'sm',
        },
        {
          'sui-font-semibold': weight === '600',
          'sui-font-bold': weight === '700',
        }
      )}
    >
      {children}
    </Tag>
  );
};

export default Title;
