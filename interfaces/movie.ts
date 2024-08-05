// {
//     "adult": false,
//     "backdrop_path": null,
//     "belongs_to_collection": null,
//     "budget": 0,
//     "genres": [],
//     "homepage": "",
//     "id": 1324295,
//     "imdb_id": null,
//     "origin_country": [
//       "US"
//     ],
//     "original_language": "en",
//     "original_title": "Faith Street Corner Tavern",
//     "overview": "The surreal tale of a twin and his brother's journey through life's trials and tribulations based on their true life's experiences. It is also the story of the unique friendship of three artists, and the power of art and love to redeem the dignity of three outcasts denigrated by an indifferent and hostile society. The three friends make a movie that parallels the story of the redemptive power of art in their outside lives.",
//     "popularity": 0,
//     "poster_path": null,
//     "production_companies": [],
//     "production_countries": [],
//     "release_date": "",
//     "revenue": 0,
//     "runtime": 75,
//     "spoken_languages": [
//       {
//         "english_name": "English",
//         "iso_639_1": "en",
//         "name": "English"
//       }
//     ],
//     "status": "Released",
//     "tagline": "",
//     "title": "Faith Street Corner Tavern",
//     "video": false,
//     "vote_average": 0,
//     "vote_count": 0
//   }


export interface IMovie {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: any | null;
    budget: number;
    genres: any[];
    homepage: string;
    id: number;
    imdb_id: string | null;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: any[];
    production_countries: any[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: any[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}