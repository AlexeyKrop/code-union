import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Modal, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button/Button';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import FormGroup from '@mui/material/FormGroup/FormGroup';
import TextField from '@mui/material/TextField/TextField';
import { FormikErrors, useFormik } from 'formik';

import { registerUserTC } from '../../bll/reducers/authReducer';
import { setOpenRegisterModalAC } from '../../bll/reducers/modalReducer';
import { useAppDispatch } from '../../bll/state/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '../../bll/state/hooks/useAppSelector/useAppSelector';
import { theme } from '../../utils/themes/themes';

import s from './SignUp.module.css';

type FormValues = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  conditionTitle: boolean;
};
export const SignUp: React.FC = () => {
  const open = useAppSelector(state => state.modal.openRegisterModal);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      conditionTitle: true,
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
      if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Password should be confirm';
      }
      if (!values.conditionTitle) {
        errors.conditionTitle = 'Must be checked';
      }

      return errors;
    },
    onSubmit: values => {
      const { email, password } = { ...values };

      dispatch(registerUserTC({ email, password }));
    },
  });

  const handleClose: () => void = () => {
    dispatch(setOpenRegisterModalAC(false));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={s.wrapper}>
        <ThemeProvider theme={theme}>
          <IconButton onClick={handleClose} color="primary">
            <CloseIcon color="primary" />
          </IconButton>
        </ThemeProvider>
        <form onSubmit={formik.handleSubmit}>
          <p className={s.title}>Зарегистрироваться</p>
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
            />
            <TextField
              id="confirmPassword"
              type="password"
              label="Повторите пароль"
              margin="normal"
              variant="outlined"
              error={
                formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)
              }
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              {...formik.getFieldProps('confirmPassword')}
            />
            <div className={s.checkBoxWrapper}>
              <FormControlLabel
                control={
                  <Checkbox
                    required
                    defaultChecked
                    {...formik.getFieldProps('conditionTitle')}
                    name="conditionTitle"
                  />
                }
                label=""
              />
              <a className={s.linkText} href="/">
                Я принимаю условия Пользовательского соглашения, политики
                конфиденциальности, Обработки и распространения персональных данных
              </a>
            </div>

            <Button className={s.btn} type="submit" variant="contained">
              Далее
            </Button>
          </FormGroup>
        </form>
      </div>
    </Modal>
  );
};
