import { SvgArrowDown, SvgSuccessCircle } from '@/components/svg';
import { Select as AntdSelect, SelectProps } from 'antd';
import clsx from 'clsx';
import { FC } from 'react';

interface Props extends SelectProps {
  label?: string;
  error?: string;
  assistiveText?: string;
  labelClassName?: string;
  required?: boolean;
}

export const Select: FC<Props> = ({
  children,
  labelClassName,
  error,
  assistiveText,
  required,
  menuItemSelectedIcon,
  label,
  ...selectProps
}) => {
  return (
    <div className={clsx(['sui-flex sui-flex-col sui-gap-1', labelClassName])}>
      {label && (
        <span className={clsx(['sui-text-sm sui-font-semibold'])}>
          {label} {required && '*'}
        </span>
      )}
      <AntdSelect
        suffixIcon={<SvgArrowDown className="sui-text-app-modern-gray-700" />}
        menuItemSelectedIcon={
          menuItemSelectedIcon ? (
            menuItemSelectedIcon
          ) : (
            <SvgSuccessCircle
              className="sui-text-app-primary-900"
              width={20}
              height={20}
            />
          )
        }
        {...selectProps}
      >
        {children}
      </AntdSelect>
      <small
        className={clsx('sui-relative sui-left-3 sui-text-app-text-body sui-text-xs', {
          '!sui-text-app-error-400': error,
        })}
      >
        {error ? error : assistiveText}
      </small>
    </div>
  );
};

export default Select;
