import React from 'react';
import { IMainProps } from '../interfaces/IMain';

export const Main = ({ cards }: IMainProps) => {
  return (
    <main>
      {
        cards.map((value, key) => (
          <div key={key} className='cards-simpsons'>
            <img src={value.image} alt={value.alt} />
            <h2>{value.name}</h2>
          </div>
        ))
      }
    </main>
  )
}
