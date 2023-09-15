import { Link } from 'react-router-dom';
import RouterPaths from '../const/router-paths';
import { getQuestData } from '../mock/mock-main';
import { difficultLevelDataToText, peopleMinMaxDataToText, questTypeDataToText } from '../utils/data-to-text';
import { difficultLevels, questTypes } from '../const/consts';
import { PeopleMinMaxType } from '../types/types';

function QuestPage (): JSX.Element {

  const dataMock = getQuestData()[0];

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
                <Link className="link not-disabled active" to={RouterPaths.main}>Квесты</Link>
              </li>
              <li className="main-nav__item">
                <Link className="link" to={RouterPaths.contacts}>Контакты</Link>
              </li>
            </ul>
          </nav>
          <div className="header__side-nav">
            <Link className="btn header__side-item header__login-btn" to={RouterPaths.login}>Вход</Link>
            <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
          </div>
        </div>
      </header>
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${dataMock.previewImgWebp}, ${dataMock.coverImgWebp} 2x`} />
            <img src={dataMock.previewImg} srcSet={`${dataMock.previewImgWebp} 2x`} width={1366} height={768} alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{dataMock.title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{questTypeDataToText(dataMock.type as questTypes)}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>{peopleMinMaxDataToText(dataMock.peopleMinMax as PeopleMinMaxType)}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>{difficultLevelDataToText(dataMock.level as difficultLevels)}
              </li>
            </ul>
            <p className="quest-page__description">{dataMock.description}</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={RouterPaths.login} state={ dataMock.id } >Забронировать</Link>
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

export default QuestPage;
