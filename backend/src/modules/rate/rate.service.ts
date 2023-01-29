import {
  BadRequestException,
  Injectable,
  InternalServerErrorException
} from '@nestjs/common';
import { RateResult } from './rate.interface';

const isNumber = (num: number) => {
  return typeof num === 'number' && !isNaN(num);
};
@Injectable()
export class RateService {
  rateConfigure({ volume, volumeIdentify }) {
    if (!isNumber(volume)) {
      throw new BadRequestException(
        'Значение для вычислений не является числом'
      );
    }
    try {
      const formuls = {
        one: (value) => ({
          thousand: (value * 3600) / 1e3,
          million: (value * 86400) / 1e6,
          billion: (value * 3.154e7) / 1e9
        }),
        thousand: (value) => ({
          one: (value * 1e3) / 3600,
          million: (value * 24) / 1e3,
          billion: (value * 8760) / 1e6
        }),
        million: (value) => ({
          one: (value * 1e6) / 86400,
          thousand: (value * 1e3) / 24,
          billion: (value * 365) / 1e3
        }),
        billion: (value) => ({
          one: (value * 1e9) / 3.154e7,
          thousand: (value * 1e6) / 8670,
          million: (value * 1e3) / 365
        })
      };
      const result: RateResult = formuls[volumeIdentify](volume);
      Object.keys(result).forEach(
        (item) => (result[item] = result[item].toFixed(1))
      );
      return result;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
