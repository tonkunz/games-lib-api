import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateGameBody } from './dtos/create-game-body';
import { GamesRepository } from './repositories/games-repository';

@Controller()
export class GamesController {
    constructor(private gamesRepository: GamesRepository) {}

  @Get('games')
  getGames() {
    return 'teste';
  }

  @Post('game')
  async postGame(@Body() body: CreateGameBody) {
    const { name, platforms, description, gender } = body;

    const newGame = await this.gamesRepository.create(name, platforms, description, gender);

    return {
      newGame
    }
  }
}
