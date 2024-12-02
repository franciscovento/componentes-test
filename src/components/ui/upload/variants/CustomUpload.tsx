import { Upload } from 'antd';
import { FC } from 'react';
import { Props } from '../Upload.types';

const CustomUpload: FC<Props> = ({ children, ...uploadProps }) => {
  return <Upload {...uploadProps}>{children}</Upload>;
};

export default CustomUpload;
