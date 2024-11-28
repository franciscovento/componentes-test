'use client';
import SvgLeftArrow from '@/components/svg/SvgLeftArrow';
import { FC, useEffect, useState } from 'react';
import { Props } from '../Pagination.types';

const SimplePagination: FC<
  Pick<Props, 'total' | 'current' | 'onChange' | 'pageSize'>
> = ({ current = 0, onChange, total, pageSize = 10 }) => {
  const [currentPage, setCurrentPage] = useState(current);
  const btnStyles =
    'sui-rounded-lg sui-border sui-border-app-modern-gray-300 sui-bg-app-white sui-p-[10px] sm:sui-py-[10px] sm:sui-px-4 sui-text-sm sui-text-app-modern-gray-700 disabled:sui-opacity-60 disabled:sui-cursor-not-allowed sui-shadow-app-xs';

  const changePage = (page: number) => {
    if (!onChange) return;
    onChange(page, pageSize);
  };

  useEffect(() => {
    setCurrentPage(current);
  }, [current]);

  return (
    <div className="sui-flex sui-items-center sui-justify-between sui-gap-3 sui-bg-app-modern-gray-50 sui-px-6 sui-py-4">
      <button
        onClick={() => changePage(current - 1)}
        disabled={current === 1}
        className={btnStyles}
      >
        <span className="sui-hidden sm:sui-block">Volver</span>
        <SvgLeftArrow className="sm:sui-hidden" />
      </button>
      <span className="sui-text-app-modern-gray-700 sui-text-sm">
        Página {currentPage} de {total}
      </span>
      <button
        onClick={() => changePage(current + 1)}
        disabled={!total || current === total}
        className={btnStyles}
      >
        <span className="sui-hidden sm:sui-block">Siguiente</span>
        <SvgLeftArrow className="sm:sui-hidden sui-rotate-180" />
      </button>
    </div>
  );
};

export default SimplePagination;
