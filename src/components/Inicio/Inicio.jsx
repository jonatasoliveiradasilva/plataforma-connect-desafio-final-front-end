import DiversidadeCultural from "../../assets/diversidade-cultural.png";

import styles from "../../components/Inicio/Inicio.module.scss";

function Inicio() {
    return (
        <section className={styles.container}>
            <div className={styles.caixa}>
                <h1>Projetos sociais que transformam</h1>
                <p>
                    Conectamos sua empresa com projetos sociais impactantes.
                    Juntos criamos mudanças reais na comunidade.
                </p>
            </div>
            <div>
                <img
                    className={styles.global}
                    src={DiversidadeCultural}
                    alt="Diversidade Cultural"
                />
            </div>
        </section>
    );
}

export default Inicio;
