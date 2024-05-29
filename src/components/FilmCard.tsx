import { FilmCardType } from '../types/types';
import Button from './Button';

function FilmCard({ id, title, url, description }: FilmCardType) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={ url } alt={ title } />
      <p>{description}</p>
      <Button
        id={ id }
      />
    </div>
  );
}

export default FilmCard;
