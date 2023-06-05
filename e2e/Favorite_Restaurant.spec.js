/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const FavoriteRestoText = 'Empty favorite Resto';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#fav-restaurant');
  I.see(FavoriteRestoText, '#fav-restaurant');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(FavoriteRestoText, '#fav-restaurant');

  I.amOnPage('/');

  I.seeElement('.card a');
  const firstRestoCard = locate('.card-content-title').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-content-title');

  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.card a');
  const firstRestoCard = locate('.card-content-title').first();
  I.click(firstRestoCard);

  // URL: /resto/:id
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-content-title');
  I.click(likedCardTitle);

  // URL: /resto/:id
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/favorite
  I.amOnPage('/#/favorite');
  I.seeElement('#fav-restaurant');
  I.dontSeeElement('.card');
  I.dontSeeElement('.card-content-title');
});
