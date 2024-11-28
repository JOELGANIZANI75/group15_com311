import { Test, TestingModule } from '@nestjs/testing';
import { BondingService } from './bonding.service';
import { EmailService } from '../mailer/mailer.service'; // Correct import if EmailService is a class


describe('BondingService', () => {
  let service: BondingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BondingService,
        { provide: 'BondingRepository', useValue: {} },
        { provide: 'UserRepository', useValue: {} },
        { provide: 'UniversityRepository', useValue: {} },
        {
          provide: EmailService, // Use the class here instead of a string
          useValue: {
            sendEmail: jest.fn(), // Mock the methods of EmailService
          },
        },
      ],
    }).compile();

    service = module.get<BondingService>(BondingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
