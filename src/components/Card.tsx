import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { ISimpsonsResponse } from '../interfaces/IAPIResponse'
import { ICards } from '../interfaces/ICards'
import { Footer } from './Footer'
import { Header } from './Header'
import { Main } from './Main'
//import genshin from "../assets/img/anime.jpg";
export const Card = () => {
  const [cards, setCards] = useState<ICards[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    saveLocalStorage();
    // eslint-disable-next-line
  }, [cards]);
  const saveLocalStorage = () => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }
  const deleteCard = (card: ICards): void => {
    const SCards = [...cards];
    setCards(SCards.filter((value) => value !== card));
  }
  const createCard = async (): Promise<void> => {
    setLoading(true);
    const SCards = [...cards];
    /*SCards.push({
      image: genshin,
      alt: "Genshin",
      name: "Genshin"
    });*/
    const { data }: AxiosResponse<ISimpsonsResponse[]> = await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes");
    SCards.push(...data);
    setCards(SCards);
    setLoading(false);
  }

  return (
    <>
      <Header />
      <Main cards={cards} loading={loading} deleteCard={deleteCard} />
      <button type="button" onClick={createCard}>
        Generar
      </button>
      <Footer />
    </>
  )
}
