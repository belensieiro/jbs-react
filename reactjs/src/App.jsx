import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.scss';
import { Navbar } from './components/navbar/navbar';
import Itemlist from './components/itemlistcontainer/itemlistcontainer';

function App() {
    
    return (
        <div>
            <Navbar />
            <Itemlist greeting="PISÁ FUERTE" />
        </div>
    )
}

export default App
