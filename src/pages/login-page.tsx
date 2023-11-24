import { useLocation, useNavigate } from 'react-router-dom';
import RouterPaths from '../const/router-paths';
import { FieldValues, useForm } from 'react-hook-form';
import { loginAction } from '../store/api-actions';
import { AuthData } from '../types/types';
import { useAppDispatch, useAppSelector } from '../hooks/typed-wrappers';
import { AuthorizationStatus } from '../const/consts';
import { useEffect } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import Header from '../components/header';
import Footer from '../components/footer';

function LoginPage (): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const authorizeStatus = useAppSelector((state) => state.DATA.authorizationStatus);

  const { register, formState:{errors}, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => {
    const auth = data as AuthData;
    dispatch(loginAction({authData: {
      email: auth.email,
      password: auth.password
    }}));
  };

  useEffect(() => {
    if (authorizeStatus === AuthorizationStatus.Auth) {
      if (location.state) {
        navigate(`${RouterPaths.booking}/${location.state as string}`, { state: location.state as string });
      } else {
        navigate(RouterPaths.main);
      }
    }
  });


  return (
    <div className="wrapper">
      <Header isLoginPage/>
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width={1366} height={768} alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form className="login-form" onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">E&nbsp;–&nbsp;mail</label>
                    <input type="email" id="email" placeholder="Адрес электронной почты"
                      {...register('email', {
                        required: 'Введите Email',
                        pattern: { value: /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u, message: 'Введите корректный Email' }
                      })}
                    />
                    <ErrorMessage errors={errors} name="email" />
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">Пароль</label>
                    <input type="password" id="password" placeholder="Пароль"
                      {...register('password', {
                        required: 'Введите пароль',
                        maxLength: { value: 15, message: 'Пароль должен быть не длиннее 15 символов' },
                        minLength: { value: 3, message: 'Пароль должен быть не короче 3 символов' },
                        pattern:  { value: /(\d+)([a-zA-Z]+)|([a-zA-Z]+)(\d+)/g, message: 'Пароль должен содержать хотя бы одну букву и одну цифру' }
                      })}
                    />
                    <ErrorMessage errors={errors} name="password" />
                  </div>
                </div>
                <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">Я&nbsp;согласен с
                  <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default LoginPage;
