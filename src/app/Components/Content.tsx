import BtnAgendar from "./BtnAgendar";
import styles from "./content.module.css";
import Scene from "./Scene";
import Slider from "./Slider";
import { motion } from "framer-motion";
import BannerTecnico from "./BannerTecnico"

export default function Content({ marginTop }: { marginTop: boolean }) {
  return (
    <div className={styles.content}>
      <div className={`${styles.banner2} ${marginTop ? styles.margintop : ""}`}>
        <Slider />

        <motion.div
          className={styles.txtbanner2}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className={styles.chamada}>
          <span className={styles.fonte20}>Fonoaudiologia</span> para que toda{" "}
          <span className={styles.fonte20}>voz </span> possa{" "}
          <span className={styles.fonte20}>crescer, encantar </span> e{" "}
          <span className={styles.fonte24}>expressar</span> sua essência com
          mais{" "}
          <span className={styles.fonte20}>
            clareza, conforto e confiança.{" "}
          </span>

          </h1>

          <img className={styles.logo} src="/logo.png"  alt="Logo" />
          <h1 className={styles.dadostxtbanner2}>
            Atendimentos em Constultório no Rio Tavares/ Florianópolis 
            Tratamento integrativo com foco no Neurodesevolvimento alinhado as
            praticas do metodo Padovan
          </h1>
        </motion.div>

        {/*<OndasCaminhos />*/}
        <div className={styles.bottombanner2}>
          <motion.div
            className={styles.bgAnimado}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          ></motion.div>

          <div className={styles.chamadabanner2}>
            
            
              <button className={styles.btnsaibamais}>
                <img
                  src="/btnsaibamais.png"
                  className={styles.saibamais}
                  alt="Saiba mais"
                />
                <span className={styles.shine}></span>
              </button>
           
          </div>
        </div>
      </div>

      <BannerTecnico/>

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
              Formada pela USP de Ribeirão Preto, com residencia no Hospital das Clínicas com em foco Saúde Família. Terapeuta INPP (Institute for Neuro Physiological Psychology) e Metodo Padovan de Reorganização Multifucnional  em Formação {" "}
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
