import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {

    constructor(private moviesService: MoviesService) { }

    @Get()
    findAll(): Movie[] {
        return this.moviesService.findAll()
    }

    @Get(':id')
    getMovie(@Param('id') id: string): Movie {
        return this.moviesService.getMovie(parseInt(id));
    }
}
