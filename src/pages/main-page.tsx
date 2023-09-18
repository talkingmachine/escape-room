import MainCardsGrid from '../components/main/main-cards-grid';
import MainFilters from '../components/main/main-filters';
import Header from '../components/header';
import Footer from '../components/footer';

function MainPage (): JSX.Element {
  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
              квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
              Выберите тематику
            </h2>
          </div>
          <div className="page-content__item">
            <MainFilters/>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <MainCardsGrid/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default MainPage;
