import Spinner from '../templates/spinner';
import Restaurant from '../../data/restaurant-source';
import restaurantCard from '../templates/restaurant-card';
import { initSwalError } from '../../utils/swal-initiator';

const HomePage = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>

        <div id="main-container">
          <h1 tabindex="0" class="main-content-title">List Restaurant</h1>

          <section id="explore-restaurant"></section>
        </div>
      </div>
    `;
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender() {
    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('#main-container');
    const listContainer = document.querySelector('#explore-restaurant');

    // change main display to spinner
    mainContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const data = await Restaurant.getRestaurantList(); // fetch restaurant list

      // loop restaurants data
      data.restaurants.forEach((restaurant) => {
        listContainer.innerHTML += restaurantCard(restaurant);
      });

      // change spinner display to main
      loading.style.display = 'none';
      mainContainer.style.display = 'block';
    } catch (error) {
      console.error(error);

      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error: ${error.message}`;
      initSwalError(error.message);
    }
  },
};

export default HomePage;
