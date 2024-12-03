import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import clsx from 'clsx';
import { FC } from 'react';


interface ButtonProps extends AntdButtonProps {}

export const Button: FC<ButtonProps> = ({ children, ...restProps }) => {
  return <AntdButton className={clsx("sui-shadow-2xl")} {...restProps}>{children}</AntdButton>;
};

export default Button;
