'use client';
import { Switch as AntdSwitch, SwitchProps } from 'antd';
import clsx from 'clsx';
import { FC, useState } from 'react';

const LabelSwitch: FC<SwitchProps> = ({
  checked,
  onChange,
  ...switchProps
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange: SwitchProps['onChange'] = (checked, event) => {
    if (onChange) {
      onChange(checked, event);
    }
    setIsChecked(checked);
  };

  return (
    <div className="sui-flex sui-items-center sui-gap-2">
      <span
        className={clsx('sui-text-sm sui-leading-5 sui-font-semibold', {
          'sui-text-app-modern-gray-400': isChecked,
        })}
      >
        No
      </span>
      <AntdSwitch checked={checked} onChange={handleChange} {...switchProps} />
      <span
        className={clsx('sui-text-sm sui-leading-5 sui-font-semibold', {
          'sui-text-app-modern-gray-400': !isChecked,
        })}
      >
        Si
      </span>
    </div>
  );
};

export default LabelSwitch;
