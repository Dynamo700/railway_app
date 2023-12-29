import './App.css';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Home from './pages/home';
import Posts from './pages/posts';
import Submit from './pages/submit';
import User_profile from './pages/user_profile';
import Login from './pages/login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login/>}/>
          <Route path={"/home"} element={<Home/>} />
          <Route path={"/posts"} element={<Posts/>}/>
          <Route path={"/submit"} element={<Submit/>} />
          <Route path={"/user_profile"} element={<User_profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
