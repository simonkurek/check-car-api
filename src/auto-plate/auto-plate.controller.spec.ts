import { Test, TestingModule } from '@nestjs/testing';
import { AutoPlateController } from './auto-plate.controller';

describe('AutoPlateController', () => {
  let controller: AutoPlateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutoPlateController],
    }).compile();

    controller = module.get<AutoPlateController>(AutoPlateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
