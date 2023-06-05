/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { itActsAsFavoriteRestaurantModel } from './contract/favRestaurantContract';
import favRestaurantIdb from '../src/scripts/data/restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await favRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await favRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(favRestaurantIdb);
});
