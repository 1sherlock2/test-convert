import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RateDTO {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    required: true,
    description:
      'Одно из значений для, на основе которого происходит конвертация'
  })
  volume: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description:
      'Идентификатор, по которому будет производиться расчет остальных показателей расхода'
  })
  volumeIdentify: string | boolean;
}
