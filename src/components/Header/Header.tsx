import React from 'react';

import { Button } from '../Button/Button';

import s from './Header.module.css';

export const Header: React.FC = () => {
  const onClickHandleEnter: () => void = () => {};
  const onClickHandleRegistration: () => void = () => {};

  return (
    <nav className={s.wrapper}>
      <div>
        <a className={s.title} href="/">
          Главная
        </a>
      </div>
      <div className={s.btnGroup}>
        <Button
          className={`${s.btn} ${s.registrationBtn}`}
          name="Регистрация"
          callBack={onClickHandleRegistration}
        />
        <Button
          className={`${s.btn} ${s.enterBtn}`}
          name="Войти"
          callBack={onClickHandleEnter}
        />
      </div>
    </nav>
  );
};
