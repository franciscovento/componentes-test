import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgRowVertical: FC<SvgProps> = ({ ...svgProps }) => {
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
        d="M19.9005 13.5H4.10049C2.60049 13.5 2.00049 14.14 2.00049 15.73V19.77C2.00049 21.36 2.60049 22 4.10049 22H19.9005C21.4005 22 22.0005 21.36 22.0005 19.77V15.73C22.0005 14.14 21.4005 13.5 19.9005 13.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9005 1.99994H4.10049C2.60049 1.99994 2.00049 2.63994 2.00049 4.22994V8.26994C2.00049 9.85994 2.60049 10.4999 4.10049 10.4999H19.9005C21.4005 10.4999 22.0005 9.85994 22.0005 8.26994V4.22994C22.0005 2.63994 21.4005 1.99994 19.9005 1.99994Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
