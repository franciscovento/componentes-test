import { Avatar as AntdAvatar, AvatarProps } from 'antd';
import { FC } from 'react';

const Avatar: FC<AvatarProps> = ({ ...avatarProps }) => {
  return <AntdAvatar {...avatarProps} />;
};

export default Avatar;
