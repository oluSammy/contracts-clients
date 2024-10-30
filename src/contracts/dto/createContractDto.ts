import { IsNumber } from 'class-validator';

export class CreateContractDto {
  @IsNumber()
  clientId: number;

  @IsNumber()
  contractorId: number;
}
