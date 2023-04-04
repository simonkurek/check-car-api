import { Injectable } from '@nestjs/common';
import { InfrastructureService } from 'src/infrastructure/infrastructure.service';

@Injectable()
export class AutoPlateService {
  constructor(private readonly infrastructureService: InfrastructureService) {}

  async checkPlate(plate: string) {
    // plateToVin
    const vin = await this.infrastructureService.plateToVin(plate);
    // vinToDataLink
    return { plate, vin };
  }
}
