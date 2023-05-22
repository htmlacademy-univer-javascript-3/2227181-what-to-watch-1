import { Fragment } from 'react';
import { FilmData } from '../../const';

export function Details(props: { filmData: FilmData }): JSX.Element {
  const filmData = props.filmData;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{filmData.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {
              filmData.starring.map(
                (it, ind) => (
                  <Fragment key={it}>
                    {`${it}${(ind !== filmData.starring.length - 1) ? ',' : ''}`}<br />
                  </Fragment>
                )
              )
            }

          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{Math.ceil(filmData.runTime / 60)}h {filmData.runTime % 60}m</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{filmData.genres.join(', ')}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{filmData.released}</span>
        </p>
      </div>
    </div>
  );
}
