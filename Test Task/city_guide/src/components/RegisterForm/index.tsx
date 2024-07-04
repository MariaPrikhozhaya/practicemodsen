import React, { useState } from 'react';
import {
  SBlock,
  SButton,
  SForm,
  STitle,
  SMainBlock,
  SText,
  SLink,
  SRow,
  SMdArrowBack,
  SField,
  SErrorMessage,
} from './styles';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
            token: user.refreshToken,
          })
        );
        navigate('/');
      })
      .catch(console.error);
  };

  return (
    <SMainBlock>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Некорректный email адрес')
            .required('Email обязателен'),
          password: Yup.string()
            .min(6, 'Пароль должен содержать не менее 6 символов')
            .required('Пароль обязателен'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values.email);
            handleRegister(values.email, values.password);
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <SForm>
            <SRow>
              <SLink to={'/'}>
                <SMdArrowBack />
              </SLink>
              <STitle>Регистрация</STitle>
            </SRow>
            <SBlock>
              <SField
                type="email"
                name="email"
                placeholder="email"
                className={
                  touched.email && errors.email
                    ? 'error'
                    : touched.email && !errors.email
                      ? 'valid'
                      : ''
                }
              />
              <SErrorMessage name="email" component="div" />
              <SField
                type="password"
                name="password"
                placeholder="пароль"
                className={
                  touched.password && errors.password
                    ? 'error'
                    : touched.password && !errors.password
                      ? 'valid'
                      : ''
                }
              />
              <SErrorMessage name="password" component="div" />
              <SButton type="submit">Зарегистрироваться</SButton>
            </SBlock>

            <SText>
              уже есть аккаунт? <SLink to={'/login'}>Войти</SLink>
            </SText>
          </SForm>
        )}
      </Formik>
    </SMainBlock>
  );
};

export default RegisterForm;
