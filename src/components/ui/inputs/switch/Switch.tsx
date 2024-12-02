import { Switch as AntdSwitch, SwitchProps } from 'antd';
import { FC } from 'react';
import { Props, SwitchVariants } from './Switch.types';
import LabelSwitch from './variants/LabelSwitch';

export const Switch: FC<Props> = ({ variant = 'default', ...switchProps }) => {
  const switchComponent: Record<SwitchVariants, FC<SwitchProps>> = {
    default: AntdSwitch,
    label: LabelSwitch,
  };
  const Component = switchComponent[variant];

  return <Component {...switchProps} />;
};

export default Switch;
