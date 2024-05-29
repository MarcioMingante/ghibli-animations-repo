import { Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { getAnimeListAPI } from './services/api';
import FilmsContext from './context/FilmsContext';
import { FilmCardType } from './types/types';
import Layout from './components/Layout';

function App() {
  const [animeList, setAnimeList] = useState<FilmCardType[]>([]);
  const [favoriteFilms, setFavoriteFilms] = useState<FilmCardType[]>([]);

  const handleFavorite = (id: string) => {
    const data = favoriteFilms.find((current) => current.id === id);

    if (data) {
      const filtered = favoriteFilms.filter((current) => current.id !== id);

      setFavoriteFilms(filtered);
    } else {
      const filtered = animeList.filter((current) => current.id === id);

      setFavoriteFilms((prev) => [...prev, filtered[0]]);
    }
  };

  useEffect(() => {
    const handleAPIInfo = async () => {
      const data = await getAnimeListAPI();

      setAnimeList(data);
    };

    handleAPIInfo();
  }, []);

  return (
    <FilmsContext.Provider
      value={ {
        animeList, handleFavorite, favoriteFilms } }
    >
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/" Component={ Home } />
          <Route path="/favorites" Component={ Favorites } />
        </Route>
      </Routes>
    </FilmsContext.Provider>
  );
}

export default App;
