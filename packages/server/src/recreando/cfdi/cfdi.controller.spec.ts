import { Test, TestingModule } from '@nestjs/testing';
import { CfdiController } from './cfdi.controller';

describe('CfdiController', () => {
  let controller: CfdiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CfdiController],
    }).compile();

    controller = module.get<CfdiController>(CfdiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
