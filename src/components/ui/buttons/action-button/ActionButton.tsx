import clsx from 'clsx';
import { FC } from 'react';

export interface ActionButtonProps extends React.ComponentPropsWithRef<'button'> {}
export const ActionButton: FC<ActionButtonProps> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={clsx([
        'group sui-border sui-bg-app-primary-25 sui-border-app-border-primary sui-duration-300 sui-px-4 sui-py-5 sui-rounded-xl sui-w-[290px] sui-max-w-full hover:sui-border-app-neutrals-300',
        className,
      ])}
      {...buttonProps}
    >
      <div className="sui-flex sui-items-center sui-gap-3 sui-font-medium">
        <span className="sui-duration-300 sui-inline-block sui-text-app-primary-950 sui-rounded-full sui-p-[10px] sui-bg-app-primary-200 sui-w-11 sui-h-11 group-hover:sui-bg-app-primary-600 group-hover:sui-text-app-white">
          +
        </span>
        <span className="sui-flex-1 sui-text-left">{children}</span>
      </div>
    </button>
  );
};

export default ActionButton;
