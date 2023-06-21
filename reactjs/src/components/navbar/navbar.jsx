import logo from '../../assets/logo.png'
import { Cartwidget } from '../cartwidget/cartwidget'
import { Link } from 'react-router-dom'

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
                        <div className="nav-item">
                            <Link className="nav-link" to="/">
                                Inicio
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/productos/hombre">
                                Hombre
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/productos/mujer">
                                Mujer
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/productos/niños">
                                Niños
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/contacto">
                                Contacto
                            </Link>
                        </div>
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
