import { Test, TestingModule } from '@nestjs/testing';
import { AutoPlateService } from './auto-plate.service';

describe('AutoPlateService', () => {
  let service: AutoPlateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutoPlateService],
    }).compile();

    service = module.get<AutoPlateService>(AutoPlateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
