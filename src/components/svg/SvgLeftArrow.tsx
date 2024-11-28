import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgLeftArrow: FC<SvgProps> = ({ ...svgProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...svgProps}
    >
      <path
        d="M7.97502 4.94165L2.91669 9.99998L7.97502 15.0583"
        stroke="#344054"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0834 10H3.05835"
        stroke="#344054"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgLeftArrow;
