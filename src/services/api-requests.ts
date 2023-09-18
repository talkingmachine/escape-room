import { isRejectedWithValue } from '@reduxjs/toolkit';
import APIRoutes from '../const/api-routes';
import { BookingData } from '../types/types';
import createAPI from './api-axios';

const api = createAPI();

const postBookingData = async (payload: BookingData, id: string) => {
  try {
    const {data} = await api.post<BookingData>(APIRoutes.PostBookingData(id), payload);
    return data;
  } catch (err) {
    return isRejectedWithValue(err);
  }
};

const removeReservation = async (reservationId: string) => {
  try {
    const {data} = await api.delete<string>(APIRoutes.RemoveReservation(reservationId));
    return data;
  } catch (err) {
    return isRejectedWithValue(err);
  }
};

const logout = async () => {
  try {
    const {data} = await api.delete<string>(APIRoutes.Logout());
    return data;
  } catch (err) {
    return isRejectedWithValue(err);
  }
};

export {postBookingData, removeReservation, logout};
