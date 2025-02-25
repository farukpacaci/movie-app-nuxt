// {
//     "adult": false,
//     "backdrop_path": "/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg",
//     "belongs_to_collection": {
//       "id": 448150,
//       "name": "Deadpool Collection",
//       "poster_path": "/3pvdko3TNE3WPYrK0epelvzqgEa.jpg",
//       "backdrop_path": "/hBQOWY8qWXJVFAc8yLTh1teIu43.jpg"
//     },
//     "budget": 200000000,
//     "genres": [
//       {
//         "id": 28,
//         "name": "Action"
//       },
//       {
//         "id": 35,
//         "name": "Comedy"
//       },
//       {
//         "id": 878,
//         "name": "Science Fiction"
//       }
//     ],
//     "homepage": "https://www.marvel.com/movies/deadpool-and-wolverine",
//     "id": 533535,
//     "imdb_id": "tt6263850",
//     "origin_country": [
//       "US"
//     ],
//     "original_language": "en",
//     "original_title": "Deadpool & Wolverine",
//     "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
//     "popularity": 22036.206,
//     "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
//     "production_companies": [
//       {
//         "id": 420,
//         "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
//         "name": "Marvel Studios",
//         "origin_country": "US"
//       },
//       {
//         "id": 104228,
//         "logo_path": "/hx0C1XcSxGgat8N62GpxoJGTkCk.png",
//         "name": "Maximum Effort",
//         "origin_country": "US"
//       },
//       {
//         "id": 2575,
//         "logo_path": "/9YJrHYlcfHtwtulkFMAies3aFEl.png",
//         "name": "21 Laps Entertainment",
//         "origin_country": "US"
//       },
//       {
//         "id": 22213,
//         "logo_path": "/qx9K6bFWJupwde0xQDwOvXkOaL8.png",
//         "name": "TSG Entertainment",
//         "origin_country": "US"
//       },
//       {
//         "id": 127928,
//         "logo_path": "/h0rjX5vjW5r8yEnUBStFarjcLT4.png",
//         "name": "20th Century Studios",
//         "origin_country": "US"
//       },
//       {
//         "id": 176762,
//         "logo_path": null,
//         "name": "Kevin Feige Productions",
//         "origin_country": "US"
//       }
//     ],
//     "production_countries": [
//       {
//         "iso_3166_1": "US",
//         "name": "United States of America"
//       }
//     ],
//     "release_date": "2024-07-24",
//     "revenue": 658875919,
//     "runtime": 128,
//     "spoken_languages": [
//       {
//         "english_name": "English",
//         "iso_639_1": "en",
//         "name": "English"
//       }
//     ],
//     "status": "Released",
//     "tagline": "Come together.",
//     "title": "Deadpool & Wolverine",
//     "video": false,
//     "vote_average": 7.9,
//     "vote_count": 1279
//   }

export interface IMovieDetailResponse {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}