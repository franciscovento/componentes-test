import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgArrowLeft: FC<SvgProps> = ({ ...svgProps }) => {
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
        d="M15.0005 20.67C14.8105 20.67 14.6205 20.6 14.4705 20.45L7.95052 13.93C6.89052 12.87 6.89052 11.13 7.95052 10.07L14.4705 3.55002C14.7605 3.26002 15.2405 3.26002 15.5305 3.55002C15.8205 3.84002 15.8205 4.32002 15.5305 4.61002L9.01052 11.13C8.53052 11.61 8.53052 12.39 9.01052 12.87L15.5305 19.39C15.8205 19.68 15.8205 20.16 15.5305 20.45C15.3805 20.59 15.1905 20.67 15.0005 20.67Z"
        fill="currentColor"
      />
    </svg>
  );
};
