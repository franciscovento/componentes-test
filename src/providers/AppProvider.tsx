import { FC } from "react";
import { App as AntdApp, AppProps } from 'antd';
interface Props {
  children: React.ReactNode;
  appProps: AppProps
}
export const App:FC<Props> = ({children, appProps}) => {
  return <AntdApp {...appProps}  >{children}</AntdApp>
}

export default App;