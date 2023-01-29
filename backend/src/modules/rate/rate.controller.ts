import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RateDTO } from './dto/rate.dto';
import { RateResult } from './rate.interface';
import { RateService } from './rate.service';

@Controller('rate')
@ApiTags('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.OK, type: RateResult })
  @ApiOperation({
    summary: 'Конвертировать значение'
  })
  rateModify(@Body() rateDTO: RateDTO) {
    return this.rateService.rateConfigure(rateDTO);
  }
}
