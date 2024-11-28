'use client';
import { SvgArrowLeft, SvgArrowRight } from '@/components/svg';
import {
  getDateFromString,
  getStringFromDate,
  isValidDateString,
} from '@/utils/dates';
import { isArray } from '@/utils/validations';
import es from 'date-fns/locale/es';
import { FC, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '../../buttons';
import { Divider } from '../../divider';
import { Switch } from '../switch';
import { Props } from './DatePicker.types';

registerLocale('es', es);

export const DatePicker: FC<Props> = ({ onApply, startDate, endDate }) => {
  const [start, setStart] = useState<Date | undefined>(startDate);
  const [end, setEnd] = useState<Date | undefined>(endDate);
  const [isRange, setIsRange] = useState(false);
  const [startInput, setStartInput] = useState('');
  const [endInput, setEndInput] = useState('');
  const disabled = isRange ? !start || !end : !start;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (dates: any) => {
    if (isArray<Date>(dates)) {
      const [start, end] = dates;
      setStart(start);
      setEnd(end);
      setStartInput(getStringFromDate(start));
      setEndInput(getStringFromDate(end));
      return;
    }
    setStartInput(getStringFromDate(dates));
    setStart(dates);
  };

  const setIsRangeValue = (val: boolean) => {
    if (!val) {
      setEnd(undefined);
      setEndInput('');
    }
    setIsRange(val);
  };

  const clearDates = () => {
    setStartInput('');
    setEndInput('');
    setStart(undefined);
    setEnd(undefined);
  };

  const handleInputChange = (stringDate: string, type: 'start' | 'end') => {
    if (!stringDate) return undefined;
    if (type === 'start') {
      setStartInput(stringDate);
      return isValidDateString(stringDate)
        ? setStart(getDateFromString(stringDate))
        : null;
    }

    if (type === 'end') {
      setEndInput(stringDate);
      return isValidDateString(stringDate)
        ? setEnd(getDateFromString(stringDate))
        : null;
    }
  };

  const apply = () => {
    if (!onApply) return null;
    onApply({ start: start, end: end, isRange });
  };

  return (
    <div className="sui-border sui-border-app-border-primary sui-rounded-2xl sui-p-6 sui-w-fit sui-shadow-app-elevation sui-flex sui-flex-col sui-gap-4">
      <div className="sui-border sui-border-app-border-primary sui-font-bold sui-flex sui-justify-center sui-items-center sui-gap-2  sui-rounded-lg sui-p-2 sui-bg-app-modern-gray-50 ">
        Seleccionar rango de fechas{' '}
        <Switch onChange={setIsRangeValue} size="default" />{' '}
      </div>

      <ReactDatePicker
        locale="es"
        renderCustomHeader={({
          prevMonthButtonDisabled,
          decreaseMonth,
          monthDate,
          nextMonthButtonDisabled,
          increaseMonth,
        }) => (
          <>
            <div className="sui-flex sui-justify-between sui-items-center sui-px-[10px]">
              <button
                disabled={prevMonthButtonDisabled}
                onClick={decreaseMonth}
              >
                <SvgArrowLeft />
              </button>
              <span className="sui-capitalize sui-text-base sui-font-bold sui-text-app-text-body-alternate">
                {monthDate.toLocaleString('es-ES', {
                  month: 'long',
                })}{' '}
                {monthDate.toLocaleString('es-ES', {
                  year: 'numeric',
                })}
              </span>
              <button
                disabled={nextMonthButtonDisabled}
                onClick={increaseMonth}
              >
                <SvgArrowRight />
              </button>
            </div>
            <div className="sui-pt-4 sui-pb-2 sui-flex sui-items-center sui-gap-2 sui-justify-center sui-text-xs">
              <input
                value={startInput}
                type="date"
                className="custom-react-date-picker__input sui-text-center sui-text-sm xs:sui-text-base sui-py-2 sui-px-[10px] sui-w-full sui-border sui-border-app-border-primary sui-rounded-lg"
                onChange={(e) => handleInputChange(e.target.value, 'start')}
              />

              {isRange && (
                <>
                  <div>-</div>

                  <input
                    value={endInput}
                    type="date"
                    className="custom-react-date-picker__input sui-text-center sui-text-sm xs:sui-text-base sui-py-2 sui-px-[10px] sui-w-full sui-border sui-border-app-border-primary sui-rounded-lg"
                    onChange={(e) => handleInputChange(e.target.value, 'end')}
                  />
                </>
              )}
            </div>
          </>
        )}
        calendarClassName={'react-date-picker-custom'}
        selected={start}
        onChange={onChange}
        startDate={start}
        endDate={end}
        inline
        selectsRange={isRange as true}
        calendarStartDay={1}
      />
      <Divider />
      <div className="sui-flex sui-items-center sui-justify-between sui-gap-4 ">
        <Button onClick={clearDates} className="sui-w-full !sui-text-sm ">
          Cancelar
        </Button>
        <Button
          className="sui-w-full !sui-text-sm "
          disabled={disabled}
          onClick={apply}
        >
          Aplicar
        </Button>
      </div>
    </div>
  );
};

export default DatePicker;
