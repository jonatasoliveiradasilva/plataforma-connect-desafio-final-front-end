import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inicio from "../../components/Inicio/Inicio";
import Acoes from "../../components/Acoes/Acoes";
import QuemSomos from "../../components/QuemSomos/QuemSomos";
import Perfil from "../../components/Perfil/Perfil";

import Logo from "../../assets/logo.png";
import FotoPerfil from "../../assets/foto-perfil.jpg";

import styles from "../../components/Navbar/Navbar.module.scss";

function Navbar() {
    return (
        <BrowserRouter>
            <nav className={styles.navegacao}>
                <Link
                    to="/"
                >
                    <img
                        className={styles.logo}
                        src={Logo}
                        alt="Logo"
                    />
                </Link>
                <ul>
                    <li>
                        <Link
                            className={styles.link}
                            to="/">
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.link}
                            to="/acoes">
                            Ações da Connect
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.link}
                            to="/quemsomos">
                            Quem Somos
                        </Link>
                    </li>
                </ul>
                <Link
                    to="/perfil"
                >
                    <img
                        className={styles.perfil}
                        src={FotoPerfil}
                        alt="Foto de Perfil do Jônatas"
                    />
                </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/acoes" element={<Acoes />} />
                <Route path="/quemsomos" element={<QuemSomos />} />
                <Route path="/perfil" element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navbar;
