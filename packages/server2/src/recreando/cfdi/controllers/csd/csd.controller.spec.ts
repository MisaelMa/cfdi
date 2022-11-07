import { Test, TestingModule } from '@nestjs/testing';
import { CsdController } from './csd.controller';

describe('CsdController', () => {
  let controller: CsdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CsdController],
    }).compile();

    controller = module.get<CsdController>(CsdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
