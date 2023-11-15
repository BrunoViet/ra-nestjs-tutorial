import { IsNotEmpty, IsNumber, IsOptional, IsPositive, Length, MaxLength } from "class-validator";

export class UpdateProductRequest {

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