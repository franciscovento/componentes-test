import { StepsProps } from 'antd';

export type StepsVariants = 'default' | 'custom';
export interface Props extends StepsProps {
  variant?: StepsVariants;
}
