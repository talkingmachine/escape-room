import { Link } from 'react-router-dom';
import RouterPaths from '../const/router-paths';
import ContactsMap from '../components/contacts/contacts-map';


function ContactsPage (): JSX.Element {
  return (
    <div className="wrapper">
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
                <Link className="link not-disabled" to={RouterPaths.main}>Квесты</Link>
              </li>
              <li className="main-nav__item">
                <Link className="link active" to={RouterPaths.contacts}>Контакты</Link>
              </li>
            </ul>
          </nav>
          <div className="header__side-nav">
            <Link className="btn header__side-item header__login-btn" to={RouterPaths.login}>Вход</Link>
            <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
          </div>
        </div>
      </header>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width={1366} height={1959} alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
            <p className="subtitle page-content__subtitle">квесты в&nbsp;Санкт-Петербурге
            </p>
            <h1 className="title title--size-m page-content__title">Контакты</h1>
          </div>
          <div className="contacts">
            <dl className="contacts__list">
              <div className="contacts__item">
                <dt className="contacts__dt">Адрес</dt>
                <dd className="contacts__dd">
                  <address className="contacts__address">Санкт-Петербург,<br /> Набережная реки Карповка, д 5П</address>
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Режим работы</dt>
                <dd className="contacts__dd">Ежедневно, с&nbsp;10:00 до&nbsp;22:00</dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Телефон</dt>
                <dd className="contacts__dd">
                  <a className="link" href="tel:88003335599">8 (000) 111-11-11</a>
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">E–mail</dt>
                <dd className="contacts__dd">
                  <a className="link" href="mailto:info@escape-room.ru">info@escape-room.ru</a>
                </dd>
              </div>
            </dl>
            <div className="contacts__map">
              <div className="map">
                <ContactsMap/>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container container--size-l">
          <div className="socials">
            <ul className="socials__list">
              <li className="socials__item">
                <a className="socials__link" href="#" aria-label="Skype" target="_blank" rel="nofollow noopener noreferrer">
                  <svg className="socials__icon socials__icon--default" width={28} height={28} aria-hidden="true">
                    <use xlinkHref="#icon-skype-default" />
                  </svg>
                  <svg className="socials__icon socials__icon--interactive" width={28} height={28} aria-hidden="true">
                    <use xlinkHref="#icon-skype-interactive" />
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a className="socials__link" href="#" aria-label="ВКонтакте" target="_blank" rel="nofollow noopener noreferrer">
                  <svg className="socials__icon socials__icon--default" width={28} height={28} aria-hidden="true">
                    <use xlinkHref="#icon-vk-default" />
                  </svg>
                  <svg className="socials__icon socials__icon--interactive" width={28} height={28} aria-hidden="true">
                    <use xlinkHref="#icon-vk-interactive" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactsPage;
