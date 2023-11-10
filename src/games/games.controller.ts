import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateGameBody } from './dtos/create-game-body';
import { GamesService } from './services/games.service';

@Controller()
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Get('games')
  getGames() {
    return 'teste';
  }

  @Post('game')
  async postGame(@Body() body: CreateGameBody) {
    const newGame = await this.gamesService.createGameRegister(body);

    return {
      newGame,
      message: 'Jogo cadastrado com sucesso',
    };
  }
}
