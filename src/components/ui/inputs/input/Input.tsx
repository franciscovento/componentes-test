import { Input as AntdInput, InputProps, InputRef } from 'antd';
import clsx from 'clsx';
import { forwardRef } from 'react';

interface Props extends InputProps {
  label?: string;
  error?: string;
  assistiveText?: string;
  labelClassName?: string;
}

const Input = forwardRef<InputRef, Props>(
  (
    { label, error, assistiveText, labelClassName, required, ...inputProps },
    ref
  ) => {
    return (
      <label className={labelClassName}>
        {label && (
          <span
            className={clsx([
              'sui-text-sm sui-font-semibold',
              {
                'sui-text-app-error-400': error,
              },
            ])}
          >
            {label} {required && '*'}
          </span>
        )}
        <AntdInput ref={ref} required={required} {...inputProps} />
        <small
          className={clsx(
            'sui-relative sui-left-3 sui-inline-block sui-text-app-text-body sui-text-xs',
            {
              '!sui-text-app-error-400': error,
            }
          )}
        >
          {error ? error : assistiveText}
        </small>
      </label>
    );
  }
);

Input.displayName = 'Input';

export default Input;
