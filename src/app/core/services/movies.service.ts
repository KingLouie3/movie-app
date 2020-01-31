import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { element } from 'protractor';

@Injectable({
  providedIn: "root"
})
export class MovieService {
  baseUrl: string = "https://api.themoviedb.org/3/search/movie?api_key=fa6d14f9e93a82672442211716f689ca&language=en-US&query="
  apiKey:  string = "fa6d14f9e93a82672442211716f689ca"
  lastUrl: string =  '&page=1&include_adult=false'
  query: string = ""
  apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=fa6d14f9e93a82672442211716f689ca&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1;'
  movies;
  selectedMovie;

  movieData = [
    {
      title: "Star Wars: The Rise Of Skywalker",
      slug: "star-wars-the-rise-of-skywalker",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/812WFDtTEoL._SY679_.jpg",
      releaseDate: "12/15/2019",
      synopsis: `Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic
      space-opera film produced, co-written, and directed by J. J. Abrams. It is the third installment of the Star Wars sequel
      trilogy, following The Force Awakens (2015) and The Last Jedi (2017), and the final episode of the nine-part "Skywalker
      saga".[a] It was produced by Lucasfilm and Abrams's production company Bad Robot Productions, and was distributed by
      Walt Disney Studios Motion Pictures. The ensemble cast includes Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley,
      John Boyega, Oscar Isaac, Anthony Daniels, Kelly Marie Tran, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita
      Nyong'o, Keri Russell, Joonas Suotamo, Ian McDiarmid, and Billy Dee Williams. It features the second posthumous film
      performance by Fisher, who died in 2016 and appears through the use of unused footage from The Force Awakens.[2]`,
      chairs: [
        'available',
        'reserved',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',        
      ]
    },
    {
      title: "Jumanji",
      slug: "jumanji",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71c-LwEuU0L._SY679_.jpg",
      synopsis: `Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic
      space-opera film produced, co-written, and directed by J. J. Abrams. It is the third installment of the Star Wars sequel
      trilogy, following The Force Awakens (2015) and The Last Jedi (2017), and the final episode of the nine-part "Skywalker
      saga".[a] It was produced by Lucasfilm and Abrams's production company Bad Robot Productions, and was distributed by
      Walt Disney Studios Motion Pictures. The ensemble cast includes Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley,
      John Boyega, Oscar Isaac, Anthony Daniels, Kelly Marie Tran, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita
      Nyong'o, Keri Russell, Joonas Suotamo, Ian McDiarmid, and Billy Dee Williams. It features the second posthumous film
      performance by Fisher, who died in 2016 and appears through the use of unused footage from The Force Awakens.[2]`
    },
    {
      title: "Spies In Disguise",
      slug: "Spies-in-disguise",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNzg1MzM3OWUtNjgzZC00NjMzLWE1NzAtOThiMDgyMjhhZDBhXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
      synopsis: `Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic
      space-opera film produced, co-written, and directed by J. J. Abrams. It is the third installment of the Star Wars sequel
      trilogy, following The Force Awakens (2015) and The Last Jedi (2017), and the final episode of the nine-part "Skywalker
      saga".[a] It was produced by Lucasfilm and Abrams's production company Bad Robot Productions, and was distributed by
      Walt Disney Studios Motion Pictures. The ensemble cast includes Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley,
      John Boyega, Oscar Isaac, Anthony Daniels, Kelly Marie Tran, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita
      Nyong'o, Keri Russell, Joonas Suotamo, Ian McDiarmid, and Billy Dee Williams. It features the second posthumous film
      performance by Fisher, who died in 2016 and appears through the use of unused footage from The Force Awakens.[2]`
    },
    {
      title: "Frozen 2",
      slug: "Frozen-2",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71hRFWx7gmL._SY679_.jpg",
        synopsis: `Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic
      space-opera film produced, co-written, and directed by J. J. Abrams. It is the third installment of the Star Wars sequel
      trilogy, following The Force Awakens (2015) and The Last Jedi (2017), and the final episode of the nine-part "Skywalker
      saga".[a] It was produced by Lucasfilm and Abrams's production company Bad Robot Productions, and was distributed by
      Walt Disney Studios Motion Pictures. The ensemble cast includes Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley,
      John Boyega, Oscar Isaac, Anthony Daniels, Kelly Marie Tran, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita
      Nyong'o, Keri Russell, Joonas Suotamo, Ian McDiarmid, and Billy Dee Williams. It features the second posthumous film
      performance by Fisher, who died in 2016 and appears through the use of unused footage from The Force Awakens.[2]`
    }
  ];

  constructor(public _http: HttpClient, private router: Router) {}
  getMoviesApi() {
      console.log(`${this.apiUrl}`);
      return this._http.get(`${this.apiUrl}`)
  }

  getAllMovies() {
    return this.movieData;
  }
  getMovieData(id) {
    return this.movies.filter(movie => {
      return this.movies.id === id;
    });
  }

  
  searchMovies(query) {
    console.log(this.query);
    console.log(this.baseUrl);
    this.router.navigate(['search', this.query]);

    return this._http.get(`${this.baseUrl}+${this.query}+${this.lastUrl}`)
    
  }
  selectThisMovie(movie) {
    this.selectedMovie = movie
    console.log(this.selectedMovie);
    this.router.navigate(['movies']);
    
  }
  reserveChair(slug, index) {
    console.log('${slug}: ${index}')
  }
}