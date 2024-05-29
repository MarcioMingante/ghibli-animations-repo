export type FilmCardType = {
  id: string
  title: string
  url: string
  description: string
};

export type FilmsContextType = {
  animeList: FilmCardType[]
  handleFavorite: (id:string) => void
  favoriteFilms: FilmCardType[]
};
