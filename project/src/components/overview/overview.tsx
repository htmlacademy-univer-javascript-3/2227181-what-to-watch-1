import { Fragment } from 'react';
import { FilmData, ratingToString } from '../../const';

export function Overview(props: { filmData: FilmData }): JSX.Element {
  const filmData = props.filmData;
  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{String(filmData.rating).replace('.',',')}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingToString(filmData.rating)}</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {filmData.description}
        <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>
        <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
      </div>
    </Fragment>
  );
}
