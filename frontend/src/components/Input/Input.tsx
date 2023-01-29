import classNames from 'classnames';
import { useEffect, useState } from 'react';
import CloseIcon from '../Icons/CloseIcon';
import {
  IIconSize,
  IInput,
  IInputStyle,
  InputValidateType
} from './Input.interface';
import s from './Input.module.scss';
import { numberValidation } from './validate';

const Input: React.FC<IInput> = ({
  type = 'text',
  placeholder,
  onChange,
  value,
  size = 'm',
  style = 'white',
  closeSize,
  disabled,
  validate,
  className
}) => {
  const [localValue, setLocalValue] = useState('');
  const [errorData, setErrorData] = useState<InputValidateType | boolean>(
    false
  );
  useEffect(() => {
    const validationData = { type, value };
    const errorInput = {
      numbers: numberValidation(validationData)
    };

    setErrorData(errorInput);
  }, [value]);

  const closeHandler = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    onChange && onChange(event, '', '');
  };
  const IconSize: IIconSize = {
    s: '28px',
    m: '32px',
    l: '36px'
  };

  const iconsSize = {
    color: '#333',
    size: IconSize[size]
  };

  const inputStyle: IInputStyle = {
    white: s.white,
    gray: s.gray
  };

  const inputClass = classNames(
    type !== 'submit' ? s.container_wrapper_input : s.submitClass,
    s[size],
    inputStyle[style],
    { [s.disabled]: disabled }
  );
  return (
    <div className={classNames(className, s.container)}>
      <div className={s.container_wrapper}>
        <input
          type={type}
          value={value}
          className={inputClass}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
        />
        {value && !disabled && (
          <button
            aria-label="clear textfield"
            className={classNames(s.icon)}
            onClick={closeHandler}
            disabled={disabled}
          >
            <CloseIcon {...iconsSize} />
          </button>
        )}
      </div>
      {errorData &&
        typeof errorData !== 'boolean' &&
        value &&
        validate &&
        !disabled && <div className={s.error}> {errorData[validate]} </div>}
    </div>
  );
};

export default Input;
