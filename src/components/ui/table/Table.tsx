import { Table as AntdTable } from 'antd';

import { RefTable } from 'antd/es/table/interface';
import { clsx } from 'clsx';

export const Table: RefTable = ({ children, className, ...tableProps }) => {
  return (
    <AntdTable className={clsx(['app-table', className])} {...tableProps}>
      {children}
    </AntdTable>
  );
};

export default Table;
