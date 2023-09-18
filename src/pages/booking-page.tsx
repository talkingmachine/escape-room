import BookingMap from '../components/booking/booking-map';
import BookingForm from '../components/booking/booking-form';
import { useAppSelector } from '../hooks/typed-wrappers';
import Header from '../components/header';
import Footer from '../components/footer';

function BookingPage (): JSX.Element {

  const currentQuest = useAppSelector((state) => state.DATA.questPage);

  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width={1366} height={1959} alt="" />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">{currentQuest.title}</p>
          </div>
          <BookingMap/>
          <BookingForm/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default BookingPage;
