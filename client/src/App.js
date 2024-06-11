import {BrowserRouter , Routes , Route} from 'react-router-dom';

// components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Detailview from './components/Details/Detailview';
import Cart from './components/Cart/Cart';

import Dataprovider from "./context/Dataprovider";

import { Box } from "@mui/material";

function App() {
  return (
    <Dataprovider>
      <BrowserRouter>
        <Header/>
        <Box fontStyle={{marginTop:55}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<Detailview/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </Dataprovider>
  );
}

export default App;
