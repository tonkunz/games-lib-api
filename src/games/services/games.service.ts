import { Injectable } from '@nestjs/common';
import { GamesRepository } from '../repositories/games-repository';
import { CreateGameBody } from '../dtos/create-game-body';

@Injectable()
export class GamesService {
  constructor(private gamesRepository: GamesRepository) {}

  async createGameRegister(gameBody: CreateGameBody): Promise<any> {
    const { name, platforms, description, gender } = gameBody;

    const newGame = await this.gamesRepository.create(
      name,
      platforms,
      description,
      gender,
    );

    return newGame;
  }
}
