import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Routes>
      <Route path="/" Component={ Home } />
      <Route path="/favorites" Component={ Favorites } />
    </Routes>
  );
}

export default App;
