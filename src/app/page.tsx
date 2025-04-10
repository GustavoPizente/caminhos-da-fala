
import styles from "./page.module.css"
import Header from "./Components/Header";
import Content from "./Components/Content"
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <title>Caminhos da fala - Fono</title>
      <main className={styles.main} suppressHydrationWarning>


        <Header></Header>
        <Content></Content>
        <Footer></Footer>






       
      </main>      
    </div>
  );
}
