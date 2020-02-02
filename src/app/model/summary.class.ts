import { Movie } from './movie.class';
import { Credit } from './credit.class';

export class Summary {
    id: number;
    movie: Movie;
    credit: Credit;

    constructor(id: number = 0, movie: Movie = null, credit: Credit = null) {
        this.id = id;
        this.movie = movie;
        this.credit = credit;
    }
}
