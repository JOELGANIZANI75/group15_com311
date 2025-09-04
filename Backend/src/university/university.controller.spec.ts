import { Test, TestingModule } from '@nestjs/testing';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';

describe('UniversityController', () => {
  let controller: UniversityController;
  let service: UniversityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniversityController],
      providers: [
        {
          provide: UniversityService,
          useValue: {
            // Mock methods of UniversityService here
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UniversityController>(UniversityController);
    service = module.get<UniversityService>(UniversityService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
