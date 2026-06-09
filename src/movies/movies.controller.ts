import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';

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

    @Patch(':id')
    updateMovie(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto): Movie {
        return this.moviesService.updateMovie(parseInt(id), updateMovieDto)
    }

    @Delete(':id')
    deleteMovie(@Param('id') id: string): Movie {
        return this.moviesService.deleteMovie(
            Number(id)
        )
    }

}
