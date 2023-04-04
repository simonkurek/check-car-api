import { Module } from '@nestjs/common';
import { AutoPlateController } from './auto-plate.controller';
import { AutoPlateService } from './auto-plate.service';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
  controllers: [AutoPlateController],
  imports: [InfrastructureModule],
  providers: [AutoPlateService],
})
export class AutoPlateModule {}
