import React, {lazy} from 'react';
import './App.css';
// import MenueItems from './Components/MenuItems/MenuItems';
// import GoToTop from './Components/GoToTop/GoToTop';
// const ErrorPage = lazy(() => import('./Components/ErrorComponent/ErrorPage'));
// const Header = lazy(() =>import ('./Components/Header/Header'));
const AGGrid =  lazy(() =>import ('./Components/AG_Grid/AG_Grid'));

function App() {
  return (
    <div className="App">
      {/* <ErrorPage/>
      <GoToTop/> */}
      {/* <MenueItems /> */}
      {/* <Header/> */}
      <AGGrid/>
    </div>
  );
}

export default App;
