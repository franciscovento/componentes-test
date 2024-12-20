import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgMapPin: FC<SvgProps> = ({ ...svgProps }) => {
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
        d="M10.0004 11.1916C11.4363 11.1916 12.6004 10.0276 12.6004 8.59164C12.6004 7.1557 11.4363 5.99164 10.0004 5.99164C8.56445 5.99164 7.40039 7.1557 7.40039 8.59164C7.40039 10.0276 8.56445 11.1916 10.0004 11.1916Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3.01675 7.07502C4.65842 -0.141644 15.3501 -0.133311 16.9834 7.08336C17.9417 11.3167 15.3084 14.9 13.0001 17.1167C11.3251 18.7334 8.67508 18.7334 6.99175 17.1167C4.69175 14.9 2.05842 11.3084 3.01675 7.07502Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default SvgMapPin;
