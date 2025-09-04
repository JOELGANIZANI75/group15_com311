import { Test, TestingModule } from '@nestjs/testing';
import { ErigibleService } from './erigible.service';

describe('ErigibleService', () => {
  let service: ErigibleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ErigibleService,
        {
          provide: 'EligibleRepository',  // Provide the repository (mock or real)
          useValue: {
            // Mock methods for EligibleRepository if needed
            findOne: jest.fn(),  // Example mock for the `findOne` method
            save: jest.fn(),     // Example mock for the `save` method
          },
        },
      ],
    }).compile();

    service = module.get<ErigibleService>(ErigibleService);  // Getting the ErigibleService instance
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
