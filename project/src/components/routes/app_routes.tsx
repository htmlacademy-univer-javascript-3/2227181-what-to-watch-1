import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main';
import SignIn from '../../pages/sign_in';
import MyList from '../../pages/my_list';
import NotFound from '../../pages/not_found';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/mylist' element={<MyList/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
