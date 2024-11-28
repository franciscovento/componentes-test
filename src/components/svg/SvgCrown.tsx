import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgCrown: FC<SvgProps> = ({ ...svgProps }) => {
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
        d="M16.6997 18.98H7.29971C6.87971 18.98 6.40971 18.65 6.26971 18.25L2.12971 6.67002C1.53971 5.01002 2.22971 4.50002 3.64971 5.52002L7.54971 8.31002C8.19971 8.76002 8.93971 8.53002 9.21971 7.80002L10.9797 3.11002C11.5397 1.61002 12.4697 1.61002 13.0297 3.11002L14.7897 7.80002C15.0697 8.53002 15.8097 8.76002 16.4497 8.31002L20.1097 5.70002C21.6697 4.58002 22.4197 5.15002 21.7797 6.96002L17.7397 18.27C17.5897 18.65 17.1197 18.98 16.6997 18.98Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.50049 22.0001H17.5005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.50049 13.9999H14.5005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
