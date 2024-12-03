import { PaginationProps } from 'antd';

export type PaginationVariants = 'default' | 'simple';
export interface Props extends PaginationProps {
    variant?: PaginationVariants;
}
