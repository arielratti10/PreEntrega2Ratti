import NavBar from "./components/NavBar/NavBar";
//importamos componentes de React Router:
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Basquet from './components/Basquet/Basquet';
import Voley from './components/Voley/Voley';
import Tenis from './components/Tenis/Tenis';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Mensaje from "./components/Mensaje/Mensaje";
import Vista from "./components/Vista/Vista";


function App() {
  return (
    <>
      <NavBar/>
      
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/Basquet' element={ <Basquet/> } />
          <Route path='/Voley' element={ <Voley/> } />
          <Route path='/Tenis' element={ <Tenis/> } />
        </Routes>
      </BrowserRouter>

      <ItemListContainer greeting="Bienvenidos a la tienda on-line del Club Morón" />
      <ItemCount/>
      <Mensaje/>
      <Vista/>
    </>
  );
}

export default App;
