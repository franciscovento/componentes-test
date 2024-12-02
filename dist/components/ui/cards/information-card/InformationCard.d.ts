import { default as React, FC } from 'react';

interface Props {
    icon?: React.ReactNode;
    title?: string;
    className?: string;
    description?: string;
    items?: InformationItem[];
}
export interface InformationItem {
    label: string | React.ReactNode;
    content: string | React.ReactNode;
    action?: React.ReactNode;
}
export declare const InformationCard: FC<Props>;
export {};
