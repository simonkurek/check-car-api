import { Controller, Get, Param } from '@nestjs/common';
import { AutoPlateService } from './auto-plate.service';

@Controller('auto-plate')
export class AutoPlateController {
  constructor(private readonly autoPlateService: AutoPlateService) {}

  @Get('/check-plate/:plate')
  async checkPlate(@Param('plate') plate: string) {
    return await this.autoPlateService.checkPlate(plate);
  }
}
