import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
//import { mailerService } from '../mailer/mailer.service'; // Correct import for MailerService
import { EmailService } from '../mailer/mailer.service';// Import EmailService if it's a separate class

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: 'UserRepository', // Mock UserRepository
          useValue: {
            save: jest.fn(),
            findOne: jest.fn(),
          },
        },
        {
          provide: EmailService, // Mock EmailService, which is a dependency for UsersService
          useValue: {
            sendEmail: jest.fn(), // Mock methods of EmailService
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
