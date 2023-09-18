import { useEffect } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import MyQuestsCardsGrid from '../components/my-quests/my-quests-cards-grid';
import { useAppDispatch, useAppSelector } from '../hooks/typed-wrappers';
import { getBookedQuests } from '../store/api-actions';
import RouterPaths from '../const/router-paths';
import { AuthorizationStatus } from '../const/consts';
import { useNavigate } from 'react-router-dom';

function MyQuestsPage (): JSX.Element {

  const navigate = useNavigate();
  const authorizeStatus = useAppSelector((state) => state.DATA.authorizationStatus);

  useEffect(() => {
    if (authorizeStatus !== AuthorizationStatus.Auth) {
      navigate(RouterPaths.login);
    }
  }, [authorizeStatus, navigate]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBookedQuests());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width={1366} height={1959} alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          <MyQuestsCardsGrid/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default MyQuestsPage;
