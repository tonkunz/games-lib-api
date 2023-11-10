import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { PrismaService } from 'src/database/prisma.service';
import { GamesRepository } from './repositories/games-repository';
import { PrismaGamesRepository } from './repositories/prisma-games-repository';

@Module({
  imports: [],
  controllers: [GamesController],
  providers: [
    PrismaService,
    {
        provide: GamesRepository,
        useClass: PrismaGamesRepository,
    }
  ],
})
export class GamesModule {}
