import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';
import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/update-cat.dto';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) { }

    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    @Get(':id')
    getCat(@Param('id') id: string): Cat {
        return this.catsService.getCat(parseInt(id));
    }

    //crear elemento cat 
    @Post()
    createCat(@Body() newCat: CreateCatDto) {
        return this.catsService.createCat(newCat)
    }

    //Actualizar elemento cat por id
    @Patch(':id')
    updateCat(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): Cat {
        return this.catsService.updateCat(parseInt(id), updateCatDto);
    }
}
