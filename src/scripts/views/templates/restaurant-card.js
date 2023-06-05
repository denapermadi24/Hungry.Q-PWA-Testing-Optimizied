/* eslint-disable indent */
import CONFIG from '../../global/config';

const restaurantCardItem = (restaurant) => `
    <div tabindex="0" class="card">
      <a href="#/restaurant/${restaurant.id}" class="card-a-tag">
        <div class="img-container">
          <img tabindex="0" class="card-image lazyload" crossorigin="anonymous" alt="${
            restaurant.name
          }" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
          <span tabindex="0" class="card-rating">
            <i title="ratings" class="fa fa-star"></i>
            <span>${restaurant.rating}</span>
          </span>
        </div>

        <div tabindex="0" class="card-content">
          <h2 class="card-content-title">${restaurant.name} - ${restaurant.city}</h2>
          <p class="truncate">${restaurant.description}</p>
        </div>
      </a>
    </div>
  `;

export default restaurantCardItem;
