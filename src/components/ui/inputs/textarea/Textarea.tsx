import { Input } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import clsx from 'clsx';
import { FC } from 'react';

interface Props extends TextAreaProps {
  label?: string;
  error?: string;
  assistiveText?: string;
  labelClassName?: string;
  required?: boolean;
}

const { TextArea } = Input;
const Textarea: FC<Props> = ({
  label,
  required,
  error,
  assistiveText,
  labelClassName,
  rows = 4,
  ...textareaProps
}) => {
  return (
    <div className={clsx(['sui-flex sui-flex-col sui-gap-1', labelClassName])}>
      {label && (
        <span className={clsx(['sui-text-sm sui-font-semibold'])}>
          {label} {required && '*'}
        </span>
      )}
      <TextArea rows={rows} {...textareaProps} />
      <small
        className={clsx(
          'sui-relative sui-left-3 sui-text-app-text-body sui-text-xs sui-block sui-pr-16 ',
          {
            '!sui-text-app-error-400': error,
          }
        )}
      >
        {error ? error : assistiveText}
      </small>
    </div>
  );
};

export default Textarea;
