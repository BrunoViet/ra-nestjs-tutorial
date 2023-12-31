import { Transform } from "class-transformer";
import { IsInt, IsOptional, IsPositive, IsString, Max } from "class-validator";

export class SearchProductRequest {
    @IsOptional()
    @IsInt()
    @IsPositive()
    @Transform(({ value }) => parseInt(value))
    page?: number = 1;

    @IsOptional()
    @IsInt()
    @IsPositive()
    @Max(1000)
    @Transform(({ value }) => parseInt(value))
    limit?: number = 10;

    @IsOptional()
    @IsString()
    keyword?: string;

    public getOffset(): number {
        return (this.page - 1) * this.limit;
    }
}
