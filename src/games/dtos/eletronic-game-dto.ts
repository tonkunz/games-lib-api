import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class EletronicGameDTO {
  @ApiProperty({
    example: 'God of War',
    required: true,
  })
  @IsNotEmpty({
    message: 'O campo nome não pode ser vazio',
  })
  name: string;

  @ApiProperty({
    example:
      'After wiping out the gods of Mount Olympus, Kratos moves on to the frigid lands of Scandinavia, where he and his son must embark on an odyssey across a dangerous world of gods and monsters.',
    required: true,
  })
  @IsNotEmpty({
    message: 'A descrição não pode ser vazia',
  })
  @Length(10, 300, {
    message: 'A descrição deve ter no mínimo 10 caracteres e no máximo 300',
  })
  description: string;

  @ApiProperty({
    example: 'AÇÃO, Aventura',
    required: false,
  })
  gender: string;

  @ApiProperty({
    example: 'Playstation 2',
    required: false,
  })
  platforms: string;
}
