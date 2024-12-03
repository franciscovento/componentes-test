import { FC } from 'react';
import { SelectProps } from 'antd';

interface Props extends SelectProps {
    label?: string;
    error?: string;
    assistiveText?: string;
    labelClassName?: string;
    required?: boolean;
}
export declare const Select: FC<Props>;
export default Select;
