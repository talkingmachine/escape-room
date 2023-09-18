import { Link } from 'react-router-dom';
import { difficultLevels, questTypes } from '../../const/consts';
import { useAppSelector } from '../../hooks/typed-wrappers';
import { dataToCards } from '../../utils/data-to-text';
import RouterPaths from '../../const/router-paths';
import MainEmpty from './main-empty';


function MainCardsGrid (): JSX.Element {

  const currentFilters = useAppSelector((state) => state.STATES.currentFilters);
  const questsDataList = useAppSelector((state) => state.DATA.questsList);
  const filteredQuests = questsDataList
    .filter((card) =>
      currentFilters.questType === questTypes.all ?
        true :
        card.type === currentFilters.questType
    )
    .filter((card) =>
      currentFilters.difficultLevel === difficultLevels.any ?
        true :
        card.level === currentFilters.difficultLevel
    );

  const cardsGrid = dataToCards(filteredQuests);

  if (cardsGrid.length) {
    return (
      <div className="cards-grid">
        {cardsGrid.map((card) => (
          <div key={card.id} className="quest-card" >
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet={card.previewImgWebp}
                />
                <img
                  src={card.previewImg}
                  width={344}
                  height={232}
                  alt="Мужчина в клетке в подземелье."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <Link className="quest-card__link" to={`${RouterPaths.quest}/${card.id}`} state={card.id}>
                  {card.title}
                </Link>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  {`${card.peopleMinMax[0]}-${card.peopleMinMax[1]}`}&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  {card.level}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <MainEmpty/>
    );
  }


}

export default MainCardsGrid;
