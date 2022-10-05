import React from 'react';

import { FormGroup, Modal } from '@mui/material';
import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import { FormikErrors, useFormik } from 'formik';

import { loginTC } from '../../bll/reducers/authReducer';
import { setOpenLoginModalAC } from '../../bll/reducers/modalReducer';
import { useAppDispatch } from '../../bll/state/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '../../bll/state/hooks/useAppSelector/useAppSelector';

import s from './Login.module.css';

type FormValues = {
  email?: string;
  password?: string;
};
export const Login: React.FC = () => {
  const open = useAppSelector(state => state.modal.openLoginModal);
  const dispatch = useAppDispatch();

  const handleClose: () => void = () => {
    dispatch(setOpenLoginModalAC(false));
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      const errors: FormikErrors<FormValues> = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 8) {
        errors.password = 'Password should be of minimum 8 characters length';
      }

      return errors;
    },
    onSubmit: values => {
      dispatch(loginTC(values));
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={s.wrapper}>
        <form onSubmit={formik.handleSubmit}>
          <p className={s.title}>Войти</p>
          <FormGroup>
            <TextField
              id="email"
              type="email"
              label="email"
              margin="normal"
              variant="outlined"
              helperText={formik.touched.email && formik.errors.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              {...formik.getFieldProps('email')}
            />
            <TextField
              id="password"
              type="password"
              margin="normal"
              label="Пароль"
              variant="outlined"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              {...formik.getFieldProps('password')}
            />{' '}
            <Button className={s.btn} type="submit" variant="contained">
              Войти
            </Button>
          </FormGroup>
          <p className={s.register}>Зарегистрироваться</p>
          <p className={s.forgotPassword}>Забыли пароль?</p>
        </form>
      </div>
    </Modal>
  );
};
