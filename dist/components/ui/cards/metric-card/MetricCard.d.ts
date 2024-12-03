import { FC } from 'react';
import { MenuProps } from 'antd';

interface Props {
    menuProps?: MenuProps;
    title?: string;
    value?: number;
    detail?: string;
    status?: 'up' | 'down';
}
export declare const MetricCard: FC<Props>;
export {};
