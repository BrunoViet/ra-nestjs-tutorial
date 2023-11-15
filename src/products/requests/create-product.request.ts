import { IsNotEmpty, IsNumber, IsOptional, IsPositive, Length, MaxLength, MinLength } from "class-validator";

export class CreateProductRequest {

    @IsNotEmpty()
    @Length(4, 255)
    name: string;

    @IsNotEmpty()
    @Length(4, 10)
    sku: string;

    @IsNotEmpty()
    @Length(4, 45)
    category: string;

    @IsOptional()
    @MaxLength(255)
    description?: string;

    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    unitPrice: number;

    @IsOptional()
    @MaxLength(255)
    image?: string;
}