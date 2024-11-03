import React, {lazy} from 'react';
import './App.css';
// import MenueItems from './Components/MenuItems/MenuItems';
// import GoToTop from './Components/GoToTop/GoToTop';
// const ErrorPage = lazy(() => import('./Components/ErrorComponent/ErrorPage'));
// const Header = lazy(() =>import ('./Components/Header/Header'));
const AG_Grid =  lazy(() =>import ('./Components/AG_Grid/AG_Grid'));

function App() {
  return (
    <div className="App">
      {/* <ErrorPage/>
      <GoToTop/> */}
      {/* <MenueItems /> */}
      {/* <Header/> */}
      <AG_Grid/>
    </div>
  );
}

export default App;
