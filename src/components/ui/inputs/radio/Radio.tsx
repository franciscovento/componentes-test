import { Radio as AntdRadio, RadioProps } from 'antd';
import { FC } from 'react';

interface Props extends RadioProps {}

export const Radio: FC<Props> = ({ children, ...radioProps }) => {
  return <AntdRadio {...radioProps}>{children}</AntdRadio>;
};

export default Radio;
