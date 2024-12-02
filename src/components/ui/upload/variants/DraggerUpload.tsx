import { SvgDocumentUpload } from '@/components/svg/SvgDocumentUpload';
import { Upload } from 'antd';
import { FC } from 'react';
import { Props } from '../Upload.types';

const { Dragger } = Upload;

export const DraggerUpload: FC<Props> = ({ ...uploadProps }) => {
  return (
    <Dragger {...uploadProps}>
      <p>
        <span className="sui-inline-block sui-p-[10px] sui-border sui-border-app-modern-gray-100 sui-rounded-lg">
          <SvgDocumentUpload />
        </span>
      </p>
      <p className="sui-hidden sm:sui-block sui-text-app-text-body sui-text-sm sui-pb-1">
        <span className="sui-text-app-text-headings sui-font-bold">
          Haz clic para adjuntar
        </span>{' '}
        o arrastra y suelta el archivo.
      </p>
      <p className="sui-block sm:sui-hidden sui-text-sm sui-text-app-text-headings sui-font-bold sui-pb-1">
        Presioná para adjuntar
      </p>
      <p className="sui-text-sm">PDF, PNG, ó JPG (400KB)</p>
    </Dragger>
  );
};

export default DraggerUpload;
