import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GamesService } from '../services/games.service';
import { EletronicGameDTO } from '../dtos/eletronic-game-dto';

@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Post()
  async postGame(@Body() body: EletronicGameDTO) {
    const newGame = await this.gamesService.createGameRegister(body);

    return {
      newGame,
      message: 'Jogo cadastrado com sucesso',
    };
  }

  @Put(':id')
  async editGame(@Param('id') id: string, @Body() body: EletronicGameDTO) {
    const gameUpdated = await this.gamesService.editGame(id, body);

    return gameUpdated;
  }

  @Get()
  async getGames() {
    const gamesList = await this.gamesService.listGames();

    return {
      gamesList,
    };
  }

  @Get(':id')
  async getGameById(@Param('id') id: string) {
    const gameFinded = await this.gamesService.findGameById(id);

    return gameFinded;
  }

  @Delete(':id')
  async deleteGame(@Param('id') id: string) {
    return await this.gamesService.deleteGame(id);
  }
}
