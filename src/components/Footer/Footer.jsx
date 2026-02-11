import WhatsApp from "../../assets/whatsapp.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";

import Logo from "../../assets/logo.png";

import styles from "../../components/Footer/Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.rodape}>
            <img
                className={styles.logo}
                src={Logo}
                alt="Logo"
            />
            <p>
                © 2026 Vai na Web & Empower.
                Todos os direitos reservados.
                Projeto destinado exclusivamente a fins educativos.
            </p>
            <nav>
                <a href="#">
                    <img
                        className={styles.social}
                        src={WhatsApp}
                        alt="Logo WhatsApp"
                    />
                </a>
                <a href="#">
                    <img
                        className={styles.social}
                        src={Instagram}
                        alt="Logo Instagram"
                    />
                </a>
                <a href="#">
                    <img
                        className={styles.social}
                        src={LinkedIn}
                        alt="Logo LinkedIn"
                    />
                </a>
            </nav>
        </footer>
    );
}

export default Footer;
