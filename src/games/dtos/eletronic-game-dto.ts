import { IsNotEmpty, Length } from 'class-validator';

export class EletronicGameDTO {
  @IsNotEmpty({
    message: 'O campo nome não pode ser vazio',
  })
  name: string;

  @IsNotEmpty({
    message: 'A descrição não pode ser vazia',
  })
  @Length(10, 300, {
    message: 'A descrição deve ter no mínimo 10 caracteres e no máximo 300',
  })
  description: string;

  gender: string;

  platforms: string;
}
