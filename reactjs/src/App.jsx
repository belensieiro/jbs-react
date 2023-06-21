import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/custom.scss';
import { Navbar } from './components/navbar/navbar';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Banner from './components/banner/banner';
import Error from './components/Error404/error';
import Contacto from './components/contacto/contacto';
import ItemDetailContainer from './components/itemdetailcontainer/itemdetailcontainer';

function App() {
    
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/productos/:categoryId" element={<ItemListContainer />} />
                <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
