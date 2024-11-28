import theme from "@/lib/theme/themeConfig";
import { ConfigProvider as AntdConfigProvider, ConfigProviderProps } from "antd";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
  config: ConfigProviderProps
}
export const ConfigProvider:FC<Props> = ({children, config}) => {
  return <AntdConfigProvider theme={ {...theme, ...config.theme} } {...config} >{children}</AntdConfigProvider>;
}

export default ConfigProvider;