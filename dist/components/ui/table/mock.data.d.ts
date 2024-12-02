import { TableProps } from 'antd';

export type DataType = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
};
declare const columns: TableProps<DataType>['columns'];
declare const dataSource: DataType[];
export { columns, dataSource };
