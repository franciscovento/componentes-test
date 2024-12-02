import { Divider as AntdDivider } from 'antd';
import { FC } from 'react';
import { DividerProps } from 'antd';

 
interface Props extends DividerProps {}

export const Divider: FC<Props> = ({ children, ...dividerProps }) => {
  return <AntdDivider {...dividerProps}>{children}</AntdDivider>;
};

export default Divider;
