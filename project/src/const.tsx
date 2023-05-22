export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  };
}

//ID используется в качестве ключа в Record!!!
export interface FilmData {
  title: string;
  imgPreviewSrc: string;
  imgPosterSrc: string;
  rating: number;
  videoSrc: string;
  description: string;
  imgBackgroundSrc: string;
  genres: Array<string>;
  director: string;
  starring: Array<string>;
  released: number;
  runTime: number;
  comments: Array<Comment>;
}

export function ratingToString(rating: number): string {
  if (rating < 3) {
    return 'Bad';
  } else if (rating < 5) {
    return 'Normal';
  } else if (rating < 8) {
    return 'Good';
  } else if (rating < 10) {
    return 'Very good';
  }
  return 'Awesome';
}
