import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main-page';
import RouterPaths from '../const/router-paths';
import QuestPage from '../pages/quest-page';
import LoginPage from '../pages/login-page';
import BookingPage from '../pages/booking-page';
import MyQuestsPage from '../pages/my-quests-page';
import ContactsPage from '../pages/contacts';
import NotFoundPage from '../pages/not-found-page';

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterPaths.main} element={<MainPage/>} />
        <Route path={`${RouterPaths.quest}/:id`} element={<QuestPage/>} />
        <Route path={RouterPaths.login} element={<LoginPage/>} />
        <Route path={`${RouterPaths.booking}/:id`} element={<BookingPage/>} />
        <Route path={RouterPaths.myQuests} element={<MyQuestsPage/>} />
        <Route path={RouterPaths.contacts} element={<ContactsPage/>} />
        <Route path={RouterPaths.notFound} element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
