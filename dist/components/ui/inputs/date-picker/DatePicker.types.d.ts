export interface Props {
    onApply: (_values: {
        start?: Date;
        end?: Date;
        isRange: boolean;
    }) => void;
    startDate?: Date;
    endDate?: Date;
}
