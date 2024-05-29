export const getAnimeListAPI = async () => {
  const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
  const data = await response.json();
  return data;
};
