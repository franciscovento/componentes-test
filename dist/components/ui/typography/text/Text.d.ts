import { FC } from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
    variant?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    weight?: '500' | '600' | '700';
    as?: 'p' | 'span' | 'div' | 'small';
}
export declare const Text: FC<Props>;
export default Text;
