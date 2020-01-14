import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
    getAllMovies() {
      return [
        {
          title: 'Star Wars: The Rise Of Skywalker',
          slug: 'star-wars-the-rise-of-skywalker',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/812WFDtTEoL._SY679_.jpg'
        }, 
        {
          title: 'Jumanji',
          slug: 'jumanji',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71c-LwEuU0L._SY679_.jpg'
        },
        {
          title: 'Spies In Disguise',
          slug: 'Spies-in-disguise',
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzg1MzM3OWUtNjgzZC00NjMzLWE1NzAtOThiMDgyMjhhZDBhXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg'
        },
        {
          title: 'Frozen 2',
          slug: 'Frozen-2',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71hRFWx7gmL._SY679_.jpg'
        }


      ]
    }
  }

