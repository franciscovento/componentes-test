import { Tabs as AntdTabs } from 'antd';
import { FC } from 'react';
import { Props } from './Tabs.types';

export const Tabs: FC<Props> = ({ ...tabsProps }) => {
  return <AntdTabs {...tabsProps} />;
};

export default Tabs;
