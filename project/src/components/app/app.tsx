import AppRoutes from '../routes/app_routes';
import '../../css/main.css';
import { FilmData } from '../../mocks/filmes_mocks';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';

export type AppPages = {
  main : JSX.Element;
  login : JSX.Element;
  myList : JSX.Element;
  film : JSX.Element;
  review : JSX.Element;
  player : JSX.Element;
}

function App(props: {filmesData: Record<string, FilmData>}): JSX.Element {
  const pages: AppPages = {
    main : <Main filmesData={props.filmesData}/>,
    login : <SignIn/>,
    myList : <MyList/>,
    film : <Film filmesData={props.filmesData}/>,
    review : <AddReview filmesData={props.filmesData}/>,
    player : <Player filmesData={props.filmesData}/>,
  };

  return (
    <AppRoutes pages={pages}/>
  );
}

export default App;
