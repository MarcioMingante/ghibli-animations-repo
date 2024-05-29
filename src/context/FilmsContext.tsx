import { createContext } from 'react';
import { FilmsContextType } from '../types/types';

const FilmsContext = createContext({} as FilmsContextType);

export default FilmsContext;
