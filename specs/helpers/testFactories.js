import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import favRestaurantIdb from '../../src/scripts/data/restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favRestaurantIdb,
    data: {
      restaurant,
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
