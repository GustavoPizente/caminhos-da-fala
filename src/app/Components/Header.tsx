"use client";

import Hamburguer from "./Hamburguer";
import { useEffect, useState } from "react";
import styles from "./header.module.css";


export default function Header() {

  const [fixar, setFixar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setFixar(true);
      } else {
        setFixar(false);
      } 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  return (
    <div className={`${styles.header} ${fixar ? styles.fixed : ""}`}>
      <h1 className="logo"> Caminhos da fala <b><h2> Fonoaudióloga Naiara Mobiglia Benedicto</h2></b> </h1>
      <div className="menudropdonw">
        <Hamburguer/> 
        <ul className="opcoes">
          <li>
            <a
              href="https://camboim-biojoias-git-master-gustavopizentes-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="itemopcoes"
            >
              CAMBOIMBIOJOIAS
            </a>
          </li>
          <li>
            <a
              href="https://arvores-de-pindorama.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="itemopcoes"
            >
              ÁRVORES DE PINDORAMA
            </a>
          </li>
          <li>
            <a
              href="https://portifolio-seven-steel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="itemopcoes"
            >
              PORTIFÓLIO
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/proto/P72HIvGcReBPwAnpn6cl5J/Untitled?page-id=217%3A81&node-id=217-205&viewport=146%2C380%2C0.9&t=VLDV391r7R6q4Nvi-1&scaling=min-zoom&content-scaling=fixed"
              target="_blank"
              rel="noopener noreferrer"
              className="itemopcoes"
            >
              PROTÓTIPOS FIGMA
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
