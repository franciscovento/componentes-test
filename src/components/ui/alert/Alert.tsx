import SvgExclamationCircle from '@/components/svg/SvgExclamationCircle';
import SvgInfoCircle from '@/components/svg/SvgInfoCircle';
import SvgSuccessCircle from '@/components/svg/SvgSuccessCircle';
import SvgWarningTriangle from '@/components/svg/SvgWarningTriangle';
import {  AlertProps, Alert as AntdAlert } from 'antd';
import { FC } from 'react';


export const notificationIcons: Record<
  'success' | 'info' | 'warning' | 'error',
  React.ReactNode
> = {
  error: (
    <SvgExclamationCircle
      width={24}
      height={24}
      className="sui-block sui-mr-4 sui-text-app-error-500"
    />
  ),
  success: <SvgSuccessCircle width={24} height={24} className="sui-block sui-mr-4" />,
  warning: (
    <SvgWarningTriangle
      width={24}
      height={24}
      className="sui-block sui-mr-4 sui-text-app-warning-500"
    />
  ),
  info: <SvgInfoCircle width={24} height={24} className="sui-block sui-mr-4" />,
};

export const Alert: FC<AlertProps> = ({
  showIcon = true,
  icon,
  type = 'success',
  ...alertProps
}) => {
  return (
    <AntdAlert
      showIcon={showIcon}
      type={type}
      {...alertProps}
      icon={icon ? icon : notificationIcons[type]}
    />
  );
};

export default Alert;
