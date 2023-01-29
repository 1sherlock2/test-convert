import { IValidationInput, IValidationIptions } from './Input.interface';

const validateOptions: IValidationIptions = {
  numbers: /^[\D.]+/gm
};

export const numberValidation = ({
  type,
  value
}: IValidationInput): string | boolean => {
  const { numbers } = validateOptions;
  const search = type === 'text' && numbers.test(value);
  return search && 'Необходимо ввести численное значение';
};
