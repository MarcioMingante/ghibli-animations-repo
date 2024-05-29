import { useContext, useEffect, useState } from 'react';
import FilmsContext from '../context/FilmsContext';

type ButtonType = {
  id: string
};

function Button({ id }: ButtonType) {
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
    <button
      onClick={ handleClick }
    >
      {text}
    </button>
  );
}

export default Button;
