import { Steps as AntdSteps, StepsProps } from 'antd';
import { FC } from 'react';
import { Props, StepsVariants } from './Steps.types';
import CustomSteps from './variants/CustomSteps';
export const Steps: FC<Props> = ({ variant = 'default', ...stepsProps }) => {
  const stepsComponent: Record<StepsVariants, FC<StepsProps>> = {
    default: AntdSteps,
    custom: CustomSteps,
  };
  const Component = stepsComponent[variant];

  return <Component {...stepsProps} />;
};

export default Steps;
