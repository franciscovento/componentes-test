import { FC } from 'react';
import { ConfigProviderProps } from 'antd';

interface Props {
    children: React.ReactNode;
    config?: ConfigProviderProps;
}
export declare const ConfigProvider: FC<Props>;
export default ConfigProvider;
