import theme from '../lib/theme/themeConfig';
import { App, ConfigProvider } from 'antd';
import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}
export const AntdProvider: FC<Props> = ({ children }) => {
  return (
      <ConfigProvider theme={theme}>
        <App>{children}</App>
      </ConfigProvider>
 
  );
};

export default AntdProvider;
