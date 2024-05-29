import { useContext, useEffect, useState } from 'react';
import { FilmCardType } from '../types/types';
import FilmsContext from '../context/FilmsContext';

function FilmCard({ id, title, image, description }: FilmCardType) {
  const { handleFavorite, favoriteFilms } = useContext(FilmsContext);
  const [text, setText] = useState<'Favorite' | 'Unfavorite'>('Favorite');

  const handleClick = () => {
    handleFavorite(id);
    const data = favoriteFilms.find((current) => current.id === id);

    if (data) {
      setText('Favorite');
    } else {
      setText('Unfavorite');
    }
  };

  useEffect(() => {
    const reRenderText = () => {
      const data = favoriteFilms.find((current) => current.id === id);

      if (data) {
        setText('Unfavorite');
      } else {
        setText('Favorite');
      }
    };

    reRenderText();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <img src={ image } alt={ title } />
      <p>{description}</p>
      <button
        onClick={ handleClick }
      >
        {text}
      </button>
    </div>
  );
}

export default FilmCard;
