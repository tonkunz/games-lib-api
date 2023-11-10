import { Injectable } from '@nestjs/common';
import { GamesRepository } from '../repositories/games-repository';
import { EletronicGameDTO } from '../dtos/eletronic-game-dto';

@Injectable()
export class GamesService {
  constructor(private gamesRepository: GamesRepository) {}

  async createGameRegister(
    gameBody: EletronicGameDTO,
  ): Promise<EletronicGameDTO> {
    const { name, platforms, description, gender } = gameBody;

    const newGame = await this.gamesRepository.create(
      name,
      platforms,
      description,
      gender,
    );

    return newGame;
  }

  async editGame(
    id: string,
    gameBody: EletronicGameDTO,
  ): Promise<EletronicGameDTO> {
    const { name, platforms, description, gender } = gameBody;

    const gameUpdated = await this.gamesRepository.edit(
      id,
      name,
      platforms,
      description,
      gender,
    );

    return gameUpdated;
  }

  async listGames(): Promise<EletronicGameDTO[]> {
    const listGames = await this.gamesRepository.list();

    return listGames;
  }

  async findGameById(id: string): Promise<EletronicGameDTO> {
    const gameFinded = await this.gamesRepository.findById(id);

    return gameFinded;
  }

  async deleteGame(id: string): Promise<any> {
    return await this.gamesRepository.delete(id);
  }
}
