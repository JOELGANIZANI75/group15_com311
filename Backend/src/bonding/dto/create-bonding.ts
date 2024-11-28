import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsNumber,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class CreateBonding {
  
  @IsString()
  @IsNotEmpty({ message: 'First name is required' })
  FirstName!: string;

  @IsString()
  @IsNotEmpty({ message: 'Surname is required' })
  SurName!: string;

  @IsString()
  @IsNotEmpty({ message: 'Date of birth is required' })
  DateOfBirth!: string;

  @IsEnum(['Male', 'Female'], { message: 'Sex must be either Male or Female' })
  @IsNotEmpty({ message: 'Sex is required' })
  Sex!: string;

  @IsInt()
  @IsNotEmpty({ message: 'Phone number is required' })
  PhoneNumber!: number;

  @IsString()
  @IsNotEmpty({ message: 'Home village is required' })
  HomeVillage!: string;

  @IsString()
  @IsNotEmpty({ message: 'T/A is required' })
  TA!: string;

  @IsString()
  @IsNotEmpty({ message: 'District is required' })
  District!: string;

  @IsString()
  @IsNotEmpty({ message: 'postal is required' })
  PostalAddress!: string;

  @IsString()
  @IsNotEmpty({ message: 'National ID Number is required' })
  NationalIdNo!: string;

  
  @IsString()
  @IsOptional()
  GuardianFullName?: string;

  @IsString()
  @IsOptional()
  GuardianPostalAddress?: string;

  @IsString()
  @IsOptional()
  GuardianPhysicalAddress?: string;

  @IsString()
  @IsOptional()
  GuardianHomeVillage?: string;

  @IsString()
  @IsOptional()
  GuardianDistrict?: string;

  @IsString()
  @IsOptional()
  GuardianOccupation?: string;

  @IsInt()
  @IsOptional()
  GuardianPhoneNumber?: number;

  
  @IsString()
  @IsOptional()
  BankName?: string;

  @IsString()
  @IsOptional()
  Branch?: string;

  @IsString()
  @IsOptional()
  AccountName?: string;

  @IsInt()
  @IsOptional()
  AccountNumber?: number;


  @IsString()
  @IsOptional()
  studentId?: string; 

  @IsString()
  @IsOptional()
  nationalId?: string; 

 

  @IsOptional()
  Tuition?: number;

  @IsOptional()
  UpkeepAmount?: number;

  @IsNumber()
  @IsOptional()
  universityId?: number;
}
