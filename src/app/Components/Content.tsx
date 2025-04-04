
import BtnAgendar from "./BtnAgendar";
import styles from "./content.module.css";
import Scene from "./Scene";
import OndasCaminhos from "./OndasCaminhossvg";
import Slider from "./Slider";

export default function Content() {
  return (
    <div className={styles.content}>
      

      <div className={styles.banner2}>
        <Slider/>

        <div className={styles.txtbanner2}>
          <h1> Fonoaudiologia Integrativa</h1> <br />{" "}
          <h2>
            A comunicação é essencial em todas as fases da vida, mas nem sempre
            damos a devida atenção ao seu desenvolvimento. No Caminhos da Fala,
            mostro que a fonoaudiologia vai além de corrigir dificuldades na
            fala – ela ajuda na respiração, na postura e até na forma como nos
            expressamos no dia a dia. Cuidar da fala é cuidar do corpo e da
            conexão com o mundo.
          </h2>
        </div>
        <OndasCaminhos/>
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

      <div className={styles.sobre}>
        <img
          src="imgsobre.png"
          className={styles.imgsobre}
          alt="naiarabenecdicto"
        />
      </div>
    </div>
  );
}
