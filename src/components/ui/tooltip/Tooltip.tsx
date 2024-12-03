import { FC } from 'react';

import { Tooltip as AntdTooltip, TooltipProps } from 'antd';


export const Tooltip: FC<TooltipProps> = ({ children, ...tooltipProps }) => {
  return <AntdTooltip {...tooltipProps}>{children}</AntdTooltip>;
};

export default Tooltip;
