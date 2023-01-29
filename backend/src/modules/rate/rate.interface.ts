import { ApiProperty } from '@nestjs/swagger';

export class RateResult {
  @ApiProperty({ type: String, required: false })
  one?: number;
  @ApiProperty({ type: String, required: false })
  thousand?: number;
  @ApiProperty({ type: String, required: false })
  million?: number;
  @ApiProperty({ type: String, required: false })
  billion?: number;
}
