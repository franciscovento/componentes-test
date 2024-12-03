/// <reference types="react" />

import { AlertProps } from 'antd';
import { AvatarProps } from 'antd';
import { ButtonProps as ButtonProps_2 } from 'antd';
import { CheckboxProps } from 'antd';
import { default as default_2 } from 'react';
import { DividerProps } from 'antd';
import { FC } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { InputProps } from 'antd';
import { InputRef } from 'antd';
import { MenuProps } from 'antd';
import { PaginationProps } from 'antd';
import { RadioProps } from 'antd';
import { RefAttributes } from 'react';
import { RefTable } from 'antd/es/table/interface';
import { SelectProps } from 'antd';
import { StepsProps } from 'antd';
import { StoryObj } from '@storybook/react';
import { SwitchProps } from 'antd';
import { TabsProps } from 'antd';
import { TagProps } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import { ThemeConfig } from 'antd';
import { TooltipProps } from 'antd';
import { UploadProps } from 'antd';

export declare const ActionButton: FC<ActionButtonProps>;

declare interface ActionButtonProps extends React.ComponentPropsWithRef<'button'> {
}

export declare const Alert: FC<AlertProps>;

export declare const Avatar: FC<Props>;

export declare const BaseCard: FC<Props_2>;

export declare const Button: FC<ButtonProps>;

declare interface ButtonProps extends ButtonProps_2 {
}

export declare const Checkbox: FC<Props_7>;

export declare const CustomSteps: FC<StepsProps>;

export declare const CustomUpload: FC<Props_21>;

export declare const DatePicker: FC<Props_8>;

export declare const Divider: FC<Props_6>;

export declare const DraggerUpload: FC<Props_21>;

export declare const IconsStory: FC<Props_22>;

export declare const InformationCard: FC<Props_3>;

declare interface InformationItem {
    label: string | default_2.ReactNode;
    content: string | default_2.ReactNode;
    action?: default_2.ReactNode;
}

export declare const Input: ForwardRefExoticComponent<Props_9 & RefAttributes<InputRef>>;

export declare const MetricCard: FC<Props_4>;

export declare const Pagination: FC<Props_14>;

declare type PaginationVariants = 'default' | 'simple';

export declare const Playground: Story;

declare interface Props extends AvatarProps {
}

declare interface Props_10 extends RadioProps {
}

declare interface Props_11 extends SelectProps {
    label?: string;
    error?: string;
    assistiveText?: string;
    labelClassName?: string;
    required?: boolean;
}

declare interface Props_12 extends SwitchProps {
    variant?: SwitchVariants;
}

declare interface Props_13 extends TextAreaProps {
    label?: string;
    error?: string;
    assistiveText?: string;
    labelClassName?: string;
    required?: boolean;
}

declare interface Props_14 extends PaginationProps {
    variant?: PaginationVariants;
}

declare interface Props_15 extends StepsProps {
    variant?: StepsVariants;
}

declare interface Props_16 extends TabsProps {
}

declare interface Props_17 extends TagProps {
}

declare interface Props_18 {
    totalSteps: number;
    currentStep: number;
    onClose: () => void;
    onSecondaryBtn: () => void;
    onPrimaryBtn: () => void;
    title: string;
    description: string;
    avatarSrc?: string;
    secondaryBtnText?: string;
    primaryBtnText?: string;
}

declare interface Props_19 {
    children: React.ReactNode;
    className?: string;
    variant?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    weight?: '500' | '600' | '700';
    as?: 'p' | 'span' | 'div' | 'small';
}

declare interface Props_2 {
    className?: string;
    children: React.ReactNode;
}

declare interface Props_20 {
    as?: TitleTypes;
    children: React.ReactNode;
    variant?: TitleVariants;
    className?: string;
    weight?: '600' | '700';
}

declare interface Props_21 extends UploadProps {
    variant?: 'custom' | 'drag';
}

declare interface Props_22 {
    textColor: string;
}

declare interface Props_23 {
    children: default_2.ReactNode;
}

declare interface Props_3 {
    icon?: default_2.ReactNode;
    title?: string;
    className?: string;
    description?: string;
    items?: InformationItem[];
}

declare interface Props_4 {
    menuProps?: MenuProps;
    title?: string;
    value?: number;
    detail?: string;
    status?: 'up' | 'down';
}

declare interface Props_5 {
    label: string;
    title: string;
}

declare interface Props_6 extends DividerProps {
}

declare interface Props_7 extends CheckboxProps {
}

declare interface Props_8 {
    onApply: (_values: {
        start?: Date;
        end?: Date;
        isRange: boolean;
    }) => void;
    startDate?: Date;
    endDate?: Date;
}

declare interface Props_9 extends InputProps {
    label?: string;
    error?: string;
    assistiveText?: string;
    labelClassName?: string;
}

export declare const Radio: FC<Props_10>;

export declare const Select: FC<Props_11>;

export declare const SimplePagination: FC<Pick<Props_14, 'total' | 'current' | 'onChange' | 'pageSize'>>;

export declare const Steps: FC<Props_15>;

declare type StepsVariants = 'default' | 'custom';

declare type Story = StoryObj<typeof IconsStory>;

export declare const SummaryCard: FC<Props_5>;

export declare const SvgArrowCircleRight: FC<SvgProps>;

export declare const SvgArrowDown: FC<SvgProps>;

export declare const SvgArrowLeft: FC<SvgProps>;

export declare const SvgArrowRight: FC<SvgProps>;

export declare const SvgArrowUp: FC<SvgProps>;

export declare const SvgCalendar: FC<SvgProps>;

export declare const SvgChart: FC<SvgProps>;

export declare const SvgCheckList: FC<SvgProps>;

export declare const SvgCircleContainer: FC<Props_23>;

export declare const SvgCrown: FC<SvgProps>;

export declare const SvgDocumentEmpty: FC<SvgProps>;

export declare const SvgDocumentUpload: FC<SvgProps>;

export declare const SvgDownload: FC<SvgProps>;

export declare const SvgEditPencil: FC<SvgProps>;

export declare const SvgElipsis: FC<SvgProps>;

export declare const SvgExclamationCircle: FC<SvgProps>;

export declare const SvgExport: FC<SvgProps>;

export declare const SvgEyeSlash: FC<SvgProps>;

export declare const SvgHomeFill: FC<SvgProps>;

export declare const SvgHomeOutline: FC<SvgProps>;

export declare const SvgInfoCircle: FC<SvgProps>;

export declare const SvgKeyOutline: FC<SvgProps>;

export declare const SvgLeftArrow: FC<SvgProps>;

export declare const SvgLogo: FC<SvgProps>;

export declare const SvgLogout: FC<SvgProps>;

export declare const SvgMail: FC<SvgProps>;

export declare const SvgMapPin: FC<SvgProps>;

export declare const SvgMessage: FC<SvgProps>;

export declare const SvgMessageLine: FC<SvgProps>;

export declare const SvgMessageNotification: FC<SvgProps>;

export declare const SvgMinus: FC<SvgProps>;

export declare const SvgMoveLine: FC<SvgProps>;

export declare const SvgOpenEye: FC<SvgProps>;

export declare const SvgOutlineBell: FC<SvgProps>;

export declare const SvgPhone: FC<SvgProps>;

export declare const SvgPlus: FC<SvgProps>;

declare interface SvgProps extends React.ComponentPropsWithoutRef<'svg'> {
}

export declare const SvgQuestionCircleFill: FC<SvgProps>;

export declare const SvgQuestionCircleOutline: FC<SvgProps>;

export declare const SvgRowVertical: FC<SvgProps>;

export declare const SvgSearch: FC<SvgProps>;

export declare const SvgSendArrow: FC<SvgProps>;

export declare const SvgSort: FC<SvgProps>;

export declare const SvgStepDot: FC<SvgProps>;

export declare const SvgSuccessCircle: FC<SvgProps>;

export declare const SvgSuccessCircleFill: FC<SvgProps>;

export declare const SvgSupplierFill: FC<SvgProps>;

export declare const SvgSupplierOutline: FC<SvgProps>;

export declare const SvgTrash: FC<SvgProps>;

export declare const SvgTruckFill: FC<SvgProps>;

export declare const SvgTruckOutline: FC<SvgProps>;

export declare const SvgWarningTriangle: FC<SvgProps>;

export declare const SvgXMark: FC<SvgProps>;

export declare const Switch: FC<Props_12>;

declare type SwitchVariants = 'default' | 'label';

export declare const Table: RefTable;

export declare const Tabs: FC<Props_16>;

export declare const Tag: FC<Props_17>;

declare const Text_2: FC<Props_19>;
export { Text_2 as Text }

export declare const Textarea: FC<Props_13>;

export declare const theme: ThemeConfig;

export declare const Title: FC<Props_20>;

declare type TitleTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

declare type TitleVariants = 'xl' | 'lg' | 'md' | 'sm';

export declare const Tooltip: FC<TooltipProps>;

export declare const TourTooltipCard: FC<Props_18>;

export declare const Upload: FC<Props_21>;

export { }
