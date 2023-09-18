import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import RouterPaths from '../const/router-paths';

function NotFoundPage (): JSX.Element {
  return (
    <div className="wrapper">
      <Header isLoginPage/>
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <div className="title title--size-m">Страница не найдена &#40;<i>404</i>&#41;</div><br/>
            <span className="title title--size-s">Кажется вы заблудились, скорее </span>
            <Link className="title title--size-s link link--underlined" to={RouterPaths.main}>возвращайтесь!</Link>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default NotFoundPage;
