'use client'
import { useEffect, useRef } from 'react'
import styles from './content.module.css'
import BtnAgendar from './BtnAgendar'

export default function BannerTecnico() {
  const sectionsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.ativo)
          } else {
            entry.target.classList.remove(styles.ativo)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2// 60% visível para considerar "em foco"
      }
    )

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className={styles.bannertecnicofundo}>
      <div className={styles.bannertecnico}>
        
        <h1 className={styles.titulobannertecnico}>
          Fonoaudiologia para que toda pessoa possa comunicar e expressar sua essência com mais clareza, conforto e confiança
        </h1>
        <img id="fonoaudiologia"  className={styles.logo} src="/logocompleto.svg"  alt="Logo" />

        {[
          {
            img: './imgtecnicoum.png',
            text:
              'A fonoaudiologia auxilia no controle da abertura bucal, melhorando fala, mastigação e deglutição com exercícios para mobilidade e coordenação dos músculos orofaciais.',
          },
          {
            img: './imgtecnicodois.jpg',
            text:
              'A fonoaudiologia ajuda na reabilitação da ATM, aliviando dores e tensões com exercícios que melhoram a mobilidade, coordenação e equilíbrio muscular da mandíbula.',
          },
          {
            img: './imgtecnicotres.jpg',
            text:
              'A fonoaudiologia ajuda na reabilitação da ATM, aliviando dores e tensões com exercícios que melhoram a mobilidade, coordenação e equilíbrio muscular da mandíbula.',
          },
        ].map((item, i) => (
          <div
  className={styles.blocoTecnico}
  key={i}
  ref={el => {
    if (el) sectionsRef.current[i] = el
  }}
>

            <img src={item.img} className={styles.imgTecnico} />
            <h1 className={styles.txtTecnico}>{item.text}</h1>
          </div>
        ))}

        <button className={styles.buttonblurtecnico}>
          <BtnAgendar/>
          <span className={styles.blureffect}></span>
          <span className={styles.shine}></span>
        </button>
      </div>
    </div>
  )
}
