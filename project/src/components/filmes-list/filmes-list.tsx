import { FilmData } from '../../mocks/filmes_mocks';
import SmallFilmCard from '../small-film-card/small-film-card';

export function FilmesList(props: { filmesData: Record<string, FilmData> }): JSX.Element {
  const filmComponents = [];
  for (const id of Object.keys(props.filmesData)) {
    const imgSrc = props.filmesData[id].imgPreviewSrc;
    const title = props.filmesData[id].title;
    filmComponents.push(<SmallFilmCard imgSrc={imgSrc} title={title} id={id}/>);
  }

  return (
    <div className="catalog__films-list">
      {filmComponents}
    </div>
  );
}
