import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Registration from './pages/Registration/Registration';
import Authorization from './pages/Authorization/Authorization';
import ErrorPage from './pages/ErrorPage/ErrorPage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Authorization/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
