import { Switch as AntdSwitch, SwitchProps } from 'antd';
import { FC } from 'react';



export const Switch: FC<SwitchProps> = ({  ...switchProps }) => {



  return <AntdSwitch {...switchProps} />;
};

export default Switch;
