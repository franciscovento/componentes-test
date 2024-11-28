import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}
export const SvgCircleContainer: FC<Props> = ({ children }) => {
  return (
    <div className="bg-app-white p-2 rounded-full border border-app-border-primary">
      {children}
    </div>
  );
};

export default SvgCircleContainer;
