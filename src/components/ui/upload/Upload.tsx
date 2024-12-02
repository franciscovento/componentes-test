import { FC } from 'react';
import { Props } from './Upload.types';
import CustomUpload from './variants/CustomUpload';
import DraggerUpload from './variants/DraggerUpload';

export const Upload: FC<Props> = ({
  variant = 'drag',
  children,
  ...uploadProps
}) => {
  const uploadComponent: Record<string, FC<Omit<Props, 'variant'>>> = {
    drag: DraggerUpload,
    custom: CustomUpload,
  };
  const Component = uploadComponent[variant];

  return <Component {...uploadProps}>{children}</Component>;
};

export default Upload;
