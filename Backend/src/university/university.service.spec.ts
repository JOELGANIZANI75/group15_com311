import { Test, TestingModule } from '@nestjs/testing';
import { UniversityService } from './university.service';

describe('UniversityService', () => {
  let service: UniversityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UniversityService,
        {
          provide: 'UniversityRepository', // Mock for the UniversityRepository
          useValue: {
            // Add mock methods for UniversityRepository as needed
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UniversityService>(UniversityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
