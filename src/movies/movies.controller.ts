import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {

    constructor(private moviesService: MoviesService) { }

    @Get()
    findAll(): Movie[] {
        return this.moviesService.findAll()
    }
}
