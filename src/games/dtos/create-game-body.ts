import { IsNotEmpty, Length } from "class-validator";

export class CreateGameBody {
    @IsNotEmpty()
    @Length(10, 200)
    description: string;

    gender: string;

    @IsNotEmpty({
        message: "O campo nome não pode ser vazio"
    })
    name: string;

    platforms: string;
}
