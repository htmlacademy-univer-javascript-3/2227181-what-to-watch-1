import { Link, useParams } from 'react-router-dom';
import NotFound from '../not-found/not-found';
import { FilmData } from '../../mocks/filmes_mocks';
import { ReviewForm } from '../../components/review-form/review-form';

function AddReview(props: { filmesData: Record<string, FilmData> }): JSX.Element {
  const params = useParams();
  if (!(params.id as string in props.filmesData)) {
    return (<NotFound />);
  }
  const id = params.id as string;
  const filmData = props.filmesData[id];

  return (
    <body>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={filmData.imgBackgroundSrc} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link" style={{ textDecoration: 'none' }}>
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${id}`} className="breadcrumbs__link" style={{ textDecoration: 'none' }}>
                    <span>{filmData.title}</span>
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>
          <div className="film-card__poster film-card__poster--small">
            <img src={filmData.imgPosterSrc} alt={`${filmData.title} poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <ReviewForm/>
        </div>

      </section>
    </body>
  );
}

export default AddReview;
