import FotoPerfil from "../../assets/foto-perfil.jpg";

import styles from "../../components/Perfil/Perfil.module.scss";

function Perfil() {
    return (
        <section className={styles.container}>
            <article>
                <img
                    className={styles.perfil}
                    src={FotoPerfil}
                    alt="Foto de Perfil do Jônatas"
                />
                <div className={styles.informacoes}>
                    <h2>Jônatas Oliveira da Silva</h2>
                    <h3>Voluntário ativo</h3>
                    <p className={styles.sobre}>
                        Apaixonado por fazer a diferença na comunidade.
                        Acredito que pequenas ações podem transformar vidas e
                        estou sempre em busca de novas oportunidades para ajudar.
                    </p>
                    <div>
                        <p>São Paulo, SP</p>
                        <p>oliveirajonatas@outlook.com.br</p>
                        <p>Membro desde janeiro de 2022</p>
                    </div>
                    {/* <ul className={styles.interesses}>
                        <li>Assistência Social</li>
                        <li>Design</li>
                        <li>Educação</li>
                        <li>Meio Ambiente</li>
                    </ul> */}
                </div>
            </article>
        </section>
    );
}

export default Perfil;
