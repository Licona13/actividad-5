import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {

    private movies: Movie[] = [
        { id: 1, name: 'Shrek', genre: 'Animación', director: 'Andrew Adamson', releaseYear: 2001 },
        { id: 2, name: 'Titanic', genre: 'Drama', director: 'James Cameron', releaseYear: 1997 },
        { id: 3, name: 'Avengers', genre: 'Acción', director: 'Joss Whedon', releaseYear: 2012 },
    ];

    findAll(): Movie[] {
        return this.movies
    }
}
