import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgSort: FC<SvgProps> = ({ ...svgProps }) => {
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
        d="M21 7.74997H3C2.59 7.74997 2.25 7.40997 2.25 6.99997C2.25 6.58997 2.59 6.24997 3 6.24997H21C21.41 6.24997 21.75 6.58997 21.75 6.99997C21.75 7.40997 21.41 7.74997 21 7.74997Z"
        fill="currentColor"
      />
      <path
        d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
        fill="currentColor"
      />
      <path
        d="M14.0007 17.75H10.0007C9.59073 17.75 9.25073 17.41 9.25073 17C9.25073 16.59 9.59073 16.25 10.0007 16.25H14.0007C14.4107 16.25 14.7507 16.59 14.7507 17C14.7507 17.41 14.4107 17.75 14.0007 17.75Z"
        fill="currentColor"
      />
    </svg>
  );
};
