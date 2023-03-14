import React from 'react';
import { IMainProps } from '../interfaces/IMain';

export const Main = ({ cards, loading }: IMainProps): JSX.Element => {
  return (
    <main>
      {
        !loading ? cards.map((value, key) => (
          <div key={key} className='cards-simpsons'>
            <img src={value.image} alt={value.alt} />
            <h2>{value.character}</h2>
          </div>
        )) : (
          "Cargando..."
        )
      }
    </main>
  )
}
