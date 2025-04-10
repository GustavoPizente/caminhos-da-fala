"use client";

import Hamburguer from "./Hamburguer";
import { useEffect, useState, useRef } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [fixar, setFixar] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
  
      if (scrollY > 10) {
        setFixar(true);
      } else {
        setFixar(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div
      ref={headerRef}
      className={`${styles.header} ${fixar ? styles.fixed : ""}`}
    >
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
