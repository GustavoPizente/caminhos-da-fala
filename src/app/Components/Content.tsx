import styles from "./content.module.css"
import Scene from "./Scene";


export default function Content() {
    return (
      <div className={styles.content}>

        <div className={styles.banner1}>

        <Scene/>

        <div className={styles.textobanner1}>
          <h1> Explore os caminhos da sua expressão <br></br> <p>Adultos, crianças, idosos todos precisam de acompanhamento profissional de uma fonoaudiologo cnehcendo o txto aqui só pela foamcao mesmo nada com anada só pencher</p>   </h1>
        </div>

        <img src="btnagendar.png" className={styles.btnagendar}></img>
        </div>
        <div className={styles.slidertecnico}>

        <img src="imgslider.png" className={styles.imgslider} alt="slider" />
        </div>
        
        <div className={styles.sobre}>

        <img src="imgsobre.png" className={styles.imgsobre} alt="naiarabenecdicto" />
        </div>
        
      </div>
    );
  }