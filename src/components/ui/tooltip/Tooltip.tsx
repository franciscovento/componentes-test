import { FC } from 'react';

import { Tooltip as AntdTooltip, TooltipProps } from 'antd';
import { Button } from '../';

export const Tooltip: FC<TooltipProps> = ({ children, ...tooltipProps }) => {
  return <AntdTooltip {...tooltipProps}>{children}</AntdTooltip>;
};

export default Tooltip;

export const TooltipStory: FC<TooltipProps> = ({ ...tooltipProps }) => {
  return (
    <AntdTooltip title="Tooltip" {...tooltipProps}>
      <Button>Hover me</Button>
    </AntdTooltip>
  );
};
