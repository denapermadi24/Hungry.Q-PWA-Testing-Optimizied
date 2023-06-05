/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG;

const openIdb = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
      autoIncrement: true,
    });
  },
});

const favRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }

    return (await openIdb).get(OBJECT_STORE_NAME, id);
  },

  async getAllRestaurant() {
    return (await openIdb).getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }
    return (await openIdb).put(OBJECT_STORE_NAME, resto);
  },

  async deleteRestaurant(id) {
    return (await openIdb).delete(OBJECT_STORE_NAME, id);
  },
};

export default favRestaurantIdb;
