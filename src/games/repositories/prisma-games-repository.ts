import { PrismaService } from 'src/database/prisma.service';
import { GamesRepository } from './games-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaGamesRepository implements GamesRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    name: string,
    platforms: string,
    description: string,
    genre: string,
  ) {
    const newGame = await this.prisma.eletronicGame.create({
      data: {
        id: randomUUID(),
        description,
        genre,
        name,
        platforms,
      },
    });

    return newGame;
  }

  async edit(
    id: string,
    name: string,
    platforms: string,
    description: string,
    genre: string,
  ) {
    const updatedData = await this.prisma.eletronicGame.update({
      where: { id },
      data: {
        name,
        platforms,
        description,
        genre,
      },
    });

    return updatedData;
  }

  async list(nameFilter: string = '') {
    const gamesList = await this.prisma.eletronicGame.findMany({
      where: {
        name: { contains: nameFilter },
      },
    });

    return gamesList;
  }

  async findById(id: string) {
    const gameFinded = await this.prisma.eletronicGame.findUnique({
      where: { id },
    });

    return gameFinded;
  }

  async delete(id: string) {
    await this.prisma.eletronicGame.delete({
      where: { id },
    });
  }
}
