import { FilmData } from '../../const';
import SmallFilmCard from '../small-film-card/small-film-card';

export function FilmsList(props: { filmsData: Record<string, FilmData> }): JSX.Element {
  const filmComponents = [];
  for (const id of Object.keys(props.filmsData)) {
    const imgSrc = props.filmsData[id].imgPreviewSrc;
    const title = props.filmsData[id].title;
    const videoSrc = props.filmsData[id].videoSrc;
    filmComponents.push(<SmallFilmCard videoSrc={videoSrc} imgSrc={imgSrc} title={title} id={id}/>);
  }

  return (
    <div className="catalog__films-list">
      {filmComponents}
    </div>
  );
}
