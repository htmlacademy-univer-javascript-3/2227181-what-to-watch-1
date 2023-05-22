import { VideoPlayer } from '../video-player/video-player';

type SmallFilmCardProps = {
  imgSrc: string;
  title: string;
  id: string;
  videoSrc:string;
}

function SmallFilmCard(props: SmallFilmCardProps): JSX.Element {
  return (<VideoPlayer id = {props.id} title= {props.title} posterSrc={props.imgSrc} videoSrc={props.videoSrc}/>);
}

export default SmallFilmCard;
