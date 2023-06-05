import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/like-button';
import { initSwalError, initSwalSuccess } from './swal-initiator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, data, favRestaurantIdb }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;
    this._favRestaurantIdb = favRestaurantIdb;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;

      // get resto in indexed db
      const restaurant = await this._favRestaurantIdb.getRestaurant(id);

      if (restaurant) {
        this._renderLikedButtonTemplate();
      } else {
        this._renderLikeButtonTemplate();
      }
    } catch (err) {
      console.error(err);
      initSwalError(err.message);

      throw new Error(err);
    }
  },

  _renderLikeButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await this._favRestaurantIdb.putRestaurant(this._restaurant);
      initSwalSuccess('Restaurant favorited!');
      this._renderButton();
    });
  },

  _renderLikedButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await this._favRestaurantIdb.deleteRestaurant(this._restaurant.id);
      initSwalSuccess('Restaurant unfavorited!');
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
