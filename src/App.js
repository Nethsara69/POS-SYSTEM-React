import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AddStock from './AddStock';
import './App.css';
import Home from './Home';
import Item from './Item';
import Itemcategory from './Itemcategory';
import Stock from './Stock';


function App() {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/items"  element = {<Item/>} />
        <Route path="/itemcategories" element = {<Itemcategory/>} />
        <Route path='/stocks' element = {<Stock/>} />
        <Route path='/addstocks' element = {<AddStock/>} />
        
        <Route path='/' element = {<Home/>}/>

        </Routes>
        </BrowserRouter>
    )

}

export default App;
