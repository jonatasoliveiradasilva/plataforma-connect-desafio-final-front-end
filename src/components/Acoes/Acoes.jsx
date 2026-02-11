import { useState } from "react";

import ColetaSeletiva from "../../assets/coleta-seletiva.png";
import EstudantesInformatica from "../../assets/estudantes-informatica.png";
import AtividadeFisica from "../../assets/atividade-fisica.png";
import DoacaoAlimentos from "../../assets/doacao-alimentos.png";
import Livros from "../../assets/livros.png";
import ManutencaoComputadores from "../../assets/manutencao-computadores.png";

import styles from "../../components/Acoes/Acoes.module.scss";

function Acoes() {

    const [cards] = useState([
        {
            id: 1,
            imagem: ColetaSeletiva,
            titulo: "Mutirão de Reciclagem",
            informacao: "Coletar materiais recicláveis e orientar sobre descarte consciente.",
            botao: "Quero participar",
        },
        {
            id: 2,
            imagem: EstudantesInformatica,
            titulo: "Aulas de tecnologia",
            informacao: "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.",
            botao: "Quero participar",
        },
        {
            id: 3,
            imagem: AtividadeFisica,
            titulo: "Esporte e Inclusão",
            informacao: "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.",
            botao: "Quero participar",
        },
        {
            id: 4,
            imagem: DoacaoAlimentos,
            titulo: "Instituto Grande Família",
            informacao: "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.",
            botao: "Quero doar",
        },
        {
            id: 5,
            imagem: Livros,
            titulo: "Projeto Futuro na Escola",
            informacao: "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.",
            botao: "Quero doar",
        },
        {
            id: 6,
            imagem: ManutencaoComputadores,
            titulo: "Instituto Conecta Jovem",
            informacao: "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital.",
            botao: "Quero doar",
        },
    ]);

    return (
        <section className={styles.container}>
            <div className={styles.caixa}>
                <h2>Ações da Connect</h2>
                <p>Junte-se a quem acredita na mudança.</p>
                <p>Apoie, participe e transforme vidas através de ações sociais que geram impacto real nas comunidades.</p>
            </div>
            <section>
                {
                    cards.map((item) => (
                        <article className={styles.cards} key={item.id}>
                            <img
                                src={item.imagem}
                                alt={item.titulo}
                            />
                            <h3>{item.titulo}</h3>
                            <p>{item.informacao}</p>
                            <button>{item.botao}</button>
                        </article>
                    ))
                }
            </section>
        </section>
    );
}

export default Acoes;
