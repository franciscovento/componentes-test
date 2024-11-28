import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgArrowUp: FC<SvgProps> = ({ ...svgProps }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M19.9203 15.8C19.7303 15.8 19.5403 15.73 19.3903 15.58L12.8703 9.05996C12.3903 8.57996 11.6103 8.57996 11.1303 9.05996L4.61026 15.58C4.32026 15.87 3.84026 15.87 3.55026 15.58C3.26026 15.29 3.26026 14.81 3.55026 14.52L10.0703 7.99996C11.1303 6.93996 12.8603 6.93996 13.9303 7.99996L20.4503 14.52C20.7403 14.81 20.7403 15.29 20.4503 15.58C20.3003 15.72 20.1103 15.8 19.9203 15.8Z"
        fill="currentColor"
      />
    </svg>
  );
};
