import React from 'react';

import { setOpenRegisterModalAC } from '../../bll/reducers/modalReducer';
import { useAppDispatch } from '../../bll/state/hooks/useAppDispatch/useAppDispatch';
import { Button } from '../Button/Button';

import s from './Header.module.css';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const onClickHandleEnter: () => void = () => {};
  const onClickHandleRegistration: () => void = () => {
    dispatch(setOpenRegisterModalAC(true));
  };

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
