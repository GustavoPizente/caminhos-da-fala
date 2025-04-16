import BtnAgendar from "./BtnAgendar";
import styles from "./content.module.css";
import Scene from "./Scene";
import Slider from "./Slider";
import { motion } from 'framer-motion';

export default function Content({ marginTop }: { marginTop: boolean }) {
  return (
    <div className={styles.content}>
      <div className={`${styles.banner2} ${marginTop ? styles.margintop : ""}`}>
        <Slider />

        <motion.div
  className={styles.txtbanner2}
  initial={{ scale: 0.95 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
>
  <span className={styles.fonte20}>
    Fonoaudiologia
  </span> 
  {" "}para que toda{" "}
  <span className={styles.fonte20}>voz </span> 
  {" "}possa{" "}
  <span className={styles.fonte20}>crescer, encantar </span> 
  {" "}e{" "}
  <span className={styles.fonte24}>expressar</span> 
  {" "}sua essência com mais{" "}
  <span className={styles.fonte20}>
    clareza, conforto e confiança.{" "}
  </span>
</motion.div>

        {/*<OndasCaminhos />*/}
        <div className={styles.bottombanner2}>
        <motion.div
  className={styles.bgAnimado}
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 2, ease: 'easeOut' }}
></motion.div>

  <div className={styles.chamadabanner2}>
    <img src="/logo.png" className={styles.logo} alt="Logo" />
    <button className={styles.btnsaibamais}>
      <img src="/btnsaibamais.png" className={styles.saibamais} alt="Saiba mais" />
    </button>
  </div>
</div>
</div>


      <div className={styles.bannertecnicofundo}>
        <div className={styles.bannertecnico}>
          <div className={styles.tecnicoum}>
            <img className={styles.imgtecnicoum} src="./imgtecnicoum.png"></img>
            <h1 className={styles.txttecnicoum}>
              A fonoaudiologia auxilia no controle da abertura bucal, melhorando
              fala, mastigação e deglutição com exercícios para mobilidade e
              coordenação dos músculos orofaciais.
            </h1>
          </div>
          <div className={styles.tecnicodois}>
            <img
              className={styles.imgtecnicodois}
              src="./imgtecnicodois.jpg"
            ></img>
            <h1 className={styles.txttecnicodois}>
              A fonoaudiologia ajuda na reabilitação da ATM, aliviando dores e
              tensões com exercícios que melhoram a mobilidade, coordenação e
              equilíbrio muscular da mandíbula.
            </h1>
          </div>
          <div className={styles.tecnicotres}>
            <img
              className={styles.imgtecnicotres}
              src="./imgtecnicotres.jpg"
            ></img>
            <h1 className={styles.txttecnicotres}>
              A fonoaudiologia ajuda na reabilitação da ATM, aliviando dores e
              tensões com exercícios que melhoram a mobilidade, coordenação e
              equilíbrio muscular da mandíbula.
            </h1>
          </div>
        </div>
      </div>

      <div className={styles.banner1}>
        <Scene />

        <div className={styles.textobanner1}>
          <h1>
            {" "}
            Explore os caminhos da sua expressão <br></br>{" "}
            <p>
              Adultos, crianças, idosos todos precisam de acompanhamento
              profissional de uma fonoaudiologo cnehcendo o txto aqui só pela
              foamcao mesmo nada com anada só pencher
            </p>{" "}
          </h1>
        </div>

        <button className={styles.buttonblur}>
          <BtnAgendar />
          <span className={styles.blureffect}></span>
          <span className={styles.shine}></span>
        </button>
      </div>

      <div className={styles.inspiracao}></div>

      <div className={styles.sobre}>
        <img
          src="imgsobre.png"
          className={styles.imgsobre}
          alt="naiarabenecdicto"
        />

        <div className={styles.txtsobre}>
          <div className={styles.titulosobre}>
            {" "}
            <h1> Fonoaudióloga Naiara Mobiglia Benedicto</h1>
            <h2>
              pela USP Ribeirão Preto, residencia em Nao sei oande, Pos graducao
              em tal , formacao em TAL , Padovan em formaçao{" "}
            </h2>{" "}
          </div>

          <h3>
            Como fonoaudióloga, vejo a comunicação como um processo que envolve
            todo o corpo. A fala está conectada à postura, respiração e
            coordenação motora, e meu trabalho busca esse equilíbrio. Através de
            movimentos rítmicos e estímulos neuroevolutivos, auxilio no
            desenvolvimento da linguagem de forma global, aprimorando também
            funções essenciais como respiração, mastigação e deglutição.
            Acompanhar a evolução dos meus pacientes e seu progresso na
            comunicação é minha maior motivação.
          </h3>
        </div>
      </div>
    </div>
  );
}
