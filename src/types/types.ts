export type FilmCardType = {
  id: string
  title: string
  image: string
  description: string
};

export type FilmsContextType = {
  animeList: FilmCardType[]
  handleFavorite: (id:string) => void
  favoriteFilms: FilmCardType[]
};
