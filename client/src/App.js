import React from 'react';
import Accountprovider from './components/context/Accountprovider';
import Detailview from './components/detailview/Detailview';
import Header from './components/header/Header';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import Cart from './components/header/Cart';

const App = () => {
 
  return (
    <>
   <Accountprovider>
     <BrowserRouter>
       <Header/>
      < Routes>
       <Route path ='/' element={ <Home/>} />
        </Routes>
        <Routes>
        <Route path='/product/:id' element={  <Detailview/>}/>
        </Routes>
        <Routes>
        <Route path='/cart' element={<Cart/> }/>
        </Routes>
        </BrowserRouter>
      </Accountprovider>
    
    </>
  )
}

export default App
