import { ChangeEvent } from 'react';

type ValidateKeys = 'numbers';

export type IInput = {
  placeholder?: string;
  type?: string;
  closeSize?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>, ...rest: any) => any;
  value: string;
  size?: 's' | 'm' | 'l';
  style?: keyof IInputStyle;
  disabled?: boolean | undefined;
  validate?: ValidateKeys;
  className?: string;
};

export type IIconSize = {
  s: string;
  m: string;
  l: string;
};

export type IInputStyle = {
  white: string;
  gray: string;
};

export type IValidationInput = {
  value: string;
  type?: string;
};
export type IValidationIptions = {
  [keyof in ValidateKeys]: RegExp;
};

export type InputValidateType = {
  numbers: string | boolean;
};
