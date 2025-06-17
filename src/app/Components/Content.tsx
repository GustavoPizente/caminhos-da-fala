
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
          <img className={styles.ondamarrom} src="/ondamarrom.svg"  alt="Logo" />
          <h1 className={styles.dadostxtbanner2}>
            
           <div className={styles.atendimento}>Atendimento <span className={styles.fonte24}>Fonoaudiólogico  </span>para todas as idades com foco no <span className={styles.fonte24}>Neurodesenvolvimento </span>  alinhado as praticas do método <span className={styles.fonte24}>Padovan. </span> <p className={styles.localizacao}>Em Florianópolis com Consultório no Rio Tavares, Itacorubi e Lagoa da Conceição, além do atendimento á domicílio.</p></div> 
           
           <img className={styles.mapa} src="/mapa.svg"  alt="Logo" />
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
            
            
              <a href="https://api.whatsapp.com/send?phone=5516981628169" className={styles.btnsaibamais} >
                <img
                  src="/saibamaismarrom.svg"
                  className={styles.saibamais}
                  alt="Saiba mais"
                />
                <span className={styles.shine}></span>
              </a>
           
          </div>
        </div>
      </div>

      <BannerTecnico/>

      <div className={styles.banner1}>
        <Scene />

        <div className={styles.textobanner1}>
          <h1>
            {" "}
            Explore os caminhos da sua fala <br></br>{" "}
            <p>
              Cada fase da vida traz desafios únicos na comunicação.
Desde os primeiros sons até a clareza na maturidade.
Expressar-se bem é essencial para viver e se relacionar melhor.
            </p>{" "}
          </h1>
        </div>

        <a href="https://api.whatsapp.com/send?phone=5516981628169" className={styles.buttonblur}>
          <div className={styles.chamadacontato}> Clique e entre em contato</div>
          
        
        </a>
      </div>

      <div className={styles.inspiracao}>

        <img className={styles.imgslider} src="/imgslider.png"  alt="Logo" />
      </div>

      <div className={styles.sobre} id ="sobre">
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
