/* eslint-disable no-undef */
Feature('Review Restaurant');

Before(({ I }) => {
  // root URL : http:localhost:9000
  I.amOnPage('/');
});

Scenario('Customer review', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.card a');
  I.click(locate('.card a').first());

  I.seeElement('.form-review form');

  I.fillField('name-input', 'DenaPermadi');
  I.fillField('review-input', 'textReview');

  I.click('#submit-review');
});
