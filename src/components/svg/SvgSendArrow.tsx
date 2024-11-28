import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgSendArrow: FC<SvgProps> = ({ ...svgProps }) => {
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
        d="M9.50978 4.23001L18.0698 8.51001C21.9098 10.43 21.9098 13.57 18.0698 15.49L9.50978 19.77C3.74978 22.65 1.39978 20.29 4.27978 14.54L5.14978 12.81C5.36978 12.37 5.36978 11.64 5.14978 11.2L4.27978 9.46001C1.39978 3.71001 3.75978 1.35001 9.50978 4.23001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.43994 12H10.8399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
