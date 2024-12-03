import { FC } from 'react';
import { TextAreaProps } from 'antd/es/input';

interface Props extends TextAreaProps {
    label?: string;
    error?: string;
    assistiveText?: string;
    labelClassName?: string;
    required?: boolean;
}
export declare const Textarea: FC<Props>;
export default Textarea;
