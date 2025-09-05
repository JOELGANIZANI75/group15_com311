import { Test, TestingModule } from '@nestjs/testing';
import { ErigibleController } from './erigible.controller';
import { ErigibleService } from './erigible.service';

describe('ErigibleController', () => {
  let controller: ErigibleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ErigibleController],
      providers: [
        {
          provide: ErigibleService,
          useValue: {
            // Mock methods of ErigibleService as needed
            someMethod: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ErigibleController>(ErigibleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
