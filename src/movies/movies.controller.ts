import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dtos/create-movie.dto';

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

    @Post()
    createMovie(@Body() newMovie: CreateMovieDto) {
        return this.moviesService.createMovie(newMovie)
    }
}
