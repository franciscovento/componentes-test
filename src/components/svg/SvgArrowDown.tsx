import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgArrowDown: FC<SvgProps> = ({ ...svgProps }) => {
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
        d="M12.0003 16.8C11.3003 16.8 10.6003 16.53 10.0703 16L3.55026 9.48001C3.26026 9.19001 3.26026 8.71001 3.55026 8.42001C3.84026 8.13001 4.32026 8.13001 4.61026 8.42001L11.1303 14.94C11.6103 15.42 12.3903 15.42 12.8703 14.94L19.3903 8.42001C19.6803 8.13001 20.1603 8.13001 20.4503 8.42001C20.7403 8.71001 20.7403 9.19001 20.4503 9.48001L13.9303 16C13.4003 16.53 12.7003 16.8 12.0003 16.8Z"
        fill="currentColor"
      />
    </svg>
  );
};
