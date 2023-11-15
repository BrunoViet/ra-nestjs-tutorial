import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { SearchProductRequest } from "../requests/search-product.request";
import { ProductService } from "../providers/product.service";

@Controller("products")
export class ProductController {

    constructor(private productService: ProductService) {

    }
    @Get()
    async search(@Query() searchRequest: SearchProductRequest) {
        return await this.productService.search(searchRequest)
    }

    // @Post()
    // create(@Body()) {

    // }

    // @Put("/:id")
    // update(@Param("id", ParseIntPipe) id: number, @Body() ) {

    // }

    // @Delete("/:id")
    // delete(@Param("id", ParseIntPipe) id: number) {

    // }
}