import React from 'react';

import { Button } from '../../Button/Button';

import s from './SearchForm.module.css';

export const SearchForm: React.FC = () => {
  const onClickHandleSearch: () => void = () => {};

  return (
    <div className={s.wrapper}>
      <input type="text" />
      <Button className={s.btn} callBack={onClickHandleSearch} name="Найти" />
    </div>
  );
};
