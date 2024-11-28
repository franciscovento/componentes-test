import { Pagination as AntdPagination, PaginationProps } from 'antd';
import { FC } from 'react';
import { PaginationVariants, Props } from './Pagination.types';
import SimplePagination from './variants/SimplePagination';

export const Pagination: FC<Props> = ({
  variant = 'default',
  ...paginationProps
}) => {
  const paginationComponent: Record<PaginationVariants, FC<PaginationProps>> = {
    default: AntdPagination,
    simple: SimplePagination,
  };
  const Component = paginationComponent[variant];

  return <Component {...paginationProps} />;
};

export default Pagination;
