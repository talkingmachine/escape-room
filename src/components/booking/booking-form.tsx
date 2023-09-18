import { FieldValues, useForm } from 'react-hook-form';
import { useAppSelector } from '../../hooks/typed-wrappers';
import { ErrorMessage } from '@hookform/error-message';
import { timeToText } from '../../utils/data-to-text';
import { allowedDate } from '../../const/consts';
import { BookingFormData } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import RouterPaths from '../../const/router-paths';
import { postBookingData } from '../../services/api-requests';

function BookingForm (): JSX.Element{

  const currentPlace = useAppSelector((state) => state.STATES.currentPlace);
  const questPage = useAppSelector((state) => state.DATA.questPage);
  const { register, formState:{errors}, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => {
    const bookingFormData = data as BookingFormData;
    const [date, time] = bookingFormData.date.split('/');
    const bookingData = {
      'date': date,
      'time': time,
      'contactPerson': bookingFormData.name,
      'phone': bookingFormData.tel,
      'withChildren': bookingFormData.children,
      'peopleCount': +bookingFormData.person,
      'placeId': currentPlace.id
    };
    postBookingData(bookingData, questPage.id).then((request) => {
      if (request) {
        navigate(RouterPaths.myQuests);
      }
    });
  };

  return (
    <form className="booking-form" onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section" >
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {currentPlace.slots.today.map((slot) => (
              <label key={slot.time} className="custom-radio booking-form__date">
                <input type="radio"
                  id={timeToText(allowedDate.today, slot.time)}
                  disabled={!slot.isAvailable}
                  value={timeToText(allowedDate.today, slot.time)}
                  {...register('date', {required: 'Выберите время и день'})}
                />
                <span className="custom-radio__label">{slot.time}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {currentPlace.slots.tomorrow.map((slot) => (
              <label key={slot.time} className="custom-radio booking-form__date">
                <input type="radio"
                  id={timeToText(allowedDate.tomorrow, slot.time)}
                  disabled={!slot.isAvailable}
                  value={timeToText(allowedDate.tomorrow, slot.time)}
                  {...register('date', {required: 'Выберите время и день'})}
                />
                <span className="custom-radio__label">{slot.time}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input type="text" id="name" placeholder="Имя"
            {...register('name', {
              required: 'Введите имя',
              maxLength: { value: 15, message: 'Имя должно быть не длиннее 15 символов' },
              minLength: { value: 1, message: 'Имя должно быть не короче 1 символов' },
              pattern:  { value: /[А-Яа-яЁёA-Za-z- ]{1,}/g, message: 'Имя может содержать только буквы' }
            })}
          />
          <ErrorMessage errors={errors} name="name" />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input type="tel" id="tel" placeholder="Телефон"
            {...register('tel', {
              required: 'Введите телефон',
              pattern:  { value: /[0-9]{10,}/g, message: 'Введите телефон в формате 11 цифр' }
            })}
          />
          <ErrorMessage errors={errors} name="tel" />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input type="number" id="person" placeholder="Количество участников"
            {...register('person', {
              required: 'Введите количество участников',
              min: { value: questPage.peopleMinMax[0], message: `Количество участников должно быть от ${questPage.peopleMinMax[0]} до ${questPage.peopleMinMax[1]}` },
              max: { value: questPage.peopleMinMax[1], message: `Количество участников должно быть от ${questPage.peopleMinMax[0]} до ${questPage.peopleMinMax[1]}`},
            })}
          />
          <ErrorMessage errors={errors} name="person" />
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" id="children" defaultChecked {...register('children')}/>
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span><span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" name='user-argeement' id="id-order-agreement" required/>
        <span className="custom-checkbox__icon">
          <svg width={20} height={17} aria-hidden="true">
            <use xlinkHref="#icon-tick" />
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default BookingForm;
