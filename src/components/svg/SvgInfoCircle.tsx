import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgInfoCircle: FC<SvgProps> = ({ ...svgProps }) => {
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
        d="M11.9995 1.99994C17.4995 1.99994 21.9995 6.49994 21.9995 11.9999C21.9995 17.4999 17.4995 21.9999 11.9995 21.9999C6.49951 21.9999 1.99951 17.4999 1.99951 11.9999C1.99951 6.49994 6.49951 1.99994 11.9995 1.99994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.9999V10.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9941 8.00006H12.0031"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgInfoCircle;
