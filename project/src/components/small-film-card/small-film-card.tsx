import { VideoPlayer } from "../video-player/video-player";

type SmallFilmCardProps = {
  imgSrc: string;
  title: string;
  id: string;
  videoSrc:string;
}

function SmallFilmCard(props: SmallFilmCardProps): JSX.Element {
  const link = `/films/${props.id}`;
  return (<VideoPlayer id = {props.id} title= {props.title} posterSrc={props.imgSrc} videoSrc={props.videoSrc}/>);
  /*return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.imgSrc} alt={props.title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={link}>{props.title}</a>
      </h3>
    </article>
  );*/
}

export default SmallFilmCard;
