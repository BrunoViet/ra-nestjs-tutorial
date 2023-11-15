import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductService } from './providers/product.service';
import { ProductController } from './controllers/product.controller';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            Product
        ])
    ],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule { }
