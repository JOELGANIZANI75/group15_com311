import { Test, TestingModule } from '@nestjs/testing';
import { BondingController } from './bonding.controller';
import { BondingService } from './bonding.service';
import { UniversityService } from '../university/university.service';

describe('BondingController', () => {
  let controller: BondingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BondingController],
      providers: [
        {
          provide: BondingService,
          useValue: {
            // Mock methods of BondingService as needed
            createBond: jest.fn(),
          },
        },
        {
          provide: UniversityService,
          useValue: {
            // Mock methods of UniversityService as needed
            getUniversity: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<BondingController>(BondingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
