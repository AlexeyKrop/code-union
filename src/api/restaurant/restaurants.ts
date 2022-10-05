import { instance } from '../config';

export const restaurantsAPI = {
  setRestaurants() {
    return instance.get(`api/v1/restaurants/all?page=1&perPage=10`);
  },
};
