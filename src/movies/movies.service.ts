import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';
import { error } from 'console';


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

    createMovie(movie: CreateMovieDto): Movie {
        const newMovie: Movie = {
            ...movie,
            id: Date.now()
        }

        this.movies.push(newMovie)

        return newMovie;
    }

    updateMovie(id: number, movie: UpdateMovieDto): Movie {
        const movieIndex = this.movies.findIndex(
            (item) => item.id === id)

        if (movieIndex === -1) {
            throw new Error('Pelicula no encontrado')
        }

        const updatedMovie: Movie = {
            ...this.movies[movieIndex],
            ...movie,
            id: id,
        }

        this.movies[movieIndex] = updatedMovie;
        console.log(id, updatedMovie);

        return updatedMovie;

    }

    deleteMovie(id: number): Movie {
        const movieIndex = this.movies.findIndex(
            (item) => item.id === id
        )

        if (movieIndex === -1) {
            throw new Error('Pelicula no encontrada')
        }

        const deletedMovie = this.movies[movieIndex];
        this.movies.splice(movieIndex, 1);
        return deletedMovie;
    }
}
