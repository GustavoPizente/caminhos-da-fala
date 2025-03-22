import styles from "./content.module.css"
import Scene from "./Scene";


export default function Content() {
    return (
      <div className={styles.content}>

        <div className={styles.banner1}>

            <img src="imgbanner1.png" className={styles.imgbanner1} alt="imagemprincipal" />
        </div>
        <div className={styles.slidertecnico}>

        <img src="imgslider.png" className={styles.imgslider} alt="slider" />
        </div>
        <Scene/>
        <div className={styles.sobre}>

        <img src="imgsobre.png" className={styles.imgsobre} alt="naiarabenecdicto" />
        </div>
        
      </div>
    );
  }