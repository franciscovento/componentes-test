import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgChart: FC<SvgProps> = ({ ...svgProps }) => {
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
        d="M3 22.0001H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.59998 8.37988H4C3.45 8.37988 3 8.82988 3 9.37988V17.9999C3 18.5499 3.45 18.9999 4 18.9999H5.59998C6.14998 18.9999 6.59998 18.5499 6.59998 17.9999V9.37988C6.59998 8.82988 6.14998 8.37988 5.59998 8.37988Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7999 5.18988H11.2C10.65 5.18988 10.2 5.63988 10.2 6.18988V17.9999C10.2 18.5499 10.65 18.9999 11.2 18.9999H12.7999C13.3499 18.9999 13.7999 18.5499 13.7999 17.9999V6.18988C13.7999 5.63988 13.3499 5.18988 12.7999 5.18988Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9999 1.99988H18.3999C17.8499 1.99988 17.3999 2.44988 17.3999 2.99988V17.9999C17.3999 18.5499 17.8499 18.9999 18.3999 18.9999H19.9999C20.5499 18.9999 20.9999 18.5499 20.9999 17.9999V2.99988C20.9999 2.44988 20.5499 1.99988 19.9999 1.99988Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
