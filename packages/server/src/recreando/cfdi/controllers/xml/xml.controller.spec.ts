import { Test, TestingModule } from '@nestjs/testing';
import { XmlController } from './xml.controller';

describe('XmlController', () => {
  let controller: XmlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [XmlController],
    }).compile();

    controller = module.get<XmlController>(XmlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
