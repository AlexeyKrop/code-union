import { Dispatch } from 'redux';

import { restaurantsAPI } from '../../api/restaurant/restaurants';

const initialState = {
  count: 1,
  restaurants: [
    {
      is_favourite: true,
      id: 3,
      title: 'New restaurant',
      description: 'New restaurant description',
      schedule_id: 3,
      coords_id: 3,
      user_id: 7,
      schedule: {
        id: 3,
        opening: '12:00',
        closing: '23:00',
      },
      coords: {
        id: 3,
        longitude: 76.88892877135433,
        latitude: 43.23672076148338,
        address_name: 'улица Мынбаева, Алматы',
      },
      images: [
        {
          id: 2,
          url: 'https://storage.googleapis.com/foody-dev-d054f.appspot.com//images1626785066345.jpg?GoogleAccessId=firebase-adminsdk-n7qvn%40foody-dev-d054f.iam.gserviceaccount.com&Expires=16446996000&Signature=U99o4MXE9J3myr1QvdJXJqWJQmjNp3fkV%2BvBzjXwxXKha%2FzPxnjqAt%2Bj%2BOgisp6%2B59R1Z0b%2Fi3LB8HIN232epuRbSL5p53jJYcIoIbiTif064NAdUQbMfAs2tbCrryrPxNtjNdyXBxg64tAFnSH%2BQAiC4PYjO4NccD6WGj8sFhP1mt57W6ao5r%2FwONyozPaMWKgG2JsXnoQYh2mRqWm4%2BCQuktvyx3mVLNQPd2xj2bpAkLNWHE6%2FfAphbDzv8VKPf4pJ5mzS6paMSzIx%2FXeZzoNhXJKoFn8TeZhKzwsOE%2FsUqbytnl8oEU%2BQdEoxar%2F%2Fq4sJ8wEpBDuJKPdf6oi3Kw%3D%3D',
          restaurant_id: 3,
        },
      ],
      user: {
        id: 7,
        email: 'test@gmail.com',
        nickname: 'test',
      },
    },
  ],
};

type InitialStateType = typeof initialState;

export const restaurantsReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: RestaurantsType,
): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-RESTAURANTS':
      return {
        ...state,
        restaurants: action.restaurants,
      };
    default:
      return state;
  }
};
// ACTIONS CREATOR
export const setRestaurantsAC = (restaurants: any) =>
  ({ type: 'APP/SET-RESTAURANTS', restaurants } as const);

export const setRestaurantsTC = () => (dispatch: Dispatch) => {
  restaurantsAPI.setRestaurants().then(res => {
    dispatch(setRestaurantsAC(res.data.restaurants));
    console.log(res.data);
  });
};
// TYPES
type SetRestaurantsAT = ReturnType<typeof setRestaurantsAC>;
type RestaurantsType = SetRestaurantsAT;
