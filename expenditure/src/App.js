import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main/Main';
import Registration from './pages/Registration/Registration';
import Authorization from './pages/Authorization/Authorization';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import PrivateRoutes from './PrivateRoutes';
function App() {
  return (
    <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Main/>} path="/main"/>
        </Route>
        <Route path='/' element={<Authorization/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
  );
}

export default App;
