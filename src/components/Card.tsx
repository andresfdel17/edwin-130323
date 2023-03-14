import React, { useState } from 'react'
import { ICards } from '../interfaces/ICards'
import { Footer } from './Footer'
import { Header } from './Header'
import { Main } from './Main'
import genshin from "../assets/img/anime.jpg";
export const Card = () => {
  const [cards, setCards] = useState<ICards[]>([]);
  const createCard = () => {
    const SCards = [...cards];
    SCards.push({
      image: genshin,
      alt: "Genshin",
      name: "Genshin"
    });
    setCards(SCards);
  }

  return (
    <>
      <Header />
      <Main cards={cards} />
      <button type="button" onClick={createCard}>
        Generar
      </button>
      <Footer />
    </>
  )
}
