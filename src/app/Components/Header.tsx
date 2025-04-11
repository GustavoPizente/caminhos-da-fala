"use client";

import Hamburguer from "./Hamburguer";
import styles from "./header.module.css";

export default function Header({ fixar }: { fixar: boolean}) {
  return (
    <div className={`${styles.header} ${fixar ? styles.fixed : ""}`}>
      
      <h1 className="logo">
        Caminhos da fala{" "}
        <b>
          <h2> Fonoaudióloga Naiara Mobiglia Benedicto</h2>
        </b>
      </h1>
        <div className="menudropdonw">
          <Hamburguer />
          <ul className="opcoes">
            <li>
              <a href="#" className="itemopcoes">CAMBOIMBIOJOIAS</a>
            </li>
            <li>
              <a href="#" className="itemopcoes">ÁRVORES DE PINDORAMA</a>
            </li>
            <li>
              <a href="#" className="itemopcoes">PORTIFÓLIO</a>
            </li>
            <li>
              <a href="#" className="itemopcoes">PROTÓTIPOS FIGMA</a>
            </li>
          </ul>
        </div>
      </div>

      
      
    
  );
}
