// {
//     "id": 533535,
//     "results": [
//       {
//         "iso_3166_1": "AE",
//         "release_dates": [
//           {
//             "certification": "",
//             "descriptors": [],
//             "iso_639_1": "",
//             "note": "",
//             "release_date": "2024-07-25T00:00:00.000Z",
//             "type": 3
//           }
//         ]
//       },
//       {
//         "iso_3166_1": "AR",
//         "release_dates": [
//           {
//             "certification": "+13",
//             "descriptors": [],
//             "iso_639_1": "",
//             "note": "",
//             "release_date": "2024-07-25T00:00:00.000Z",
//             "type": 3
//           }
//         ]
//       },
//     ]
//   }

export interface IMovieReleaseDate {
    id: number;
    results: IReleaseDate[];
}

interface IReleaseDate {
    iso_3166_1: string;
    release_dates: IReleaseDateDetail[];
}

interface IReleaseDateDetail {
    certification: string;
    descriptors: string[];
    iso_639_1: string;
    note: string;
    release_date: string;
    type: number;
}