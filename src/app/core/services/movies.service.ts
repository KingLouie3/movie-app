import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MovieService {
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
      performance by Fisher, who died in 2016 and appears through the use of unused footage from The Force Awakens.[2]`
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

  constructor() {}
  getAllMovies() {
    return this.movieData;
  }
  getMovieData(slug) {
    return this.movieData.filter(movie => {
      return movie.slug === slug;
    });
  }
  // baseUrl: string =  "https://api.themoviedb.org/3/discover/movie?"
  // apiKey: string = "api_key=fa6d14f9e93a82672442211716f689ca"
  // LastUrl: string = "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  // getMoviesFromApi() {
  // return this._http.get(`${this.baseUrl}+${this.apiKey}+${this.LastUrl}`);
  
  // }
  
}
