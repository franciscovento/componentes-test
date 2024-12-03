import { notificationIcons } from '@/lib/constants/NotificationIcons';
import { AlertProps, Alert as AntdAlert } from 'antd';
import { FC } from 'react';


const Alert: FC<AlertProps> = ({
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
