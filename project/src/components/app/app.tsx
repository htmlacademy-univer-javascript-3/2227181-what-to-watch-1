import AppRoutes from '../routes/app_routes';
import '../../css/main.css';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import { FilmData } from '../../const';

export type AppPages = {
  main : JSX.Element;
  login : JSX.Element;
  myList : JSX.Element;
  film : JSX.Element;
  review : JSX.Element;
  player : JSX.Element;
}

function App(props: {filmsData: Record<string, FilmData>}): JSX.Element {
  const pages: AppPages = {
    main : <Main filmesData={props.filmsData}/>,
    login : <SignIn/>,
    myList : <MyList/>,
    film : <Film filmesData={props.filmsData}/>,
    review : <AddReview filmesData={props.filmsData}/>,
    player : <Player filmesData={props.filmsData}/>,
  };

  return (
    <AppRoutes pages={pages}/>
  );
}

export default App;
