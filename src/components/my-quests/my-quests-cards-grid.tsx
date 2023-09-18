import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/typed-wrappers';
import { dayToText, difficultLevelDataToText } from '../../utils/data-to-text';
import { getBookedQuests } from '../../store/api-actions';
import { removeReservation } from '../../services/api-requests';
import MyQuestsEmpty from './my-quests-empty';

function MyQuestsCardsGrid (): JSX.Element {

  const bookedQuests = useAppSelector((state) => state.DATA.bookedQuests);
  const dispatch = useAppDispatch();

  const removeReservationClickHandler = (reservationId: string) => {
    removeReservation(reservationId).then(() => {
      dispatch(getBookedQuests());
    });
  };

  if (bookedQuests.length) {
    return (
      <div className="cards-grid">
        {bookedQuests.map((bookedQuest) => (
          <div key={bookedQuest.id} className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source type="image/webp" srcSet={bookedQuest.quest.previewImgWebp}/>
                <img src={bookedQuest.quest.previewImg} width={344} height={232} />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <Link className="quest-card__link" to="quest.html">{bookedQuest.quest.title}</Link> {/*//CHANGE LINK */}
                <span className="quest-card__info">[{dayToText(bookedQuest.date)},&nbsp;{bookedQuest.time}. {bookedQuest.location.address}]</span>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>{bookedQuest.peopleCount}&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>{difficultLevelDataToText(bookedQuest.quest.level)}
                </li>
              </ul>
              <button className="btn btn--accent btn--secondary quest-card__btn" type="button" onClick={() => removeReservationClickHandler(bookedQuest.id)}>Отменить</button>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <MyQuestsEmpty/>
    );
  }
}

export default MyQuestsCardsGrid;
