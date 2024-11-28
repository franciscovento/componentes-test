import { Props } from '../Pagination.types';
import { FC } from 'react';

declare const SimplePagination: FC<Pick<Props, 'total' | 'current' | 'onChange' | 'pageSize'>>;
export default SimplePagination;
