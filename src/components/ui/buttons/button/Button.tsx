import { Button as AntdButton, ButtonProps } from 'antd';
import { FC } from 'react';

export const ButtonTypes = ['default', 'primary', 'dashed', 'link', 'text'];

interface Props extends ButtonProps {}

export const Button: FC<Props> = ({ children, ...restProps }) => {
  return <AntdButton {...restProps}>{children}</AntdButton>;
};

export default Button;
