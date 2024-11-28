import { SvgProps } from '@/lib/interfaces/customTypes';

import { FC } from 'react';

export const SvgStepDot: FC<SvgProps> = ({ ...svgProps }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill={'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <rect
        x="0.75"
        y="0.75"
        width="22.5"
        height="22.5"
        rx="11.25"
        stroke={'currentColor'}
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" fill={'currentColor'} />
    </svg>
  );
};

export default SvgStepDot;
