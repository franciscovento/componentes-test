import clsx from 'clsx';
import { FC } from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const BaseCard: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={clsx([
        'sui-border sui-border-app-border-primary sui-p-6 sui-rounded-[20px]',
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default BaseCard;
