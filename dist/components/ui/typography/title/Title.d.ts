import { FC } from 'react';

type TitleVariants = 'xl' | 'lg' | 'md' | 'sm';
type TitleTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface Props {
    as?: TitleTypes;
    children: React.ReactNode;
    variant?: TitleVariants;
    className?: string;
    weight?: '600' | '700';
}
export declare const Title: FC<Props>;
export default Title;
