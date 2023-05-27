import logo from '../../assets/logo.png'
import { Cartwidget } from '../cartwidget/cartwidget'

export const Navbar = () => {

  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <img className="d-flex d-lg-none" src={logo} alt='logo'/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <img className="d-none d-lg-flex" src={logo} alt='logo'/>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Hombres
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Mujeres
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Niños
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Ofertas
                            </a>
                        </li>
                    </ul>
                    <div>
                        <Cartwidget/>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}
