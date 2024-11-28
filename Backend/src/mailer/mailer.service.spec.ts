import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from './mailer.service';
import { MailerService } from '@nestjs-modules/mailer'; // Make sure this is the correct import

describe('MailerService', () => {
  let service: EmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailService,
        {
          provide: MailerService,  // Correct the provider name to match MailerService
          useValue: {
            sendMail: jest.fn(),  // Mock the `sendMail` method of MailerService
          },
        },
      ],
    }).compile();

    service = module.get<EmailService>(EmailService);  // Getting the EmailService instance
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
