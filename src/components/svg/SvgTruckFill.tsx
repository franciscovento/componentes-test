import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgTruckFill: FC<SvgProps> = ({ ...svgProps }) => {
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
        d="M21.5 15.5C21.78 15.5 22 15.72 22 16V17C22 18.66 20.66 20 19 20C19 18.35 17.65 17 16 17C14.35 17 13 18.35 13 20H11C11 18.35 9.65 17 8 17C6.35 17 5 18.35 5 20C3.34 20 2 18.66 2 17V15C2 14.45 2.45 14 3 14H12.5C13.88 14 15 12.88 15 11.5V6C15 5.45 15.45 5 16 5H16.84C17.56 5 18.22 5.39 18.58 6.01L19.22 7.13C19.31 7.29 19.19 7.5 19 7.5C17.62 7.5 16.5 8.62 16.5 10V13C16.5 14.38 17.62 15.5 19 15.5H21.5Z"
        fill="currentcolor"
      />
      <path
        d="M8.05005 22.5C9.29269 22.5 10.3 21.4926 10.3 20.25C10.3 19.0074 9.29269 18 8.05005 18C6.80741 18 5.80005 19.0074 5.80005 20.25C5.80005 21.4926 6.80741 22.5 8.05005 22.5Z"
        fill="currentcolor"
      />
      <path
        d="M16.05 22.5C17.2927 22.5 18.3 21.4926 18.3 20.25C18.3 19.0074 17.2927 18 16.05 18C14.8074 18 13.8 19.0074 13.8 20.25C13.8 21.4926 14.8074 22.5 16.05 22.5Z"
        fill="currentcolor"
      />
      <path
        d="M22 12.736V14.5H18.625C18.0062 14.5 17.5 13.96 17.5 13.3V9.7C17.5 9.04 18.0062 8.5 18.625 8.5H20.0763L21.7075 11.548C21.8987 11.908 22 12.316 22 12.736Z"
        fill="currentcolor"
      />
      <path
        d="M13.08 2H5.69C3.9 2 2.4 3.28 2.07 4.98H6.44C6.82 4.98 7.12 5.29 7.12 5.67C7.12 6.05 6.82 6.35 6.44 6.35H2V7.73H4.6C4.98 7.73 5.29 8.04 5.29 8.42C5.29 8.8 4.98 9.1 4.6 9.1H2V10.48H2.77C3.15 10.48 3.46 10.79 3.46 11.17C3.46 11.55 3.15 11.85 2.77 11.85H2V12.08C2 12.63 2.45 13.08 3 13.08H12.15C13.17 13.08 14 12.25 14 11.23V2.92C14 2.41 13.59 2 13.08 2Z"
        fill="currentcolor"
      />
      <path
        d="M2.07 4.97998H1.92H0.94C0.56 4.97998 0.25 5.28998 0.25 5.66998C0.25 6.04998 0.56 6.34998 0.94 6.34998H1.85H2V5.68998C2 5.44998 2.03 5.20998 2.07 4.97998Z"
        fill="currentcolor"
      />
      <path
        d="M1.85 7.72998H0.94C0.56 7.72998 0.25 8.03998 0.25 8.41998C0.25 8.79998 0.56 9.09998 0.94 9.09998H1.85H2V7.72998H1.85Z"
        fill="currentcolor"
      />
      <path
        d="M1.85 10.48H0.94C0.56 10.48 0.25 10.79 0.25 11.17C0.25 11.55 0.56 11.85 0.94 11.85H1.85H2V10.48H1.85Z"
        fill="currentcolor"
      />
    </svg>
  );
};
