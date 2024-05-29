import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import FilmCard from '../components/FilmCard';

export default function Home() {
  const { animeList } = useContext(FilmsContext);

  return (
    <main>
      <h1>Films</h1>
      {animeList.map(({ id, title, image, description }) => (
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
