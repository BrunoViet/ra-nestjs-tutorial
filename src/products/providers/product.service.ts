import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "../entities/product.entity";
import { ILike, Repository } from "typeorm";
import { SearchProductRequest } from "../requests/search-product.request";
import { ProductResponse } from "../responses/product.response";

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) { }

    async search(searchRequest: SearchProductRequest): Promise<[ProductResponse[], number]> {
        const [products, count] = await this.productRepository.findAndCount({
            where:
                [
                    { name: ILike(`%${searchRequest.keyword || ''}%`) },
                    { sku: ILike(`%${searchRequest.keyword || ''}%`) },
                    { description: ILike(`%${searchRequest.keyword || ''}%`) },
                ],
            order: { id: 'DESC' }, // ORDER BY
            take: searchRequest.limit, // Tương đương LIMIT
            skip: searchRequest.getOffset(), // Tương đương OFFSET
        })

        return [
            products.map((product) => new ProductResponse(product)),
            count,
        ]
    }

    async searchA(searchRequest: SearchProductRequest): Promise<[ProductResponse[], number]> {
        const keyword = `%${searchRequest.keyword || ''}%`;
        const [products, count] = await this.productRepository.createQueryBuilder('product')
            .where('product.name LIKE :keyword', { keyword })
            .orWhere('product.sku LIKE :keyword', { keyword })
            // .orderBy('product.id', 'DESC') // Sắp xếp theo id giảm dần
            .take(searchRequest.limit) // Giới hạn số lượng bản ghi trả về
            .skip(searchRequest.getOffset()) // Bỏ qua một số bản ghi
            .getManyAndCount(); // Lấy sản phẩm và tổng số lượng bản ghi phù hợp

        return [products, count];
    }

    // async create(product: object): Promise<void> {
    //     return await 
    // }

    // async update(product: object): Promise<Product> {
    //     return await
    // }

    // async delete(id: number): Promise<void> { }


}