import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main-page';
import RouterPaths from '../const/routerPaths';
import { Suspense } from 'react';
import QuestPage from '../pages/quest-page';
import LoginPage from '../pages/login-page';
import BookingPage from '../pages/booking-page';
import MyQuestsPage from '../pages/my-quests-page';
import ContactsPage from '../pages/contacts';

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterPaths.main} element={
          <Suspense>
            <MainPage/>
          </Suspense>
        }
        />
        <Route path={RouterPaths.quest} element={
          <Suspense>
            <QuestPage/>
          </Suspense>
        }
        />
        <Route path={RouterPaths.login} element={
          <Suspense>
            <LoginPage/>
          </Suspense>
        }
        />
        <Route path={RouterPaths.booking} element={
          <Suspense>
            <BookingPage/>
          </Suspense>
        }
        />
        <Route path={RouterPaths.myQuests} element={
          <Suspense>
            <MyQuestsPage/>
          </Suspense>
        }
        />
        <Route path={RouterPaths.contacts} element={
          <Suspense>
            <ContactsPage/>
          </Suspense>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
