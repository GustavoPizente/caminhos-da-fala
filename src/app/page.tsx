"use client";
import styles from "./page.module.css"
import Header from "./Components/Header";
import Content from "./Components/Content"
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";


export default function Home() {
  const [fixar, setFixar] = useState(false);
  const [marginTop, setMarginTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setFixar(scrollY > 1);
      setMarginTop(scrollY > 1); // ativa ou desativa margin-top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.page}>
      <title>Caminhos da fala - Fono</title>
      <main className={styles.main} suppressHydrationWarning>


      <Header fixar={fixar} />
      
        <Content marginTop={marginTop}></Content>
        <Footer></Footer>






       
      </main>      
    </div>
  );
}
