import { difficultLevels, questTypes } from '../../const/consts';
import { useAppSelector } from '../../hooks/typed-wrappers';
import getGridCards from '../../mock/mock-main';
import dataToCards from '../../utils/data-to-cards';


function MainCardsGrid (): JSX.Element {

  const currentFilters = useAppSelector((state) => state.currentFilters);

  const dataGrid = getGridCards();
  const cardsGrid = dataToCards(
    dataGrid.filter((card) =>
      currentFilters.questType === questTypes.all ?
        true :
        card.type === currentFilters.questType
    ) // filter by quest type
      .filter((card) =>
        currentFilters.difficultLevel === difficultLevels.any ?
          true :
          card.level === currentFilters.difficultLevel
      ) // filter by difficult level
  );

  return (
    <div className="cards-grid">
      {cardsGrid.map((card) => (
        <div key={card.id} className="quest-card">
          <div className="quest-card__img">
            <picture>
              <source
                type="image/webp"
                srcSet="img/content/crypt/crypt-size-s.webp, img/content/crypt/crypt-size-s@2x.webp 2x"
              />
              <img
                src="img/content/crypt/crypt-size-s.jpg"
                srcSet="img/content/crypt/crypt-size-s@2x.jpg 2x"
                width={344}
                height={232}
                alt="Мужчина в клетке в подземелье."
              />
            </picture>
          </div>
          <div className="quest-card__content">
            <div className="quest-card__info-wrapper">
              <a className="quest-card__link" href="quest.html">
                {card.title}
              </a>
            </div>
            <ul className="tags quest-card__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {card.peopleMinMax}&nbsp;чел
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
}

export default MainCardsGrid;
