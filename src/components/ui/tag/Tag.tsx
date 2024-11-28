import { Tag as AntdTag } from 'antd';
import { FC } from 'react';
import { Props } from './Tag.types';

export const Tag: FC<Props> = ({ children, ...tagProps }) => {
  return <AntdTag  {...tagProps}>{children}</AntdTag>;
};

export default Tag;
