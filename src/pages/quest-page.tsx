import { Link, useLocation } from 'react-router-dom';
import RouterPaths from '../const/router-paths';
import { difficultLevelDataToText, questTypeDataToText } from '../utils/data-to-text';
import { getQuest } from '../store/api-actions';
import { useAppDispatch, useAppSelector } from '../hooks/typed-wrappers';
import { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function QuestPage (): JSX.Element {

  const dispatch = useAppDispatch();
  const questPageData = useAppSelector((state) => state.DATA.questPage);
  const location = useLocation();

  useEffect(() => {
    dispatch(getQuest({id: location.state as string}));
  }, [dispatch, location.state]);

  return (
    <div className="wrapper">
      <Header/>
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${questPageData.coverImgWebp}, ${questPageData.previewImgWebp} 2x`} />
            <img src={questPageData.coverImg} srcSet={`${questPageData.previewImg} 2x`} width={1366} height={768} alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{questPageData.title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{questTypeDataToText(questPageData.type)}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>{`${questPageData.peopleMinMax[0]}-${questPageData.peopleMinMax[1]}`}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>{difficultLevelDataToText(questPageData.level)}
              </li>
            </ul>
            <p className="quest-page__description">{questPageData.description}</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={RouterPaths.login} state={questPageData.id} >Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default QuestPage;
