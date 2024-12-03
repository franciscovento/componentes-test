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
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { PaginationProps } from 'antd';
import { RadioProps } from 'antd';
import { RefAttributes } from 'react';
import { SelectProps } from 'antd';
import { SwitchProps } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import { ThemeConfig } from 'antd';

export declare const ActionButton: FC<ActionButtonProps>;

declare interface ActionButtonProps extends React.ComponentPropsWithRef<'button'> {
}

export declare const Alert: FC<AlertProps>;

export declare const Avatar: FC<AvatarProps>;

export declare const BaseCard: FC<Props>;

export declare const Button: FC<ButtonProps>;

declare interface ButtonProps extends ButtonProps_2 {
}

export declare const Checkbox: FC<Props_3>;

export declare const CustomComponent: () => JSX_2.Element;

export declare const Divider: FC<Props_2>;

export declare const Input: ForwardRefExoticComponent<Props_4 & RefAttributes<InputRef>>;

export declare const Pagination: FC<PaginationProps>;

declare interface Props {
    className?: string;
    children: React.ReactNode;
}

declare interface Props_2 extends DividerProps {
}

declare interface Props_3 extends CheckboxProps {
}

declare interface Props_4 extends InputProps {
    label?: string;
    error?: string;
    assistiveText?: string;
    labelClassName?: string;
}

declare interface Props_5 extends RadioProps {
}

declare interface Props_6 extends SelectProps {
    label?: string;
    error?: string;
    assistiveText?: string;
    labelClassName?: string;
    required?: boolean;
}

declare interface Props_7 extends TextAreaProps {
    label?: string;
    error?: string;
    assistiveText?: string;
    labelClassName?: string;
    required?: boolean;
}

declare interface Props_8 {
    children: default_2.ReactNode;
}

export declare const Radio: FC<Props_5>;

export declare const Select: FC<Props_6>;

export declare const sullairTheme: ThemeConfig;

export declare const SvgArrowCircleRight: FC<SvgProps>;

export declare const SvgArrowDown: FC<SvgProps>;

export declare const SvgArrowLeft: FC<SvgProps>;

export declare const SvgArrowRight: FC<SvgProps>;

export declare const SvgArrowUp: FC<SvgProps>;

export declare const SvgCalendar: FC<SvgProps>;

export declare const SvgChart: FC<SvgProps>;

export declare const SvgCheckList: FC<SvgProps>;

export declare const SvgCircleContainer: FC<Props_8>;

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

export declare const Switch: FC<SwitchProps>;

export declare const Textarea: FC<Props_7>;

export { }
