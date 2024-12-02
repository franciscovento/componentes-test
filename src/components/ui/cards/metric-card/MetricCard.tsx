import { SvgElipsis } from '@/components/svg';
import { Dropdown, MenuProps } from 'antd';
import clsx from 'clsx';
import { FC } from 'react';
import { Text } from '../../typography/';
import BaseCard from '../base-card/BaseCard';

interface Props {
  menuProps?: MenuProps;
  title?: string;
  value?: number;
  detail?: string;
  status?: 'up' | 'down';
}
export const MetricCard: FC<Props> = ({
  title,
  menuProps,
  detail,
  status = 'down',
  value,
}) => {
  return (
    <BaseCard className="sui-bg-app-neutrals-50">
      <div className="sui-pb-4 sui-flex sui-items-center sui-justify-between">
        <Text className="sui-font-semibold">{title}</Text>
        {menuProps && (
          <Dropdown menu={menuProps} trigger={['click']}>
            <button>
              <SvgElipsis width={20} height={20} />
            </button>
          </Dropdown>
        )}
      </div>
      <div className="sui-text-3xl sui-pb-2 sui-leading-8 sui-font-bold">{value}</div>
      <div
        className={clsx(
          'sui-flex sui-items-center sui-gap-1 sui-text-sm sui-text-app-primary-700',
          {
            'sui-text-app-success-500': status === 'up',
            'sui-text-app-error-500': status === 'down',
          }
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          className={clsx({
            'sui-transform sui-rotate-180': status === 'down',
          })}
        >
          <path
            d="M9.99999 16.3334V4.66675M9.99999 4.66675L4.16666 10.5001M9.99999 4.66675L15.8333 10.5001"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{' '}
        <span> {detail}</span>
      </div>
    </BaseCard>
  );
};
