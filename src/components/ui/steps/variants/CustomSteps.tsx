'use client';
import { SvgStepDot } from '@/components/svg';
import { Steps as AntdSteps, StepsProps } from 'antd';
import { FC, useEffect, useState } from 'react';
export const CustomSteps: FC<StepsProps> = ({ items, ...stepsProps }) => {
  const [newItems, setNewItems] = useState<StepsProps[]>([]);

  useEffect(() => {
    if (items) {
      const newItems = items?.map((item) => {
        return {
          ...item,
          icon: item.status === 'finish' ? '' : <SvgStepDot />,
        };
      });
      setNewItems(newItems);
    }
  }, [items]);

  return <AntdSteps items={newItems} {...stepsProps} />;
};

export default CustomSteps;
