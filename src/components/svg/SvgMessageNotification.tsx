import { SvgProps } from '@/lib/interfaces/customTypes';
import { FC } from 'react';

export const SvgMessageNotification: FC<SvgProps> = ({ ...svProps }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svProps}
    >
      <path
        d="M22.0005 9.99994V12.9999C22.0005 16.9999 20.0005 18.9999 16.0005 18.9999H15.5005C15.1905 18.9999 14.8905 19.1499 14.7005 19.3999L13.2005 21.3999C12.5405 22.2799 11.4605 22.2799 10.8005 21.3999L9.30049 19.3999C9.14049 19.1799 8.77049 18.9999 8.50049 18.9999H8.00049C4.00049 18.9999 2.00049 17.9999 2.00049 12.9999V7.99994C2.00049 3.99994 4.00049 1.99994 8.00049 1.99994H14.0005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5005 6.99994C20.8812 6.99994 22.0005 5.88065 22.0005 4.49994C22.0005 3.11923 20.8812 1.99994 19.5005 1.99994C18.1198 1.99994 17.0005 3.11923 17.0005 4.49994C17.0005 5.88065 18.1198 6.99994 19.5005 6.99994Z"
        fill="#D92D20"
        stroke="#D92D20"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.996 11H16.005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9952 11H12.0042"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99451 11H8.00349"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
