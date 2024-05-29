import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import FilmCard from '../components/FilmCard';

export default function Favorites() {
  const { favoriteFilms } = useContext(FilmsContext);

  return (
    <main>
      <h1>Favorites</h1>
      {favoriteFilms.map(({ id, title, image, description }) => (
        <FilmCard
          key={ id }
          id={ id }
          title={ title }
          image={ image }
          description={ description }
        />
      ))}
    </main>
  );
}
