// import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
// import clsx from 'clsx';
// import { FC } from 'react';


// interface ButtonProps extends AntdButtonProps {}

// export const Button: FC<ButtonProps> = ({ children, ...restProps }) => {
//   return <AntdButton className={clsx("sui-shadow-2xl")} {...restProps}>{children}</AntdButton>;
// };

// export default Button;

// Button.tsx
import  { forwardRef } from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import clsx from 'clsx';

interface ButtonProps extends AntdButtonProps {}

// Usa forwardRef para permitir el paso de refs
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...restProps }, ref) => {
  return (
    <AntdButton ref={ref} className={clsx("sui-shadow-2xl")} {...restProps}>
      {children}
    </AntdButton>
  );
});

// Exporta el botón
export default Button;