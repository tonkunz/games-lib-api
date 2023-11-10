import { PrismaService } from "src/database/prisma.service";
import { GamesRepository } from "./games-repository";
import { randomUUID } from "node:crypto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaGamesRepository implements GamesRepository {
    constructor(private prisma: PrismaService) {}

    async create(name: string, platforms: string, description: string, gender: string) {
      const newGame = await this.prisma.eletronicGame.create({
            data: {
              id: randomUUID(),
              description,
              gender,
              name,
              platforms,
            }
          });

      return newGame;
    }
}