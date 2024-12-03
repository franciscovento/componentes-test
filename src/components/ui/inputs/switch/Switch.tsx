import { Switch as AntdSwitch, SwitchProps } from 'antd';
import { FC } from 'react';



const Switch: FC<SwitchProps> = ({  ...switchProps }) => {



  return <AntdSwitch {...switchProps} />;
};

export default Switch;
