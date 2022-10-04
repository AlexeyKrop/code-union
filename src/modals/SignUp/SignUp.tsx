import React from 'react';

import Button from '@mui/material/Button/Button';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import FormGroup from '@mui/material/FormGroup/FormGroup';
import TextField from '@mui/material/TextField/TextField';
import { FormikErrors, useFormik } from 'formik';

export const SignUp: React.FC = () => {
  type FormValues = {
    email?: string;
    password?: string;
    confirmPassword?: string;
    conditionTitle: boolean;
  };
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
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <TextField
          id="email"
          type="email"
          label="email"
          variant="outlined"
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          {...formik.getFieldProps('email')}
        />
        <TextField
          id="password"
          type="password"
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
          variant="outlined"
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          {...formik.getFieldProps('confirmPassword')}
        />
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
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </FormGroup>
    </form>
  );
};
