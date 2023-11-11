import { EletronicGame } from '@prisma/client';

export abstract class GamesRepository {
  abstract create(
    name: string,
    platforms: string,
    description: string,
    genre: string,
  ): Promise<EletronicGame>;

  abstract edit(
    id: string,
    name: string,
    platforms: string,
    description: string,
    genre: string,
  ): Promise<EletronicGame>;

  abstract list(): Promise<EletronicGame[]>;

  abstract findById(id: string): Promise<EletronicGame | null>;

  abstract delete(id: string): Promise<void>;
}
