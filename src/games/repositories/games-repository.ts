export abstract class GamesRepository {
    abstract create(name: string, platforms: string, description: string, gender: string): Promise<any>;
}