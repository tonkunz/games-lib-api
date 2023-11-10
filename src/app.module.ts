import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { GamesModule } from './games/games.module';

@Module({
  imports: [GamesModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
