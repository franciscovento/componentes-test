import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgMessageLine: FC<SvgProps> = ({ ...svgProps }) => {
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
        d="M8.49951 10.5H15.4995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.00049 18.4301H11.0005L15.4505 21.3901C16.1105 21.8301 17.0005 21.3601 17.0005 20.5601V18.4301C20.0005 18.4301 22.0005 16.4301 22.0005 13.4301V7.43005C22.0005 4.43005 20.0005 2.43005 17.0005 2.43005H7.00049C4.00049 2.43005 2.00049 4.43005 2.00049 7.43005V13.4301C2.00049 16.4301 4.00049 18.4301 7.00049 18.4301Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
