import React from 'react';

import s from './Search.module.css';
import { SearchForm } from './SearchForm/SearchForm';

export const Search: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <h2>Найдите лучшее предложение от ресторана</h2>
      <SearchForm />
    </div>
  );
};
