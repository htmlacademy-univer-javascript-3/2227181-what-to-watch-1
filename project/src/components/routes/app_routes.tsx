import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found';
import { AppPages } from '../app/app';


export default function AppRoutes(props : {pages:AppPages}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={props.pages.main}/>
        <Route path='/login' element={props.pages.login}/>
        <Route path='/mylist' element={props.pages.myList}/>
        <Route path='/films/:id' element={props.pages.film}/>
        <Route path='/films/:id/review' element={props.pages.review}/>
        <Route path='/player/:id' element={props.pages.player}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
