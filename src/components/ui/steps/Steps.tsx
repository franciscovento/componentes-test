import { Steps as AntdSteps, StepsProps } from 'antd';
import { FC } from 'react';


export const Steps: FC<StepsProps> = ({  ...stepsProps }) => {



  return <AntdSteps {...stepsProps} />;
};

export default Steps;
