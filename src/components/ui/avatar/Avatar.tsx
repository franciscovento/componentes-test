import { Avatar as AntdAvatar } from 'antd';
import { FC } from 'react';
import { Props } from './Avatar.types';
export const Avatar: FC<Props> = ({ ...avatarProps }) => {
  return <AntdAvatar {...avatarProps} />;
};

export default Avatar;
