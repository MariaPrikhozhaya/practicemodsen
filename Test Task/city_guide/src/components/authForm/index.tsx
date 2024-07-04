import React from 'react';
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
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    console.log(email);
    signInWithEmailAndPassword(auth, email, password)
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
      .catch(() => alert('Invalid user!'));
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
            handleLogin(values.email, values.password);
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
              <STitle>Вход</STitle>
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
              <SButton type="submit" disabled={isSubmitting}>
                Войти
              </SButton>
            </SBlock>
            <SText>
              нет аккаунта? <SLink to={'/register'}>Зарегистрироваться</SLink>
            </SText>
          </SForm>
        )}
      </Formik>
    </SMainBlock>
  );
};

export default AuthForm;
