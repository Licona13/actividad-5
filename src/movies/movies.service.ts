import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { Cat } from 'src/cats/entities/cat.entity';

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

    getMovie(id: number): Movie {
        const movie = this.movies.find((item) => item.id === id);
        if (!movie) {
            throw new Error('Película no encontrada');
        }
        return movie;
    }
}
