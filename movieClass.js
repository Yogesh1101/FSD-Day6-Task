// Class - Movie
class movie {
    constructor(t, s, r = 'PG'){
        this.title = t;
        this.studio = s;
        this.rating = r;
    }
    static getPG(movieArray) {
        let pgMovies = [];
        for (let i = 0; i < movieArray.length; i++) {
          if (movieArray[i].rating === "PG") {
            pgMovies.push(movieArray[i]);
          }
        }
        return pgMovies;
      }
}
var movies = [
    new movie('LEO', 'Seven Screen Studio', 'PG-9.5'),
    new movie('Master', 'Seven Screen Studio', 'PG'),
    new movie('Thuppakki', 'V Creations', 'VG'),
    new movie('Mersal', 'Thenandal Studio', 'PG-8')
];
console.log(movies);
console.log(movie.getPG(movies));