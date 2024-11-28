import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgMail: FC<SvgProps> = ({ ...svgProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      {...svgProps}
    >
      <path
        d="M14.1665 17.5833H5.83317C3.33317 17.5833 1.6665 16.3333 1.6665 13.4167V7.58333C1.6665 4.66666 3.33317 3.41666 5.83317 3.41666H14.1665C16.6665 3.41666 18.3332 4.66666 18.3332 7.58333V13.4167C18.3332 16.3333 16.6665 17.5833 14.1665 17.5833Z"
        stroke="#344054"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1668 8L11.5585 10.0833C10.7002 10.7667 9.29183 10.7667 8.43349 10.0833L5.8335 8"
        stroke="#344054"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
