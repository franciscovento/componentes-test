import { Pagination as AntdPagination, PaginationProps } from 'antd';
import { FC } from 'react';



export const Pagination: FC<PaginationProps> = ({
  ...paginationProps
}) => {


  return <AntdPagination {...paginationProps} />;
};

export default Pagination;
