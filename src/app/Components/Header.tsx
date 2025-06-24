"use client";

import Hamburguer from "./Hamburguer";
import styles from "./header.module.css";

export default function Header({ fixar }: { fixar: boolean}) {
  return (
    <div className={`${styles.header} ${fixar ? styles.fixed : ""}`}>
      
      <a  href="#logo"><h1 className="logo" >
        Caminhos da fala{" "}
        <b>
          <h2> Fonoaudióloga Naiara Mobiglia Benedicto</h2>
        </b>
      </h1>
      </a>
        <div className="menudropdonw">
          <Hamburguer />
          <ul className="opcoes">
            <li>
              <a href="https://api.whatsapp.com/send?phone=5516981628169" className="itemopcoes">Contato</a>
            </li>
            <li>
              <a href="#fonoaudiologia" className="itemopcoes">A Fonoaudiologia</a>
            </li>
            <li>
              <a href="#sobre" className="itemopcoes">Sobre</a>
            </li>
            
          </ul>
        </div>
      </div>

      
      
    
  );
}
