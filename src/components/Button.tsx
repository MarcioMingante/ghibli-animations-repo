import { useContext, useState } from 'react';
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

  return (
    <button
      onClick={ handleClick }
    >
      {text}
    </button>
  );
}

export default Button;
