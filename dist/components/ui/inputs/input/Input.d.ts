import { InputProps, InputRef } from 'antd';

interface Props extends InputProps {
    label?: string;
    error?: string;
    assistiveText?: string;
    labelClassName?: string;
}
export declare const Input: import('react').ForwardRefExoticComponent<Props & import('react').RefAttributes<InputRef>>;
export default Input;
