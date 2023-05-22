import { Comment, FilmData } from '../../const';

function Review(props: { comment: Comment }): JSX.Element {
  const comment = props.comment;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date">{comment.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{String(comment.rating).replace('.', ',')}</div>
    </div>
  );
}

export function Reviews(props: { filmData: FilmData }): JSX.Element {
  const filmData = props.filmData;
  const middleIndex = Math.floor(filmData.comments.length / 2);
  const firstHalfComments = filmData.comments.slice(0, middleIndex);
  const secondHalfComments = filmData.comments.slice(middleIndex);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstHalfComments.map((it) => <Review key={it.id} comment={it} />)}
      </div>
      <div className="film-card__reviews-col">
        {secondHalfComments.map((it) => <Review key={it.id} comment={it} />)}
      </div>
    </div>
  );
}
