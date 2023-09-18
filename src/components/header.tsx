import { Link, useLocation } from 'react-router-dom';
import RouterPaths from '../const/router-paths';
import { useAppDispatch, useAppSelector } from '../hooks/typed-wrappers';
import { AuthorizationStatus } from '../const/consts';
import classNames from 'classnames';
import { logout } from '../services/api-requests';
import { checkAuthAction } from '../store/api-actions';

type HeaederPropsType = {
  isLoginPage?: boolean;
};

function Header ({isLoginPage = false}: HeaederPropsType): JSX.Element {

  const authorizeStatus = useAppSelector((state) => state.DATA.authorizationStatus);
  const isAuthorized = authorizeStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();
  const location = useLocation();

  const logoutClickHandler = () => {
    logout().then(() => {
      dispatch(checkAuthAction());
    });
  };

  return (
    <header className="header">
      <div className="container container--size-l">
        <Link className="logo header__logo" to={RouterPaths.main} aria-label="Перейти на Главную">
          <svg width={134} height={52} aria-hidden="true">
            <use xlinkHref="#logo" />
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={classNames('link', { active: location.pathname === RouterPaths.main})} to={RouterPaths.main}>
                  Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className={classNames('link', { active: location.pathname === RouterPaths.contacts})} to={RouterPaths.contacts}>
                  Контакты
              </Link>
            </li>
            {isAuthorized && !isLoginPage ?
              <li className="main-nav__item">
                <Link className={classNames('link', { active: location.pathname === RouterPaths.myQuests})} to={RouterPaths.myQuests}>
                  Мои бронирования
                </Link>
              </li> : false}
          </ul>
        </nav>
        <div className="header__side-nav">
          {!isAuthorized && !isLoginPage ?
            <Link className="btn header__side-item header__login-btn" to={RouterPaths.login}>
                Вход
            </Link> : false }
          {isAuthorized && !isLoginPage ?
            <a className="btn btn--accent header__side-item" onClick={logoutClickHandler}>
              Выйти
            </a> : false }
          <a className="link header__side-item header__phone-link" href="tel:88003335599">
              8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
