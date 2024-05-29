import { Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { getAnimeListAPI } from './services/api';
import FilmsContext from './context/FilmsContext';

function App() {
  const [animeList, setAnimeList] = useState();

  useEffect(() => {
    const handleAPIInfo = async () => {
      const data = await getAnimeListAPI();

      setAnimeList(data);
    };

    handleAPIInfo();
  }, []);

  return (
    <FilmsContext.Provider value={ { animeList } }>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/favorites" Component={ Favorites } />
      </Routes>
    </FilmsContext.Provider>
  );
}

export default App;
