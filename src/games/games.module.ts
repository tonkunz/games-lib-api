import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { PrismaService } from 'src/database/prisma.service';
import { GamesRepository } from './repositories/games-repository';
import { PrismaGamesRepository } from './repositories/prisma-games-repository';
import { GamesService } from './services/games.service';

@Module({
  imports: [],
  controllers: [GamesController],
  providers: [
    PrismaService,
    GamesService,
    {
      provide: GamesRepository,
      useClass: PrismaGamesRepository,
    },
  ],
})
export class GamesModule {}
