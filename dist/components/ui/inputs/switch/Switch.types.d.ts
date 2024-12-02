import { SwitchProps } from 'antd';

export type SwitchVariants = 'default' | 'label';
export interface Props extends SwitchProps {
    variant?: SwitchVariants;
}
