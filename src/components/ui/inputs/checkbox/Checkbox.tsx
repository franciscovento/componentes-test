import { Checkbox as AntdCheckBox, CheckboxProps } from 'antd';
import clsx from 'clsx';
import { FC } from 'react';

interface Props extends CheckboxProps {}

export const Checkbox: FC<Props> = ({
  className,
  children,
  ...checkBoxProps
}) => {
  return (
    <AntdCheckBox {...checkBoxProps} className={clsx([className])}>
      {children}
    </AntdCheckBox>
  );
};

export default Checkbox;
