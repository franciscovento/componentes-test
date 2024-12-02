export interface Props {
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
