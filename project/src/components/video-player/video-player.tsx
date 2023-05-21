import { useEffect, useState } from 'react';

type VideoPlayerProps = {
  videoSrc: string;
  posterSrc: string;
  title: string;
  id: string;
}

export function VideoPlayer(props: VideoPlayerProps): JSX.Element {
  const [isHovered, setHovered] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  useEffect(() => {
    if (isHovered) {
      const timeout = setTimeout(() => {
        setPlayVideo(true);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setPlayVideo(false);
    }
  }, [isHovered]);
  const link = `/films/${props.id}`;
  return (
    <article
      onMouseEnter={() => { setHovered(true); }}
      onMouseLeave={() => { setHovered(false); }}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        {
          (!playVideo) ?
            <img src={props.posterSrc} width="280" height="175" alt = {props.title} /> :
            <video src={props.videoSrc} width="280" height="175" poster={props.posterSrc} autoPlay muted />
        }
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={link}>{props.title}</a>
      </h3>
    </article>
  );
}
