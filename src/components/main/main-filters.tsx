import { difficultLevels, questTypes } from '../../const/consts';
import { useAppDispatch } from '../../hooks/typed-wrappers';
import { setFilterDifficultLevel, setFilterQuestType } from '../../store/actions';

function MainFilters (): JSX.Element {

  const dispatch = useAppDispatch();

  const questTypesChangeHandler = (questType: questTypes) => {
    dispatch(setFilterQuestType(questType));
  };

  const questDifficultLevelChangeHandler = (difficultLevel: difficultLevels) => {
    dispatch(setFilterDifficultLevel(difficultLevel));
  };

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          <li className="filter__item">
            <input type="radio" name="type" id="all" defaultChecked />
            <label className="filter__label" htmlFor="all" onClick={() => questTypesChangeHandler(questTypes.all)}>
              <svg
                className="filter__icon"
                width={26}
                height={30}
                aria-hidden="true"
              >
                <use xlinkHref="#icon-all-quests" />
              </svg>
              <span className="filter__label-text">Все квесты</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="adventure" />
            <label className="filter__label" htmlFor="adventure" onClick={() => questTypesChangeHandler(questTypes.adventures)}>
              <svg
                className="filter__icon"
                width={36}
                height={30}
                aria-hidden="true"
              >
                <use xlinkHref="#icon-adventure" />
              </svg>
              <span className="filter__label-text">Приключения</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="horror" />
            <label className="filter__label" htmlFor="horror" onClick={() => questTypesChangeHandler(questTypes.horror)}>
              <svg
                className="filter__icon"
                width={30}
                height={30}
                aria-hidden="true"
              >
                <use xlinkHref="#icon-horror" />
              </svg>
              <span className="filter__label-text">Ужасы</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="mystic" />
            <label className="filter__label" htmlFor="mystic" onClick={() => questTypesChangeHandler(questTypes.mystic)}>
              <svg
                className="filter__icon"
                width={30}
                height={30}
                aria-hidden="true"
              >
                <use xlinkHref="#icon-mystic" />
              </svg>
              <span className="filter__label-text">Мистика</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="detective" />
            <label className="filter__label" htmlFor="detective" onClick={() => questTypesChangeHandler(questTypes.detective)}>
              <svg
                className="filter__icon"
                width={40}
                height={30}
                aria-hidden="true"
              >
                <use xlinkHref="#icon-detective" />
              </svg>
              <span className="filter__label-text">Детектив</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="sciFi" />
            <label className="filter__label" htmlFor="sciFi" onClick={() => questTypesChangeHandler(questTypes.sciFi)}>
              <svg
                className="filter__icon"
                width={28}
                height={30}
                aria-hidden="true"
              >
                <use xlinkHref="#icon-sci-fi" />
              </svg>
              <span className="filter__label-text">Sci-fi</span>
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          <li className="filter__item">
            <input type="radio" name="level" id="any" defaultChecked />
            <label className="filter__label" htmlFor="any" onClick={() => questDifficultLevelChangeHandler(difficultLevels.any)}>
              <span className="filter__label-text">Любой</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="level" id="easy" />
            <label className="filter__label" htmlFor="easy" onClick={() => questDifficultLevelChangeHandler(difficultLevels.easy)}>
              <span className="filter__label-text">Лёгкий</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="level" id="middle" />
            <label className="filter__label" htmlFor="middle" onClick={() => questDifficultLevelChangeHandler(difficultLevels.medium)}>
              <span className="filter__label-text">Средний</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="level" id="hard" />
            <label className="filter__label" htmlFor="hard" onClick={() => questDifficultLevelChangeHandler(difficultLevels.hard)}>
              <span className="filter__label-text">Сложный</span>
            </label>
          </li>
        </ul>
      </fieldset>
    </form>
  );
}

export default MainFilters;
