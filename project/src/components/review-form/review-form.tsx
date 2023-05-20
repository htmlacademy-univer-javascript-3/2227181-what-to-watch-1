import { ChangeEvent, Fragment, useState } from 'react';

export function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    reviewText: ''
  });

  const updateState = (evt: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {[...Array(10).keys()].reverse().map((i) => (
            <Fragment key={i}>
              <input
                checked = {formData.rating === String(i)}
                className="rating__input"
                id={`star-${i}`}
                type="radio"
                name="rating"
                value={String(i)}
                onChange={updateState}
              />
              <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea onChange={updateState} className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text" value={formData.reviewText}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}
